"use client";

import {
  Plus,
  Image as ImageIcon,
  Save,
  ArrowLeft,
  Info,
  DollarSign,
  Trash2,
  ExternalLink,
  Edit2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";
import { MOCK_PRODUCTS, CATEGORIES } from "@/data/dashboard/products";
import { cn } from "@/lib/utils";

export default function EditProductPage() {
  const params = useParams();
  const productId = Number(params.id);

  // Find product from mock data
  const product =
    MOCK_PRODUCTS.find((p) => p.id === productId) || MOCK_PRODUCTS[0];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/products"
          className="p-2 bg-card border border-border rounded-xl hover:bg-muted transition-all cursor-pointer group"
        >
          <ArrowLeft className="h-5 w-5 text-text-muted group-hover:text-text-primary transition-colors" />
        </Link>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-text-primary">
              Edit Product
            </h1>
            <span className="text-sm text-text-muted font-mono bg-muted px-2 py-0.5 rounded-lg border border-border">
              ID: #{product.id}
            </span>
          </div>
          <p className="text-sm text-text-muted">
            Currently editing:{" "}
            <span className="font-bold text-primary">{product.name}</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border rounded-2xl bg-card shadow-sm ring-1 ring-border border-none">
            <CardHeader className="px-6 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Info className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold">
                  Basic Information
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                  Product Name
                </label>
                <input
                  type="text"
                  defaultValue={product.name}
                  className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                  Description
                </label>
                <textarea
                  rows={5}
                  defaultValue={product.description}
                  className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                    Category
                  </label>
                  <select
                    className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none cursor-pointer"
                    defaultValue={product.categories[0]}
                  >
                    {CATEGORIES.filter((c) => c !== "All").map((cat) => (
                      <option key={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                    SKU
                  </label>
                  <input
                    type="text"
                    defaultValue={product.sku}
                    className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border rounded-2xl bg-card shadow-sm ring-1 ring-border border-none">
            <CardHeader className="px-6 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-success/10 rounded-lg">
                  <DollarSign className="h-5 w-5 text-success" />
                </div>
                <CardTitle className="text-lg font-bold">
                  Pricing & Stock
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                    Regular Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-xs font-bold">
                      $
                    </span>
                    <input
                      type="number"
                      defaultValue={product.price}
                      className="w-full pl-8 pr-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                    Discount Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-xs font-bold">
                      $
                    </span>
                    <input
                      type="number"
                      defaultValue={(
                        product.price *
                        (1 - (product.discount || 0) / 100)
                      ).toFixed(2)}
                      className="w-full pl-8 pr-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                    Discount (%)
                  </label>
                  <input
                    type="number"
                    defaultValue={product.discount || 0}
                    className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                    Current Stock
                  </label>
                  <input
                    type="number"
                    defaultValue={product.stock}
                    className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                    Maximum Stock
                  </label>
                  <input
                    type="number"
                    defaultValue={product.maxStock}
                    className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-border rounded-2xl bg-card shadow-sm ring-1 ring-border border-none overflow-hidden">
            <CardHeader className="px-6 border-b border-border/50 bg-muted/30">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <ImageIcon className="h-5 w-5 text-secondary" />
                </div>
                <CardTitle className="text-lg font-bold">
                  Product Media
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-border bg-muted/10 group">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button className="p-2 bg-white text-text-primary rounded-lg hover:bg-muted transition-colors">
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-error text-white rounded-lg hover:opacity-90 transition-all">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-xl bg-muted border border-border flex items-center justify-center relative overflow-hidden group"
                    >
                      <Image
                        src={product.image}
                        alt="Gallery"
                        fill
                        className="object-cover opacity-50"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Plus className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  ))}
                  <div className="aspect-square rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-1 bg-muted/10 hover:bg-muted/30 hover:border-primary/50 transition-all cursor-pointer">
                    <Plus className="h-4 w-4 text-text-muted" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border rounded-2xl bg-card shadow-sm ring-1 ring-border border-none">
            <CardHeader className="px-6 border-b border-border/50">
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-text-muted">
                Visibility & Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/20 rounded-xl border border-border/50">
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-text-primary">Status</p>
                  <p className="text-[10px] text-text-muted">
                    {product.stock > 0
                      ? "Published & In Stock"
                      : "Out of Stock"}
                  </p>
                </div>
                <Badge
                  className={cn(
                    "font-bold uppercase text-[9px]",
                    product.stock > 0
                      ? "bg-success text-white"
                      : "bg-error text-white",
                  )}
                >
                  {product.stock > 0 ? "Active" : "Hidden"}
                </Badge>
              </div>

              <div className="w-full h-px bg-border/50"></div>

              <div className="flex flex-col gap-2">
                <button className="w-full py-3 bg-primary text-white text-xs font-black rounded-xl hover:opacity-90 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-primary/20 uppercase tracking-widest">
                  <Save className="h-4 w-4" />
                  Update Product
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button className="py-2.5 bg-card border border-border text-text-muted text-[10px] font-black rounded-xl hover:bg-muted transition-all cursor-pointer uppercase tracking-widest flex items-center justify-center gap-1">
                    Preview
                    <ExternalLink className="h-3 w-3" />
                  </button>
                  <button className="py-2.5 bg-card border border-border text-error text-[10px] font-black rounded-xl hover:bg-error/5 transition-all cursor-pointer uppercase tracking-widest flex items-center justify-center gap-1">
                    Delete
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

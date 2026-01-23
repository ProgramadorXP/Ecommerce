"use client";

import {
  Plus,
  ImageIcon,
  Save,
  ArrowLeft,
  Info,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewProductPage() {
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
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">
            Add New Product
          </h1>
          <p className="text-sm text-text-muted">
            Fill in the details to create a new item in your catalog.
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
                  placeholder="e.g. Vendix Pro Sneakers 2026"
                  className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                  Description
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe the product features, materials, and benefits..."
                  className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                    Category
                  </label>
                  <select className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                    <option>Footwear</option>
                    <option>Apparel</option>
                    <option>Athletic</option>
                    <option>Accessories</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                    SKU (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="VDX-SNK-001"
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
                      placeholder="0.00"
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
                      placeholder="0.00"
                      className="w-full pl-8 pr-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                    Cost Per Item
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-xs font-bold">
                      $
                    </span>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full pl-8 pr-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                    Current Stock
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                    Low Stock Limit
                  </label>
                  <input
                    type="number"
                    placeholder="5"
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
                <div className="aspect-square w-full rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-3 bg-muted/10 hover:bg-muted/30 hover:border-primary/50 transition-all cursor-pointer group">
                  <div className="p-4 bg-background rounded-2xl shadow-sm border border-border group-hover:scale-110 transition-transform">
                    <Plus className="h-6 w-6 text-text-muted group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-text-primary">
                      Click to upload
                    </p>
                    <p className="text-[10px] text-text-muted mt-1 uppercase tracking-widest font-black">
                      SVG, PNG, JPG (Max 5MB)
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-xl bg-muted border border-border flex items-center justify-center"
                    >
                      <ImageIcon className="h-4 w-4 text-text-muted/30" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border rounded-2xl bg-card shadow-sm ring-1 ring-border border-none">
            <CardHeader className="px-6 border-b border-border/50">
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-text-muted">
                Visibility
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/20 rounded-xl border border-border/50">
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-text-primary">
                    Published
                  </p>
                  <p className="text-[10px] text-text-muted">
                    Visible to all customers
                  </p>
                </div>
                <button className="w-10 h-5 rounded-full bg-primary relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-3 h-3 rounded-full bg-white shadow-sm" />
                </button>
              </div>

              <div className="w-full h-px bg-border/50"></div>

              <button className="w-full py-3 bg-primary text-white text-xs font-black rounded-xl hover:opacity-90 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-primary/20 uppercase tracking-widest">
                <Save className="h-4 w-4" />
                Create Product
              </button>
              <button className="w-full py-2.5 bg-card border border-border text-text-muted text-[10px] font-black rounded-xl hover:bg-muted transition-all cursor-pointer uppercase tracking-widest">
                Save as Draft
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

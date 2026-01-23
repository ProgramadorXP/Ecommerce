"use client";

import {
  ArrowLeft,
  Save,
  Plus,
  Info,
  Trash2,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EditCategoryPage() {
  const params = useParams();
  const catId = params.id;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/categories"
          className="p-2 bg-card border border-border rounded-xl hover:bg-muted transition-all group cursor-pointer"
        >
          <ArrowLeft className="h-5 w-5 text-text-muted group-hover:text-text-primary transition-colors" />
        </Link>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-text-primary">
              Edit Category
            </h1>
            <Badge className="bg-primary/10 text-primary border-none font-bold">
              ID: {catId}
            </Badge>
          </div>
          <p className="text-sm text-text-muted">
            Modify category properties and organization.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border rounded-2xl bg-card shadow-sm ring-1 ring-border border-none">
            <CardHeader className="px-6 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Info className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold">
                  Category Details
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                    Category Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Footwear"
                    className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                    Slug
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-[10px] font-bold">
                      vendix.com/cat/
                    </span>
                    <input
                      type="text"
                      defaultValue="footwear"
                      className="w-full pl-28 pr-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                  Description
                </label>
                <textarea
                  rows={4}
                  defaultValue="Explora nuestra colección premium de calzado, desde sneakers urbanos hasta botas elegantes. Diseñados para el confort y el estilo duradero."
                  className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl bg-error/5 shadow-sm ring-1 ring-error/20 border-none">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-error flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Danger Zone
              </CardTitle>
              <CardDescription className="text-xs text-error/70">
                Proceed with caution. These actions are permanent.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-white dark:bg-card border border-error/10 rounded-2xl">
                <div>
                  <p className="text-sm font-bold text-text-primary">
                    Delete this category
                  </p>
                  <p className="text-[10px] text-text-muted">
                    All products in this category will become uncategorized.
                  </p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-error text-white text-xs font-bold rounded-xl hover:opacity-90 transition-all border-none cursor-pointer">
                  <Trash2 className="h-4 w-4" />
                  Delete Category
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <Card className="border-border rounded-2xl bg-card shadow-sm ring-1 ring-border border-none overflow-hidden">
            <CardHeader className="px-6 border-b border-border/50 bg-muted/30">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Category Image
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="aspect-square w-full rounded-2xl border border-border bg-muted/10 relative overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80"
                  alt="Preview"
                  fill
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button className="p-2 bg-white rounded-lg text-text-primary hover:bg-white/90">
                    <Plus className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-white rounded-lg text-error hover:bg-white/90">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border rounded-2xl bg-card shadow-sm ring-1 ring-border border-none">
            <CardHeader className="px-6 border-b border-border/50">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-text-muted">
                Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-muted/20 rounded-xl border border-border/10">
                  <p className="text-[10px] font-bold text-text-muted uppercase">
                    Products
                  </p>
                  <p className="text-lg font-black text-text-primary">124</p>
                </div>
                <div className="p-3 bg-muted/20 rounded-xl border border-border/10">
                  <p className="text-[10px] font-bold text-text-muted uppercase">
                    Sales
                  </p>
                  <p className="text-lg font-black text-success">$12.4k</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <button className="w-full py-3 bg-primary text-white text-xs font-black rounded-xl hover:opacity-90 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-primary/20 uppercase tracking-widest">
                  <Save className="h-4 w-4" />
                  Update Category
                </button>
                <button className="py-2.5 bg-card border border-border text-text-muted text-[10px] font-black rounded-xl hover:bg-muted transition-all cursor-pointer uppercase tracking-widest">
                  Reset Changes
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

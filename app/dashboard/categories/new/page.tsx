"use client";

import { ArrowLeft, Save, ImageIcon, Plus, Info, Monitor } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function NewCategoryPage() {
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
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">
            Create Category
          </h1>
          <p className="text-sm text-text-muted">
            Set up a new category for your product catalog.
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
                    placeholder="e.g. Winter Essentials"
                    className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-text-muted/50"
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
                      placeholder="winter-essentials"
                      className="w-full pl-28 pr-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-text-muted/50"
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
                  placeholder="Describe what kind of products go into this category..."
                  className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                  Parent Category (Optional)
                </label>
                <select className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                  <option value="">No Parent (Root Category)</option>
                  <option value="footwear">Footwear</option>
                  <option value="apparel">Apparel</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border rounded-2xl bg-card shadow-sm ring-1 ring-border border-none">
            <CardHeader className="px-6 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Monitor className="h-5 w-5 text-secondary" />
                </div>
                <CardTitle className="text-lg font-bold">SEO & Meta</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="p-4 bg-muted/20 border border-border rounded-2xl space-y-2">
                <p className="text-[10px] font-bold text-success uppercase tracking-widest">
                  Search Engine Preview
                </p>
                <h4 className="text-sm font-bold text-blue-600 hover:underline cursor-pointer">
                  Category Name | Vendix Premium
                </h4>
                <p className="text-xs text-text-muted line-clamp-2">
                  This description will appear in search engine results. Make it
                  catchy to improve click-through rates.
                </p>
              </div>
              <div className="space-y-2 pt-2">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                  Meta Title
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <Card className="border-border rounded-2xl bg-card shadow-sm ring-1 ring-border border-none overflow-hidden">
            <CardHeader className="px-6 border-b border-border/50 bg-muted/30">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                <ImageIcon className="h-4 w-4" />
                Category Image
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="aspect-square w-full rounded-2xl border-2 border-dashed border-border bg-muted/10 flex flex-col items-center justify-center gap-2 group hover:bg-muted/20 transition-all cursor-pointer">
                <div className="p-3 bg-card border border-border rounded-xl group-hover:scale-110 transition-transform">
                  <Plus className="h-5 w-5 text-text-muted" />
                </div>
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
                  Upload Image
                </p>
              </div>
              <p className="text-[10px] text-text-muted indent-1 italic leading-relaxed">
                The category image is used in shop navigation and collection
                grids. Recommended size: 800x800px.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border rounded-2xl bg-card shadow-sm ring-1 ring-border border-none">
            <CardHeader className="px-6 border-b border-border/50">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-text-muted">
                Publishing
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/20 rounded-xl border border-border/50">
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-text-primary">Status</p>
                  <p className="text-[10px] text-text-muted">
                    Published to storefront
                  </p>
                </div>
                <Badge className="bg-success text-white font-bold uppercase text-[9px]">
                  Active
                </Badge>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <button className="w-full py-3 bg-primary text-white text-xs font-black rounded-xl hover:opacity-90 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-primary/20 uppercase tracking-widest">
                  <Save className="h-4 w-4" />
                  Save Category
                </button>
                <button className="py-2.5 bg-card border border-border text-text-muted text-[10px] font-black rounded-xl hover:bg-muted transition-all cursor-pointer uppercase tracking-widest">
                  Discard
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

"use client";

import {
  Palette,
  Image as ImageIcon,
  Type,
  Eye,
  Save,
  Plus,
  Trash2,
  Move,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function AppearancePage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-secondary/10 rounded-2xl">
            <Palette className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-text-primary">
              Store Appearance
            </h1>
            <p className="text-sm text-text-muted">
              Customize your store design, banners and typography.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-card border border-border text-text-primary text-sm font-bold rounded-xl hover:bg-muted transition-all cursor-pointer">
            <Eye className="h-4 w-4" />
            Preview Store
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20 border-none cursor-pointer">
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Sections List */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border rounded-2xl bg-card shadow-sm border-none ring-1 ring-border">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Hero Banners</CardTitle>
              <CardDescription className="text-xs">
                Manage the main sliders on your homepage.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border group">
                <Image
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80"
                  alt="Banner 1"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <Badge className="w-fit mb-2 bg-primary text-white font-bold">
                    ACTIVE
                  </Badge>
                  <h3 className="text-xl font-black text-white">
                    Summer Collection 2026
                  </h3>
                  <p className="text-xs text-white/80">
                    Get up to 50% off on all sneakers.
                  </p>
                </div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white/90 rounded-lg text-text-primary hover:bg-white">
                    <Move className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-white/90 rounded-lg text-text-primary hover:bg-white">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button className="w-full py-4 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-muted/10 hover:border-primary/50 transition-all group">
                <div className="p-2 bg-primary/10 rounded-full group-hover:scale-110 transition-transform">
                  <Plus className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-bold text-text-muted">
                  Add New Banner
                </span>
              </button>
            </CardContent>
          </Card>

          <Card className="border-border rounded-2xl bg-card shadow-sm border-none ring-1 ring-border">
            <CardHeader>
              <CardTitle className="text-lg font-bold">
                Featured Categories
              </CardTitle>
              <CardDescription className="text-xs">
                Select which categories appear on the homepage.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Footwear", "Apparel", "Athletic", "Accessories"].map(
                  (cat) => (
                    <div
                      key={cat}
                      className="p-4 bg-muted/20 border border-border rounded-xl flex flex-col items-center gap-2 text-center group hover:border-primary/50 transition-all cursor-pointer"
                    >
                      <div className="h-12 w-12 rounded-full bg-card border border-border flex items-center justify-center font-bold text-[10px] group-hover:shadow-lg group-hover:shadow-primary/10 transition-all">
                        {cat[0]}
                      </div>
                      <span className="text-xs font-black text-text-primary">
                        {cat}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Style Settings */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-border rounded-2xl bg-card shadow-sm border-none ring-1 ring-border">
            <CardHeader>
              <CardTitle className="text-sm font-black uppercase tracking-widest text-text-muted">
                Brand Identity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest">
                  Store Logo
                </label>
                <div className="aspect-square w-32 rounded-2xl border border-border flex items-center justify-center bg-muted/20 relative group overflow-hidden">
                  <ImageIcon className="h-8 w-8 text-text-muted/30" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Plus className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest">
                  Primary Color
                </label>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary shadow-lg shadow-primary/20 cursor-pointer"></div>
                  <span className="text-xs font-mono font-bold text-text-primary uppercase tracking-tighter">
                    #4F46E5
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest">
                  Typography
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button className="p-3 bg-muted border border-border rounded-xl text-xs font-bold text-text-primary flex items-center gap-2">
                    <Type className="h-4 w-4" />
                    Inter
                  </button>
                  <button className="p-3 bg-card border border-border rounded-xl text-xs font-bold text-text-muted flex items-center gap-2">
                    <Type className="h-4 w-4" />
                    Outfit
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border rounded-2xl bg-card shadow-sm border-none ring-1 ring-border bg-linear-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="text-sm font-black uppercase tracking-widest text-text-muted">
                Quick Preview
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="w-full aspect-9/16 bg-background border border-border rounded-3xl overflow-hidden shadow-2xl scale-90 origin-top">
                <div className="h-4 w-full bg-muted/40"></div>
                <div className="p-4 space-y-4">
                  <div className="h-6 w-1/2 bg-muted rounded-lg"></div>
                  <div className="aspect-video w-full bg-primary/20 rounded-xl"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="aspect-square bg-muted rounded-xl"></div>
                    <div className="aspect-square bg-muted rounded-xl"></div>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-text-muted font-medium mt-[-20px] text-center italic">
                Mobile View Mockup
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

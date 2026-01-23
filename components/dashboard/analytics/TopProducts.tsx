"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, TrendingUp, MoreVertical, LayoutGrid } from "lucide-react";
import IconButton from "@/components/common/IconButton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { TOP_PRODUCTS_DATA } from "@/data/dashboard/analytics";

export function TopProducts() {
  return (
    <Card className="bg-card border-border rounded-2xl shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between px-4 sm:px-6">
        <div>
          <CardTitle className="text-lg font-bold text-text-primary">
            Top Performing Products
          </CardTitle>
          <p className="text-xs text-text-muted mt-1">
            Products with highest engagement and sales
          </p>
        </div>
        <div className="flex items-center gap-2">
          <IconButton icon={LayoutGrid} className="h-8 w-8 text-text-muted" />
          <IconButton icon={MoreVertical} className="h-8 w-8 hover:bg-muted" />
        </div>
      </CardHeader>

      <CardContent className="px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOP_PRODUCTS_DATA.map((product, index) => (
            <div
              key={product.id}
              className="flex flex-col p-4 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-all group overflow-hidden relative"
            >
              {/* Rank Badge */}
              <div
                className={cn(
                  "absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center font-black text-[10px] z-10 shadow-lg",
                  index === 0
                    ? "bg-yellow-500 text-white shadow-yellow-500/20"
                    : index === 1
                      ? "bg-slate-400 text-white shadow-slate-400/20"
                      : index === 2
                        ? "bg-orange-500 text-white shadow-orange-500/20"
                        : "bg-muted text-text-muted border border-border",
                )}
              >
                #{index + 1}
              </div>

              {/* Product Image */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 bg-background">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-linear-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                  <button className="w-full py-1.5 bg-white text-black text-[10px] font-black rounded-lg uppercase tracking-wider">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1 space-y-2">
                <div>
                  <h4 className="font-black text-sm text-text-primary group-hover:text-primary transition-colors truncate">
                    {product.name}
                  </h4>
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mt-0.5">
                    {product.category}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-yellow-500/10 rounded-md">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-[10px] font-black text-yellow-600">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-text-muted">
                      {product.sales} sales
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-text-primary text-sm">
                      {product.revenue}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-border/50 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-success">
                    <TrendingUp className="w-3 h-3" />
                    <span className="text-[10px] font-black">
                      {product.trend}
                    </span>
                  </div>
                  <span className="text-[9px] font-bold text-text-muted uppercase tracking-tighter">
                    vs last period
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

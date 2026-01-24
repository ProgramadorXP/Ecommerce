"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/components/dashboard/products/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : null;

  return (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="eager"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.discount > 0 && (
            <span className="bg-primary text-white text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-wider shadow-lg shadow-primary/20">
              -{product.discount}%
            </span>
          )}
          {product.stock === 0 && (
            <span className="bg-destructive text-white text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-wider shadow-lg shadow-destructive/20">
              Out of Stock
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-12 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <button className="p-2.5 bg-white/90 backdrop-blur-md text-text-primary rounded-xl shadow-sm hover:bg-primary hover:text-white transition-colors cursor-pointer border-none">
            <Heart className="h-4 w-4" />
          </button>
          <button className="p-2.5 bg-white/90 backdrop-blur-md text-text-primary rounded-xl shadow-sm hover:bg-primary hover:text-white transition-colors cursor-pointer border-none">
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="flex items-center text-yellow-500">
              <Star className="h-3 w-3 fill-current" />
              <span className="text-[10px] font-bold ml-1 text-text-primary">
                {product.rating || 4.5}
              </span>
            </div>
            <span className="text-[10px] text-text-muted font-medium">
              • {product.reviewsCount || 0} reviews
            </span>
          </div>
          <Link href={`/products/${product.id}`} className="block no-underline">
            <h3 className="text-sm font-bold text-text-primary line-clamp-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-[10px] text-text-muted line-clamp-1">
            {product.categories.join(", ")}
          </p>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-black text-text-primary">
              ${(discountPrice || product.price).toFixed(2)}
            </span>
            {discountPrice && (
              <span className="text-xs text-text-muted line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          <button
            disabled={product.stock === 0}
            className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all disabled:opacity-50 disabled:hover:bg-primary/10 disabled:hover:text-primary cursor-pointer border-none"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

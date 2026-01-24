"use client";

import { Product } from "@/components/dashboard/products/types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
          <span className="text-4xl text-text-muted">Empty</span>
        </div>
        <h3 className="text-xl font-bold text-text-primary">
          No products found
        </h3>
        <p className="text-text-muted max-w-xs text-sm mt-2">
          We couldn&apos;t find any products matching your current filters. Try
          adjusting them.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

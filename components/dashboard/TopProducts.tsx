"use client";

import Image from "next/image";
import { ArrowUpRight, MoreVertical } from "lucide-react";
import IconButton from "@/components/common/IconButton";

const topProducts = [
  {
    id: 1,
    name: "Vendix Pro Sneakers",
    category: "Footwear",
    sales: 124,
    revenue: "$15,240.00",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&q=80",
  },
  {
    id: 2,
    name: "Classic Leather Belt",
    category: "Accessories",
    sales: 89,
    revenue: "$4,120.00",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&q=80",
  },
  {
    id: 3,
    name: "Signature Tee Black",
    category: "Apparel",
    sales: 76,
    revenue: "$2,280.00",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&q=80",
  },
];

export default function TopProducts() {
  return (
    <div className="p-6 bg-card border border-border rounded-2xl flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-text-primary">Top Products</h2>
        <IconButton icon={MoreVertical} className="h-8 w-8" />
      </div>

      <div className="space-y-4">
        {topProducts.map((product) => (
          <div
            key={product.id}
            className="group flex items-center justify-between p-3 rounded-xl hover:bg-background transition-all border border-transparent hover:border-border"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-lg overflow-hidden border border-border bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="48px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-text-primary">
                  {product.name}
                </span>
                <span className="text-[10px] font-medium text-text-muted uppercase tracking-wider">
                  {product.category}
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-text-primary">
                {product.revenue}
              </p>
              <p className="text-[10px] text-success font-bold">
                {product.sales} sales
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 flex items-center justify-center gap-2 w-full py-2 text-xs font-bold text-primary hover:bg-primary/5 rounded-lg transition-all border border-primary/20">
        Inventory Report
        <ArrowUpRight className="h-3 w-3" />
      </button>
    </div>
  );
}

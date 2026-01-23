"use client";

import Image from "next/image";
import { ArrowUpRight, MoreVertical } from "lucide-react";
import IconButton from "@/components/common/IconButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <Card className="bg-card border-border rounded-2xl shadow-sm flex flex-col h-fit">
      <CardHeader className="flex flex-row items-center justify-between px-4 sm:px-6">
        <CardTitle className="text-base sm:text-lg font-bold text-text-primary">
          Top Products
        </CardTitle>
        <IconButton icon={MoreVertical} className="h-8 w-8" />
      </CardHeader>

      <CardContent className="px-4 sm:px-6 space-y-4">
        {topProducts.map((product) => (
          <div
            key={product.id}
            className="group flex items-center justify-between p-2 rounded-xl hover:bg-background transition-all border border-transparent hover:border-border cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-lg overflow-hidden border border-border bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 40px, 48px"
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

        <button className="mt-2 flex items-center justify-center gap-2 w-full py-2 text-xs font-bold text-primary hover:bg-primary/5 rounded-lg transition-all border border-primary/20 cursor-pointer">
          Inventory Report
          <ArrowUpRight className="h-3 w-3" />
        </button>
      </CardContent>
    </Card>
  );
}

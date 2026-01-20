"use client";

import {
  MoreVertical,
  Edit2,
  Trash2,
  ArrowUpDown,
  ChevronRight,
  ChevronLeft,
  Star,
  Heart,
  ShoppingCart as CartIcon,
} from "lucide-react";
import Image from "next/image";
import IconButton from "@/components/common/IconButton";
import { Product } from "@/components/dashboard/products/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductTableProps {
  products: Product[];
}

export default function ProductTable({ products }: ProductTableProps) {
  const isNew = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  };

  const getStockStyles = (stock: number) => {
    if (stock > 10) return "bg-success/10 text-success border-success/20";
    if (stock > 0) return "bg-warning/10 text-warning border-warning/20";
    return "bg-error/10 text-error border-error/20";
  };

  const getStockLabel = (stock: number) => {
    if (stock > 10) return "In Stock";
    if (stock > 0) return "Low Stock";
    return "Out of Stock";
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border bg-muted/30 hover:bg-muted/30">
              <TableHead className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                  Product
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Price
              </TableHead>
              <TableHead className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Popularity
              </TableHead>
              <TableHead className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Stock
              </TableHead>
              <TableHead className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Status
              </TableHead>
              <TableHead className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider text-left">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                className="group hover:bg-background/50 transition-colors border-border"
              >
                <TableCell className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 rounded-xl overflow-hidden border border-border bg-muted shrink-0 shadow-sm">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="56px"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {isNew(product.createdAt) && (
                        <div className="absolute top-1 left-1 px-1.5 py-0.5 bg-vendix-accent text-[8px] font-black text-white rounded shadow-lg uppercase tracking-tighter z-10">
                          New
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-bold text-text-primary truncate">
                        {product.name}
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-0.5">
                          <Star className="h-3 w-3 fill-warning text-warning" />
                          <span className="text-[10px] font-bold text-text-primary">
                            {product.rating}
                          </span>
                          <span className="text-[10px] text-text-muted font-medium">
                            ({product.reviewsCount})
                          </span>
                        </div>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <span className="text-[10px] text-primary font-bold uppercase tracking-widest">
                          {product.categories[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.discount > 0 && (
                      <span className="text-[10px] text-success font-bold mt-0.5">
                        -{product.discount}% OFF
                      </span>
                    )}
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex items-center gap-1 group/fav cursor-help"
                      title={`${product.favoritesCount} Favorites`}
                    >
                      <div className="p-1.5 rounded-lg bg-error/5 group-hover/fav:bg-error/10 transition-colors">
                        <Heart
                          className={cn(
                            "h-3.5 w-3.5 transition-colors",
                            product.favoritesCount > 200
                              ? "fill-error text-error"
                              : "text-text-muted",
                          )}
                        />
                      </div>
                      <span className="text-[11px] font-bold text-text-secondary">
                        {product.favoritesCount}
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-1 group/cart cursor-help"
                      title={`${product.cartCount} in carts`}
                    >
                      <div className="p-1.5 rounded-lg bg-primary/5 group-hover/cart:bg-primary/10 transition-colors">
                        <CartIcon className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className="text-[11px] font-bold text-text-secondary">
                        {product.cartCount}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <div className="flex flex-col gap-1.5 w-24">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-text-primary">
                        {product.stock}
                      </span>
                      <span className="text-[10px] text-text-muted uppercase font-medium">
                        Units
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden border border-border/50">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-1000",
                          product.stock > 10
                            ? "bg-success shadow-[0_0_8px_rgba(34,197,94,0.3)]"
                            : product.stock > 0
                              ? "bg-warning shadow-[0_0_8px_rgba(250,204,21,0.3)]"
                              : "bg-error",
                        )}
                        style={{
                          width: `${Math.min((product.stock / product.maxStock) * 100, 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <Badge
                    variant="outline"
                    className={cn(
                      "font-black uppercase tracking-wider border",
                      getStockStyles(product.stock),
                    )}
                  >
                    {getStockLabel(product.stock)}
                  </Badge>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <IconButton
                      icon={Edit2}
                      className="h-8 w-8 hover:text-primary hover:bg-primary/5"
                      title="Edit"
                    />
                    <IconButton
                      icon={Trash2}
                      className="h-8 w-8 hover:text-error hover:bg-error/5"
                      title="Delete"
                    />
                    <IconButton
                      icon={MoreVertical}
                      className="h-8 w-8"
                      title="More"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Section */}
      <div className="px-6 py-4 bg-muted/20 border-t border-border flex items-center justify-between">
        <p className="text-xs text-text-muted">
          Showing <span className="font-bold text-text-primary">1</span> to{" "}
          <span className="font-bold text-text-primary">{products.length}</span>{" "}
          of{" "}
          <span className="font-bold text-text-primary">{products.length}</span>{" "}
          products
        </p>
        <div className="flex items-center gap-2">
          <button className="p-2 border border-border rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer bg-card/50">
            <ChevronLeft className="h-4 w-4" />
          </button>
          {[1].map((page) => (
            <button
              key={page}
              className={cn(
                "h-8 w-8 flex items-center justify-center text-xs font-bold rounded-lg transition-all cursor-pointer",
                page === 1
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "hover:bg-white bg-card/50",
              )}
            >
              {page}
            </button>
          ))}
          <button className="p-2 border border-border rounded-lg hover:bg-white transition-colors cursor-pointer bg-card/50">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

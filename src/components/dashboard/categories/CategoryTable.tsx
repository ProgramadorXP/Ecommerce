"use client";

import {
  MoreVertical,
  Edit2,
  Trash2,
  ExternalLink,
  Circle,
} from "lucide-react";
import IconButton from "@/components/common/IconButton";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  description: string;
  productCount: number;
  sales: string;
  status: string;
}

interface CategoryTableProps {
  categories: Category[];
}

export default function CategoryTable({ categories }: CategoryTableProps) {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-muted/30 border-b border-border">
              <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                Category Name
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">
                Products
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-right">
                Total Sales
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">
                Status
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {categories.map((category) => (
              <tr
                key={category.id}
                className="group hover:bg-background/50 transition-colors"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/5 rounded-lg border border-primary/10">
                      <Circle className="h-3 w-3 fill-primary text-primary" />
                    </div>
                    <span className="text-sm font-bold text-text-primary">
                      {category.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <p className="text-xs text-text-muted line-clamp-1 max-w-[250px]">
                    {category.description}
                  </p>
                </td>
                <td className="px-6 py-5 text-center">
                  <Badge
                    variant="outline"
                    className="bg-muted text-text-primary border-border font-bold"
                  >
                    {category.productCount}
                  </Badge>
                </td>
                <td className="px-6 py-5 text-right font-black text-text-primary">
                  {category.sales}
                </td>
                <td className="px-6 py-5">
                  <div className="flex justify-center">
                    <Badge
                      variant="outline"
                      className={cn(
                        "font-bold uppercase text-[9px] px-2",
                        category.status === "active"
                          ? "bg-success/10 text-success border-success/20"
                          : "bg-error/10 text-error border-error/20",
                      )}
                    >
                      {category.status}
                    </Badge>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href={`/dashboard/categories/${category.id}`}>
                      <IconButton
                        icon={Edit2}
                        className="h-8 w-8 hover:text-primary hover:bg-primary/5"
                        title="Edit"
                      />
                    </Link>
                    <IconButton
                      icon={ExternalLink}
                      className="h-8 w-8 hover:text-secondary hover:bg-secondary/5"
                      title="View Products"
                    />
                    <IconButton
                      icon={Trash2}
                      className="h-8 w-8 hover:text-error hover:bg-error/5"
                      title="Delete"
                    />
                    <IconButton icon={MoreVertical} className="h-8 w-8" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

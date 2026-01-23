"use client";

import { Filter, LayoutGrid, AlertTriangle, XCircle } from "lucide-react";
import SearchInput from "@/components/common/SearchInput";
import IconButton from "@/components/common/IconButton";
import { StockStatus } from "@/components/dashboard/products/types";
import { CATEGORIES } from "@/data/dashboard/products";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface InventoryFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedStatus: StockStatus;
  onStatusChange: (status: StockStatus) => void;
}

export default function InventoryFilters({
  selectedCategory,
  onCategoryChange,
  selectedStatus,
  onStatusChange,
}: InventoryFiltersProps) {
  const statusOptions = [
    {
      id: "all",
      label: "All Products",
      icon: LayoutGrid,
      activeClass: "bg-card text-text-primary shadow-sm border border-border",
    },
    {
      id: "low",
      label: "Low Stock",
      icon: AlertTriangle,
      activeClass: "bg-warning/20 text-warning border-warning/30 shadow-sm",
    },
    {
      id: "out",
      label: "Out of Stock",
      icon: XCircle,
      activeClass: "bg-error/20 text-error border-error/30 shadow-sm",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <Badge
              key={cat}
              variant="outline"
              onClick={() => onCategoryChange(cat)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all border-border",
                selectedCategory === cat
                  ? "bg-primary border-primary text-white shadow-md shadow-primary/20 hover:bg-primary/90"
                  : "bg-card text-text-secondary hover:border-primary/50 hover:text-primary",
              )}
            >
              {cat}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-2 w-full lg:w-auto">
          <SearchInput
            className="flex-1 lg:w-64"
            placeholder="Search products..."
          />
          <IconButton
            icon={Filter}
            className="bg-card border border-border"
            title="Filter"
          />
        </div>
      </div>

      {/* Quick Status Filters */}
      <div className="flex items-center gap-2 p-1 bg-muted/30 w-fit rounded-xl border border-border/50 flex-wrap">
        {statusOptions.map((option) => (
          <Badge
            key={option.id}
            variant="outline"
            onClick={() => onStatusChange(option.id as StockStatus)}
            className={cn(
              "px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border-transparent",
              selectedStatus === option.id
                ? option.activeClass
                : "text-text-muted hover:text-text-secondary border-none",
            )}
          >
            <option.icon className="h-3.5 w-3.5 mr-2" />
            {option.label}
          </Badge>
        ))}
      </div>
    </div>
  );
}

"use client";

import { Filter, LayoutGrid, AlertTriangle, XCircle } from "lucide-react";
import SearchInput from "@/components/common/SearchInput";
import IconButton from "@/components/common/IconButton";
import { StockStatus } from "./types";

const CATEGORIES = [
  "All",
  "Apparel",
  "Footwear",
  "Accessories",
  "Athletic",
  "Travel",
  "Luxury",
  "Essentials",
];

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
  return (
    <div className="space-y-4">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary border-primary text-white shadow-md shadow-primary/20"
                  : "bg-card border-border text-text-secondary hover:border-primary/50"
              }`}
            >
              {cat}
            </button>
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
      <div className="flex items-center gap-3 p-1 bg-muted/30 w-fit rounded-xl border border-border/50">
        <button
          onClick={() => onStatusChange("all")}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            selectedStatus === "all"
              ? "bg-card text-text-primary shadow-sm border border-border"
              : "text-text-muted hover:text-text-secondary"
          }`}
        >
          <LayoutGrid className="h-3.5 w-3.5" />
          All Products
        </button>
        <button
          onClick={() => onStatusChange("low")}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            selectedStatus === "low"
              ? "bg-warning/10 text-warning border border-warning/20 shadow-sm"
              : "text-text-muted hover:text-warning"
          }`}
        >
          <AlertTriangle className="h-3.5 w-3.5" />
          Low Stock
        </button>
        <button
          onClick={() => onStatusChange("out")}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            selectedStatus === "out"
              ? "bg-error/10 text-error border border-error/20 shadow-sm"
              : "text-text-muted hover:text-error"
          }`}
        >
          <XCircle className="h-3.5 w-3.5" />
          Out of Stock
        </button>
      </div>
    </div>
  );
}

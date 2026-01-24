"use client";

import { CATEGORIES } from "@/data/dashboard/products";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export default function ProductFilters({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: ProductFiltersProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-11 pr-4 py-3 bg-card border border-border rounded-2xl text-sm font-medium focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
          />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full md:w-48 appearance-none pl-4 pr-10 py-3 bg-card border border-border rounded-2xl text-sm font-bold text-text-primary focus:ring-4 focus:ring-primary/10 outline-none cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" />
          </div>
          <button className="p-3 bg-card border border-border rounded-2xl hover:bg-muted transition-colors md:hidden">
            <SlidersHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none custom-scrollbar">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-2.5 rounded-xl text-xs font-black whitespace-nowrap transition-all border-none cursor-pointer ${
              selectedCategory === category
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "bg-card text-text-muted border border-border hover:border-primary/50 hover:text-text-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

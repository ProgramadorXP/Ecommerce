"use client";

import { useState, useMemo } from "react";
import ProductGrid from "@/components/shop/ProductGrid";
import ProductFilters from "@/components/shop/ProductFilters";
import { MOCK_PRODUCTS } from "@/data/dashboard/products";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const filteredProducts = useMemo(() => {
    const results = MOCK_PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.categories.includes(selectedCategory);
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Sort results
    switch (sortBy) {
      case "price-low":
        results.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        results.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        results.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "newest":
      default:
        results.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        break;
    }

    return results;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="container mx-auto px-4 py-20 lg:py-32 animate-in fade-in duration-700">
      <div className="space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-text-primary">
            Our <span className="text-primary italic">Collections</span>
          </h1>
          <p className="text-text-muted text-lg font-medium leading-relaxed">
            Discover a curated selection of premium products designed to elevate
            your lifestyle and satisfy your highest expectations.
          </p>
        </div>

        {/* Filters and Grid */}
        <div className="space-y-10">
          <ProductFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          <div className="flex items-center justify-between">
            <p className="text-xs font-bold text-text-muted uppercase tracking-widest px-1">
              Showing{" "}
              <span className="text-text-primary">
                {filteredProducts.length}
              </span>{" "}
              Products
            </p>
          </div>

          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

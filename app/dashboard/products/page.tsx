"use client";

import { useState, useMemo } from "react";
import ProductHeader from "@/components/dashboard/products/ProductHeader";
import InventoryFilters from "@/components/dashboard/products/InventoryFilters";
import ProductTable from "@/components/dashboard/products/ProductTable";
import InventorySummary from "@/components/dashboard/products/InventorySummary";
import { StockStatus } from "@/components/dashboard/products/types";

import { MOCK_PRODUCTS } from "@/data/dashboard/products";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState<StockStatus>("all");

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter((product) => {
      const categoryMatch =
        selectedCategory === "All" ||
        product.categories.includes(selectedCategory);
      const statusMatch =
        selectedStatus === "all" ||
        (selectedStatus === "low" &&
          product.stock > 0 &&
          product.stock <= 10) ||
        (selectedStatus === "out" && product.stock === 0);
      return categoryMatch && statusMatch;
    });
  }, [selectedCategory, selectedStatus]);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <ProductHeader />

      <InventoryFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
      />

      <ProductTable products={filteredProducts} />

      <InventorySummary />
    </div>
  );
}

"use client";

import CategoryHeader from "@/components/dashboard/categories/CategoryHeader";
import CategoryTable from "@/components/dashboard/categories/CategoryTable";
import CategorySummary from "@/components/dashboard/categories/CategorySummary";

// Mock data for categories
const MOCK_CATEGORIES = [
  {
    id: 1,
    name: "Footwear",
    description: "All kinds of shoes and sneakers",
    productCount: 42,
    sales: "$15,200",
    status: "active",
  },
  {
    id: 2,
    name: "Apparel",
    description: "Clothing, shirts, pants, and more",
    productCount: 89,
    sales: "$24,500",
    status: "active",
  },
  {
    id: 3,
    name: "Athletic",
    description: "Sportswear and performance gear",
    productCount: 34,
    sales: "$8,900",
    status: "active",
  },
  {
    id: 4,
    name: "Accessories",
    description: "Belts, watches, backpacks",
    productCount: 56,
    sales: "$12,300",
    status: "active",
  },
  {
    id: 5,
    name: "Luxury",
    description: "High-end exclusive items",
    productCount: 12,
    sales: "$45,200",
    status: "inactive",
  },
];

export default function CategoriesPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <CategoryHeader />

      <CategorySummary />

      <CategoryTable categories={MOCK_CATEGORIES} />
    </div>
  );
}

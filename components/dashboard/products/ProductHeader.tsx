"use client";

import { Plus } from "lucide-react";

export default function ProductHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">
          Products Inventory
        </h1>
        <p className="text-sm text-text-muted">
          Manage your store&apos;s products, stock levels, and pricing.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20 border-none cursor-pointer group">
          <Plus className="h-4 w-4 group-hover:rotate-90 transition-transform" />
          Add New Product
        </button>
      </div>
    </div>
  );
}

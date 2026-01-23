"use client";

import { Layers, Plus } from "lucide-react";
import Link from "next/link";

export default function CategoryHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-primary/10 rounded-2xl">
          <Layers className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">
            Categories
          </h1>
          <p className="text-sm text-text-muted">
            Organize products into logical groups for better catalog management.
          </p>
        </div>
      </div>
      <Link href="/dashboard/categories/new">
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20 border-none cursor-pointer group">
          <Plus className="h-4 w-4 group-hover:rotate-90 transition-transform" />
          New Category
        </button>
      </Link>
    </div>
  );
}

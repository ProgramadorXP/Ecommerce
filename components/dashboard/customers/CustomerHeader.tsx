"use client";

import { UserPlus, ArrowUpRight } from "lucide-react";

export default function CustomerHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">
          Customers Management
        </h1>
        <p className="text-sm text-text-muted">
          View and manage your customer database and their activity.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-card border border-border text-text-secondary text-sm font-bold rounded-xl hover:bg-muted transition-all cursor-pointer">
          Export List
          <ArrowUpRight className="h-4 w-4" />
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20 border-none cursor-pointer group">
          <UserPlus className="h-4 w-4" />
          Add Customer
        </button>
      </div>
    </div>
  );
}

"use client";

import { Package, Trash2, AlertTriangle } from "lucide-react";

export default function InventorySummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-5 bg-card border border-border rounded-2xl flex items-center gap-4 shadow-sm group hover:border-primary/50 transition-all cursor-pointer">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Package className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
            Total Inventory Value
          </p>
          <h4 className="text-xl font-black text-text-primary">$42,500.00</h4>
        </div>
      </div>
      <div className="p-5 bg-card border border-border rounded-2xl flex items-center gap-4 shadow-sm group hover:border-warning/50 transition-all cursor-pointer">
        <div className="h-12 w-12 rounded-xl bg-warning/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <AlertTriangle className="h-6 w-6 text-warning" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
            Low Stock Warnings
          </p>
          <h4 className="text-xl font-black text-text-primary">8 Items</h4>
        </div>
      </div>
      <div className="p-5 bg-card border border-border rounded-2xl flex items-center gap-4 shadow-sm group hover:border-error/50 transition-all cursor-pointer">
        <div className="h-12 w-12 rounded-xl bg-error/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Trash2 className="h-6 w-6 text-error" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
            Out of Stock
          </p>
          <h4 className="text-xl font-black text-text-primary">3 Items</h4>
        </div>
      </div>
    </div>
  );
}

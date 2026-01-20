"use client";

import { ShoppingBag, TrendingUp, Clock, AlertCircle } from "lucide-react";

export default function OrderSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="p-5 bg-card border border-border rounded-2xl flex items-center gap-4 shadow-sm group hover:border-primary/50 transition-all cursor-pointer">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <ShoppingBag className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
            Total Orders
          </p>
          <h4 className="text-xl font-black text-text-primary">1,256</h4>
        </div>
      </div>
      <div className="p-5 bg-card border border-border rounded-2xl flex items-center gap-4 shadow-sm group hover:border-success/50 transition-all cursor-pointer">
        <div className="h-12 w-12 rounded-xl bg-success/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <TrendingUp className="h-6 w-6 text-success" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
            Average Value
          </p>
          <h4 className="text-xl font-black text-text-primary">$210.50</h4>
        </div>
      </div>
      <div className="p-5 bg-card border border-border rounded-2xl flex items-center gap-4 shadow-sm group hover:border-warning/50 transition-all cursor-pointer">
        <div className="h-12 w-12 rounded-xl bg-warning/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Clock className="h-6 w-6 text-warning" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
            Pending Approval
          </p>
          <h4 className="text-xl font-black text-text-primary">24 Orders</h4>
        </div>
      </div>
      <div className="p-5 bg-card border border-border rounded-2xl flex items-center gap-4 shadow-sm group hover:border-error/50 transition-all cursor-pointer">
        <div className="h-12 w-12 rounded-xl bg-error/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <AlertCircle className="h-6 w-6 text-error" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
            Cancelled Recent
          </p>
          <h4 className="text-xl font-black text-text-primary">5 Orders</h4>
        </div>
      </div>
    </div>
  );
}

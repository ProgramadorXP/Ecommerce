"use client";

import { Grid, Package, TrendingUp, Power } from "lucide-react";

export default function CategorySummary() {
  const stats = [
    {
      label: "Total Categories",
      value: "12",
      sub: "Active groups",
      icon: Grid,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      label: "Categorized Items",
      value: "856",
      sub: "94% of inventory",
      icon: Package,
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      label: "Top Selling",
      value: "Footwear",
      sub: "34% of sales",
      icon: TrendingUp,
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
    {
      label: "Inactive",
      value: "2",
      sub: "Requires review",
      icon: Power,
      color: "text-error",
      bgColor: "bg-error/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="p-5 bg-card border border-border rounded-2xl flex items-center gap-4 transition-all hover:shadow-lg hover:shadow-primary/5 group"
        >
          <div
            className={`p-3 rounded-xl ${stat.bgColor} ${stat.color} transition-transform group-hover:scale-110`}
          >
            <stat.icon className="h-5 w-5" />
          </div>
          <div className="space-y-0.5">
            <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
              {stat.label}
            </p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-lg font-bold text-text-primary tracking-tight">
                {stat.value}
              </h3>
            </div>
            <p className="text-[10px] font-medium text-text-muted">
              {stat.sub}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

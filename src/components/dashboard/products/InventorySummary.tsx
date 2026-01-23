"use client";

import { Package, Trash2, AlertTriangle } from "lucide-react";

export default function InventorySummary() {
  const stats = [
    {
      label: "Total Inventory Value",
      value: "$42,500.00",
      change: "+5.4%",
      trend: "up" as const,
      icon: Package,
      color: "text-primary",
      bgColor: "to-primary/50",
      hoverBorder: "hover:border-primary/50",
      shadow: "hover:shadow-primary/5",
    },
    {
      label: "Low Stock Warnings",
      value: "8 Items",
      change: "-2",
      trend: "down" as const,
      icon: AlertTriangle,
      color: "text-warning",
      bgColor: "to-primary/50",
      hoverBorder: "hover:border-primary/50",
      shadow: "hover:shadow-primary/5",
    },
    {
      label: "Out of Stock",
      value: "3 Items",
      change: "+1",
      trend: "up" as const,
      icon: Trash2,
      color: "text-error",
      bgColor: "to-primary/50",
      hoverBorder: "hover:border-primary/50",
      shadow: "hover:shadow-primary/5",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`group p-5 bg-card border border-border rounded-2xl transition-all cursor-pointer relative overflow-hidden bg-linear-to-br from-card via-card ${stat.bgColor} ${stat.hoverBorder} hover:shadow-xl ${stat.shadow}`}
        >
          {/* Background decorative icon */}
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <stat.icon className="h-24 w-24" />
          </div>

          <div className="flex items-center justify-between mb-3">
            <div
              className={`p-2 rounded-xl bg-background border border-border ${stat.color}`}
            >
              <stat.icon className="h-5 w-5" />
            </div>
            <span
              className={`text-xs font-bold px-2 py-1 rounded-full ${
                stat.trend === "up"
                  ? "bg-success/10 text-success"
                  : "bg-error/10 text-error"
              }`}
            >
              {stat.change}
            </span>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-medium text-text-muted uppercase tracking-wider">
              {stat.label}
            </p>
            <h3 className="text-2xl font-bold text-text-primary tracking-tight">
              {stat.value}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

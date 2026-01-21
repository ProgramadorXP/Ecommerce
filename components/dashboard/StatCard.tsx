"use client";

import {
  TrendingUp,
  Package,
  ShoppingCart,
  Users as UsersIcon,
  LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type IconType = "revenue" | "orders" | "products" | "customers";

const ICON_MAP: Record<IconType, LucideIcon> = {
  revenue: TrendingUp,
  orders: ShoppingCart,
  products: Package,
  customers: UsersIcon,
};

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  iconName: IconType;
  color: string;
}

export default function StatCard({
  label,
  value,
  change,
  trend,
  iconName,
  color,
}: StatCardProps) {
  const Icon = ICON_MAP[iconName];

  return (
    <Card className="group border-border rounded-2xl hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden bg-linear-to-br from-card via-card to-primary/50 cursor-pointer py-0">
      <CardContent className="p-4 sm:p-6">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <Icon className="h-24 w-24" />
        </div>
        <div className="flex items-center justify-between mb-3">
          <div
            className={cn(
              "p-2 rounded-xl bg-background border border-border transition-colors",
              color,
            )}
          >
            <Icon className="h-5 w-5" />
          </div>
          <span
            className={cn(
              "text-xs font-bold px-2 py-1 rounded-full",
              trend === "up"
                ? "bg-success/10 text-success"
                : "bg-error/10 text-error",
            )}
          >
            {change}
          </span>
        </div>
        <div className="space-y-1">
          <p className="text-xs font-medium text-text-muted uppercase tracking-wider">
            {label}
          </p>
          <h3 className="text-2xl font-bold text-text-primary tracking-tight">
            {value}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
}

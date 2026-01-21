"use client";

import { Users, UserPlus, UserCheck, UserMinus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function CustomerSummary() {
  const stats = [
    {
      label: "Total Customers",
      value: "2,543",
      change: "+12.5%",
      trend: "up" as const,
      icon: Users,
      color: "text-primary",
      bgColor: "to-primary/50",
    },
    {
      label: "New This Month",
      value: "156",
      change: "+3.2%",
      trend: "up" as const,
      icon: UserPlus,
      color: "text-success",
      bgColor: "to-primary/50",
    },
    {
      label: "Active Now",
      value: "842",
      change: "+18%",
      trend: "up" as const,
      icon: UserCheck,
      color: "text-warning",
      bgColor: "to-primary/50",
    },
    {
      label: "Churn Rate",
      value: "2.4%",
      change: "-0.5%",
      trend: "down" as const,
      icon: UserMinus,
      color: "text-error",
      bgColor: "to-primary/50",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="group border-border rounded-2xl hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden bg-linear-to-br from-card via-card to-primary/50 cursor-pointer py-0"
        >
          <CardContent className="p-5" aria-describedby="customer-summary">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <stat.icon className="h-24 w-24" />
            </div>

            <div className="flex items-center justify-between mb-3">
              <div
                className={cn(
                  "p-2 rounded-xl bg-background border border-border transition-colors",
                  stat.color,
                )}
              >
                <stat.icon className="h-5 w-5" />
              </div>
              <span
                className={cn(
                  "text-xs font-bold px-2 py-1 rounded-full",
                  stat.trend === "up"
                    ? "bg-success/10 text-success"
                    : "bg-error/10 text-error",
                )}
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
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

"use client";

import { Star, MessageCircle, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function ReviewSummary() {
  const stats = [
    {
      label: "Average Rating",
      value: "4.8",
      sub: "Out of 5.0",
      icon: Star,
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
    {
      label: "Total Reviews",
      value: "1,429",
      sub: "+12 this week",
      icon: MessageCircle,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      label: "Pending Approval",
      value: "12",
      sub: "Needs attention",
      icon: AlertTriangle,
      color: "text-error",
      bgColor: "bg-error/10",
    },
    {
      label: "Approved Today",
      value: "45",
      sub: "Completed",
      icon: CheckCircle2,
      color: "text-success",
      bgColor: "bg-success/10",
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
              <h3 className="text-xl font-bold text-text-primary tracking-tight">
                {stat.value}
              </h3>
              <span className="text-[10px] font-medium text-text-muted whitespace-nowrap">
                {stat.sub}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

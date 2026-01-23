"use client";

import { Calendar, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import IconButton from "@/components/common/IconButton";
import { AnalyticsPeriod } from "@/components/dashboard/analytics/types";

interface AnalyticsFiltersProps {
  selectedPeriod: AnalyticsPeriod;
  onPeriodChange: (period: AnalyticsPeriod) => void;
}

export default function AnalyticsFilters({
  selectedPeriod,
  onPeriodChange,
}: AnalyticsFiltersProps) {
  const periodOptions = [
    { id: "7d", label: "Last 7 Days" },
    { id: "30d", label: "Last 30 Days" },
    { id: "90d", label: "Last 90 Days" },
    { id: "1y", label: "Last Year" },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-card p-4 rounded-2xl border border-border">
      {/* Period Badges */}
      <div className="flex items-center flex-wrap gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
        <Calendar className="h-4 w-4 text-text-muted shrink-0" />
        {periodOptions.map((option) => (
          <Badge
            key={option.id}
            variant="outline"
            onClick={() => onPeriodChange(option.id as AnalyticsPeriod)}
            className={cn(
              "px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border-transparent whitespace-nowrap",
              selectedPeriod === option.id
                ? "bg-primary text-white shadow-sm"
                : "text-text-muted hover:text-text-secondary border-none",
            )}
          >
            {option.label}
          </Badge>
        ))}
      </div>

      {/* Advanced Filters */}
      <div className="flex items-center gap-2">
        <button className="px-4 py-2 text-xs font-bold text-text-secondary border border-border rounded-xl hover:bg-muted transition-all cursor-pointer">
          Compare Period
        </button>
        <IconButton
          icon={Filter}
          className="bg-card border border-border"
          title="Advanced Filters"
        />
      </div>
    </div>
  );
}

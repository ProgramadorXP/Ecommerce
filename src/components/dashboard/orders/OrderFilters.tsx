"use client";

import {
  Filter,
  LayoutGrid,
  Clock,
  Package,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import SearchInput from "@/components/common/SearchInput";
import IconButton from "@/components/common/IconButton";
import { OrderStatus } from "@/components/dashboard/orders/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface OrderFiltersProps {
  selectedStatus: OrderStatus | "all";
  onStatusChange: (status: OrderStatus | "all") => void;
}

export default function OrderFilters({
  selectedStatus,
  onStatusChange,
}: OrderFiltersProps) {
  const filterOptions = [
    {
      id: "all",
      label: "All Orders",
      icon: LayoutGrid,
      activeClass: "bg-card text-text-primary shadow-sm border border-border",
    },
    {
      id: "pending",
      label: "Pending",
      icon: Clock,
      activeClass: "bg-warning/20 text-warning border-warning/30 shadow-sm",
    },
    {
      id: "paid",
      label: "Paid",
      icon: CheckCircle2,
      activeClass: "bg-success/20 text-success border-success/30 shadow-sm",
    },
    {
      id: "shipped",
      label: "Shipped",
      icon: Package,
      activeClass: "bg-primary/20 text-primary border-primary/30 shadow-sm",
    },
    {
      id: "delivered",
      label: "Delivered",
      icon: CheckCircle2,
      activeClass:
        "bg-vendix-accent/20 text-vendix-accent border-vendix-accent/30 shadow-sm",
    },
    {
      id: "cancelled",
      label: "Cancelled",
      icon: XCircle,
      activeClass: "bg-error/20 text-error border-error/30 shadow-sm",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-start lg:items-center justify-between">
        <div className="flex items-center gap-2 w-full lg:w-96">
          <SearchInput
            className="flex-1"
            placeholder="Search by order ID, customer name..."
          />
        </div>
        <div className="flex items-center gap-2">
          <IconButton
            icon={Filter}
            className="bg-card border border-border"
            title="Advanced Filters"
          />
        </div>
      </div>

      {/* Quick Status Filters */}
      <div className="flex items-center gap-2 p-1 bg-muted/30 w-fit rounded-xl border border-border/50 flex-wrap">
        {filterOptions.map((option) => (
          <Badge
            key={option.id}
            variant="outline"
            onClick={() => onStatusChange(option.id as OrderStatus | "all")}
            className={cn(
              "px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border-transparent",
              selectedStatus === option.id
                ? option.activeClass
                : "text-text-muted hover:text-text-secondary border-none",
            )}
          >
            <option.icon className="h-3.5 w-3.5 mr-2" />
            {option.label}
          </Badge>
        ))}
      </div>
    </div>
  );
}

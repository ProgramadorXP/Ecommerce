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
import { OrderStatus } from "./types";

interface OrderFiltersProps {
  selectedStatus: OrderStatus | "all";
  onStatusChange: (status: OrderStatus | "all") => void;
}

export default function OrderFilters({
  selectedStatus,
  onStatusChange,
}: OrderFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
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
        <button
          onClick={() => onStatusChange("all")}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            selectedStatus === "all"
              ? "bg-card text-text-primary shadow-sm border border-border"
              : "text-text-muted hover:text-text-secondary"
          }`}
        >
          <LayoutGrid className="h-3.5 w-3.5" />
          All Orders
        </button>
        <button
          onClick={() => onStatusChange("pending")}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            selectedStatus === "pending"
              ? "bg-warning/10 text-warning border border-warning/20 shadow-sm"
              : "text-text-muted hover:text-warning"
          }`}
        >
          <Clock className="h-3.5 w-3.5" />
          Pending
        </button>
        <button
          onClick={() => onStatusChange("paid")}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            selectedStatus === "paid"
              ? "bg-success/10 text-success border border-success/20 shadow-sm"
              : "text-text-muted hover:text-success"
          }`}
        >
          <CheckCircle2 className="h-3.5 w-3.5" />
          Paid
        </button>
        <button
          onClick={() => onStatusChange("shipped")}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            selectedStatus === "shipped"
              ? "bg-primary/20 text-primary border border-primary/20 shadow-sm"
              : "text-text-muted hover:text-primary"
          }`}
        >
          <Package className="h-3.5 w-3.5" />
          Shipped
        </button>
        <button
          onClick={() => onStatusChange("delivered")}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            selectedStatus === "delivered"
              ? "bg-vendix-accent/10 text-vendix-accent border border-vendix-accent/20 shadow-sm"
              : "text-text-muted hover:text-vendix-accent"
          }`}
        >
          <CheckCircle2 className="h-3.5 w-3.5" />
          Delivered
        </button>
        <button
          onClick={() => onStatusChange("cancelled")}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            selectedStatus === "cancelled"
              ? "bg-error/10 text-error border border-error/20 shadow-sm"
              : "text-text-muted hover:text-error"
          }`}
        >
          <XCircle className="h-3.5 w-3.5" />
          Cancelled
        </button>
      </div>
    </div>
  );
}

"use client";

import { UserPlus, UserCheck, UserX, Filter, LayoutGrid } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CustomerFilterStatus } from "@/components/dashboard/customers/types";
import SearchInput from "@/components/common/SearchInput";
import IconButton from "@/components/common/IconButton";

interface CustomerFiltersProps {
  selectedStatus: CustomerFilterStatus;
  onStatusChange: (status: CustomerFilterStatus) => void;
}

export default function CustomerFilters({
  selectedStatus,
  onStatusChange,
}: CustomerFiltersProps) {
  const filterOptions = [
    {
      id: "all",
      label: "All Customers",
      icon: LayoutGrid,
      activeClass: "bg-card text-text-primary shadow-sm border border-border",
    },
    {
      id: "new",
      label: "New Members",
      icon: UserPlus,
      activeClass: "bg-success/20 text-success border-success/30 shadow-sm",
    },
    {
      id: "active",
      label: "Active",
      icon: UserCheck,
      activeClass: "bg-warning/20 text-warning border-warning/30 shadow-sm",
    },
    {
      id: "inactive",
      label: "Inactive",
      icon: UserX,
      activeClass: "bg-error/20 text-error border-error/30 shadow-sm",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Search and Advanced Filters Row */}
      <div className="flex gap-4 items-start lg:items-center justify-between">
        <div className="flex items-center gap-2 w-full lg:w-96">
          <SearchInput
            className="flex-1"
            placeholder="Search customers by name, email or username..."
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

      {/* Quick Status Filters Row */}
      <div className="flex items-center gap-2 p-1 bg-muted/30 w-fit rounded-xl border border-border/50 flex-wrap">
        {filterOptions.map((option) => (
          <Badge
            key={option.id}
            variant="outline"
            onClick={() => onStatusChange(option.id as CustomerFilterStatus)}
            className={cn(
              "px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border-transparent whitespace-nowrap",
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

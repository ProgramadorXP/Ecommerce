"use client";

import { Search, Filter } from "lucide-react";

interface ReviewFiltersProps {
  currentStatus: string;
  onStatusChange: (status: string) => void;
}

export default function ReviewFilters({
  currentStatus,
  onStatusChange,
}: ReviewFiltersProps) {
  const statuses = [
    { id: "all", label: "All Reviews" },
    { id: "pending", label: "Pending" },
    { id: "approved", label: "Approved" },
    { id: "flagged", label: "Flagged" },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
        {statuses.map((status) => (
          <button
            key={status.id}
            onClick={() => onStatusChange(status.id)}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer border ${
              currentStatus === status.id
                ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                : "bg-card text-text-muted border-border hover:border-primary/50"
            }`}
          >
            {status.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 w-full md:w-auto">
        <div className="relative flex-1 md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search reviews..."
            className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-xl text-xs font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          />
        </div>
        <button className="p-2 bg-card border border-border rounded-xl hover:bg-muted transition-all cursor-pointer">
          <Filter className="h-4 w-4 text-text-muted" />
        </button>
      </div>
    </div>
  );
}

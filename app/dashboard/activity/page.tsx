"use client";

import {
  History as HistoryIcon,
  Search,
  Filter,
  Download,
  User,
  ShoppingBag,
  Tag,
  AlertCircle,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const MOCK_ACTIVITY = [
  {
    id: 1,
    user: "Admin Jona",
    action: "Updated inventory",
    target: "Vendix Pro Sneakers",
    type: "update",
    time: "2 mins ago",
    status: "success",
    icon: ShoppingBag,
  },
  {
    id: 2,
    user: "Sarah Miller",
    action: "Created new discount",
    target: "WELCOME2026",
    type: "create",
    time: "1 hour ago",
    status: "success",
    icon: Tag,
  },
  {
    id: 3,
    user: "Lucas Thorne",
    action: "Deleted review",
    target: "Review #4521",
    type: "delete",
    time: "3 hours ago",
    status: "warning",
    icon: AlertCircle,
  },
  {
    id: 4,
    user: "System",
    action: "Auto-backup completed",
    target: "Database v2.4",
    type: "system",
    time: "5 hours ago",
    status: "success",
    icon: HistoryIcon,
  },
  {
    id: 5,
    user: "Admin Jona",
    action: "Failed login attempt",
    target: "IP: 192.168.1.1",
    type: "security",
    time: "Yesterday",
    status: "error",
    icon: AlertCircle,
  },
  {
    id: 6,
    user: "Emma Wilson",
    action: "Updated profile",
    target: "Admin Settings",
    type: "update",
    time: "2 days ago",
    status: "success",
    icon: User,
  },
];

export default function ActivityLogPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-secondary/10 rounded-2xl">
            <HistoryIcon className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-text-primary">
              Activity Log
            </h1>
            <p className="text-sm text-text-muted">
              Monitor all administrative actions and system events.
            </p>
          </div>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-card border border-border text-text-primary text-sm font-bold rounded-xl hover:bg-muted transition-all cursor-pointer">
          <Download className="h-4 w-4" />
          Export Logs
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
          <input
            placeholder="Search by user or action..."
            className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-text-muted/50"
          />
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2.5 bg-card border border-border rounded-xl text-xs font-bold text-text-muted flex items-center gap-2 hover:text-text-primary transition-all cursor-pointer">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="px-4 py-2.5 bg-card border border-border rounded-xl text-xs font-bold text-text-muted flex items-center gap-2 hover:text-text-primary transition-all cursor-pointer">
            <Clock className="h-4 w-4" />
            Time Range
          </button>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="space-y-4">
        {MOCK_ACTIVITY.map((activity) => (
          <div
            key={activity.id}
            className="group relative flex gap-6 p-4 bg-card border border-border rounded-2xl hover:shadow-lg hover:shadow-primary/5 transition-all"
          >
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "p-3 rounded-2xl shadow-sm z-10",
                  activity.status === "success"
                    ? "bg-success/10 text-success"
                    : activity.status === "warning"
                      ? "bg-warning/10 text-warning"
                      : "bg-error/10 text-error",
                )}
              >
                <activity.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 w-px bg-border group-last:hidden mt-4"></div>
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black text-text-primary">
                    {activity.user}
                  </span>
                  <Badge
                    variant="outline"
                    className="bg-muted text-text-muted border-border font-bold text-[8px] uppercase tracking-tighter"
                  >
                    {activity.type}
                  </Badge>
                </div>
                <span className="text-[10px] text-text-muted font-bold flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {activity.time}
                </span>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed font-medium">
                {activity.action}{" "}
                <span className="font-black text-text-primary">
                  “{activity.target}”
                </span>
              </p>

              <div className="flex items-center gap-3 pt-1">
                <div className="flex items-center gap-1 text-[10px] font-bold text-success/80">
                  <CheckCircle2 className="h-3 w-3" />
                  Status: {activity.status}
                </div>
                <div className="h-1 w-1 rounded-full bg-border"></div>
                <button className="text-[10px] font-black text-primary hover:underline uppercase tracking-widest">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

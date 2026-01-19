"use client";

import { Bell } from "lucide-react";
import IconButton from "@/components/common/IconButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    title: "New Order received",
    description:
      "Order #1234 has been placed successfully and is ready for processing.",
    time: "2 minutes ago",
    isRead: false,
  },
  {
    id: 2,
    title: "Inventory Alert",
    description:
      "Product 'Vendix Pro' is running low on stock (only 5 units left).",
    time: "1 hour ago",
    isRead: false,
  },
  {
    id: 3,
    title: "System Update",
    description:
      "The dashboard has been updated to v2.4.0 with new analytics features.",
    time: "5 hours ago",
    isRead: true,
  },
];

export default function NotificationMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton
          icon={Bell}
          title="Notifications"
          badge={
            <span className="absolute top-2.5 right-2.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-error"></span>
            </span>
          }
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-border bg-card">
          <DropdownMenuLabel className="p-0 font-bold text-sm text-text-primary">
            Notifications
          </DropdownMenuLabel>
          <button className="text-[10px] font-bold text-primary uppercase tracking-wider hover:underline transition-all">
            Mark all as read
          </button>
        </div>

        <div className="max-h-[350px] overflow-y-auto custom-scrollbar">
          {MOCK_NOTIFICATIONS.map((notif) => (
            <DropdownMenuItem
              key={notif.id}
              className="flex flex-col items-start gap-1 p-4 cursor-pointer focus:bg-accent/50 border-b border-border last:border-0 transition-colors"
            >
              <div className="flex items-center justify-between w-full">
                <span
                  className={
                    notif.isRead
                      ? "text-sm font-medium text-text-primary"
                      : "text-sm font-bold text-text-primary"
                  }
                >
                  {notif.title}
                </span>
                {!notif.isRead && (
                  <span className="h-2 w-2 rounded-full bg-primary" />
                )}
              </div>

              <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                {notif.description}
              </p>

              <span className="text-[10px] text-text-muted mt-1 font-medium">
                {notif.time}
              </span>
            </DropdownMenuItem>
          ))}
        </div>

        <DropdownMenuSeparator className="m-0" />

        <div className="p-2 bg-card/50">
          <button className="w-full py-2 text-xs font-semibold text-center text-text-secondary hover:text-primary hover:bg-accent/30 rounded-md transition-all">
            View all notifications
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

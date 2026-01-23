"use client";

import {
  Plus,
  Tag,
  Search,
  Calendar,
  MoreVertical,
  Edit2,
  Trash2,
  Copy,
  Ticket,
} from "lucide-react";
import Link from "next/link";
import IconButton from "@/components/common/IconButton";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const MOCK_DISCOUNTS = [
  {
    id: 1,
    code: "WELCOME2026",
    description: "20% off for all new customers",
    amount: "20%",
    type: "percentage",
    status: "active",
    usage: 142,
    expiry: "2026-12-31",
  },
  {
    id: 2,
    code: "VENDIXPRO",
    description: "Professional tier discount",
    amount: "$50",
    type: "fixed",
    status: "active",
    usage: 89,
    expiry: "2026-06-15",
  },
  {
    id: 3,
    code: "SUMMER-SALE",
    description: "Summer collection discount",
    amount: "15%",
    type: "percentage",
    status: "expired",
    usage: 421,
    expiry: "2025-08-31",
  },
  {
    id: 4,
    code: "SECRET50",
    description: "Limited time 50% discount",
    amount: "50%",
    type: "percentage",
    status: "inactive",
    usage: 0,
    expiry: "2026-02-01",
  },
];

export default function DiscountsPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-2xl">
            <Tag className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-text-primary">
              Discounts & Coupons
            </h1>
            <p className="text-sm text-text-muted">
              Create and manage promotional codes and offers.
            </p>
          </div>
        </div>
        <Link href="/dashboard/discounts/new">
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20 border-none cursor-pointer group">
            <Plus className="h-4 w-4 group-hover:rotate-90 transition-transform" />
            Create Discount
          </button>
        </Link>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 bg-card border border-border rounded-2xl">
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">
            Active Promotions
          </p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-black text-text-primary">12</h3>
            <span className="text-xs text-success font-bold">
              +2 this month
            </span>
          </div>
        </div>
        <div className="p-5 bg-card border border-border rounded-2xl">
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">
            Total Redeemed
          </p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-black text-text-primary">2.4k</h3>
            <span className="text-xs text-primary font-bold">
              15% conversion
            </span>
          </div>
        </div>
        <div className="p-5 bg-card border border-border rounded-2xl">
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">
            Revenue Boost
          </p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-black text-success">$14.2k</h3>
            <span className="text-xs text-text-muted font-bold">
              From campaigns
            </span>
          </div>
        </div>
      </div>

      {/* Search & Table */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-border flex flex-col md:flex-row gap-4 justify-between bg-muted/10">
          <div className="relative md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
            <input
              placeholder="Search by code or description..."
              className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/30 border-b border-border">
                <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                  Coupon Code
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                  Value
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                  Usage
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                  Expires
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {MOCK_DISCOUNTS.map((discount) => (
                <tr
                  key={discount.id}
                  className="group hover:bg-background/50 transition-colors"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-secondary/5 rounded-lg border border-secondary/10">
                        <Ticket className="h-4 w-4 text-secondary" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-sm font-black text-text-primary uppercase tracking-tight flex items-center gap-2">
                          {discount.code}
                          <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-muted rounded">
                            <Copy className="h-3 w-3 text-text-muted" />
                          </button>
                        </span>
                        <p className="text-[10px] text-text-muted font-medium">
                          {discount.description}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-black text-primary">
                      {discount.amount}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-text-primary">
                        {discount.usage} times
                      </span>
                      <div className="h-1 w-16 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <Badge
                      variant="outline"
                      className={cn(
                        "font-black uppercase text-[9px] px-2",
                        discount.status === "active"
                          ? "bg-success/10 text-success border-success/20"
                          : discount.status === "expired"
                            ? "bg-error/10 text-error border-error/20"
                            : "bg-muted text-text-muted border-border",
                      )}
                    >
                      {discount.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1.5 text-text-muted">
                      <Calendar className="h-3 w-3" />
                      <span className="text-[10px] font-bold">
                        {discount.expiry}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <IconButton
                        icon={Edit2}
                        className="h-8 w-8 hover:text-primary hover:bg-primary/5"
                        title="Edit"
                      />
                      <IconButton
                        icon={Trash2}
                        className="h-8 w-8 hover:text-error hover:bg-error/5"
                        title="Delete"
                      />
                      <IconButton icon={MoreVertical} className="h-8 w-8" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

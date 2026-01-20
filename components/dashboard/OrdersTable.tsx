"use client";

import { MoreVertical } from "lucide-react";
import IconButton from "@/components/common/IconButton";

import { RECENT_ORDERS } from "@/data/dashboard/overview";

export default function OrdersTable() {
  return (
    <div className="p-6 bg-card border border-border rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-text-primary">Recent Orders</h2>
        <IconButton icon={MoreVertical} className="h-8 w-8" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Order ID
              </th>
              <th className="pb-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Customer
              </th>
              <th className="pb-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Amount
              </th>
              <th className="pb-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Status
              </th>
              <th className="pb-4 text-xs font-bold text-text-muted uppercase tracking-wider text-right">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {RECENT_ORDERS.map((order) => (
              <tr
                key={order.id}
                className="group hover:bg-background/50 transition-colors"
              >
                <td className="py-4 text-sm font-bold text-primary">
                  {order.id}
                </td>
                <td className="py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-text-primary">
                      {order.customer}
                    </span>
                    <span className="text-[10px] text-text-muted">
                      {order.email}
                    </span>
                  </div>
                </td>
                <td className="py-4 text-sm font-bold text-text-primary">
                  {order.amount}
                </td>
                <td className="py-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      order.status === "paid"
                        ? "bg-success/10 text-success"
                        : order.status === "pending"
                          ? "bg-warning/10 text-warning"
                          : order.status === "shipped"
                            ? "bg-primary/10 text-primary"
                            : order.status === "delivered"
                              ? "bg-vendix-accent/10 text-vendix-accent"
                              : "bg-error/10 text-error"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-4 text-xs text-text-muted text-right">
                  {order.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="w-full mt-6 py-2 text-xs font-bold text-primary hover:bg-primary/5 rounded-lg transition-all">
        View All Transaction History
      </button>
    </div>
  );
}

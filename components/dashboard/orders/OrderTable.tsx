"use client";

import {
  MoreVertical,
  Eye,
  Truck,
  FileText,
  ChevronRight,
  ChevronLeft,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import IconButton from "@/components/common/IconButton";
import { Order } from "./types";

interface OrderTableProps {
  orders: Order[];
  onViewDetails: (order: Order) => void;
}

export default function OrderTable({ orders, onViewDetails }: OrderTableProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-success/10 text-success border-success/20";
      case "pending":
        return "bg-warning/10 text-warning border-warning/20";
      case "shipped":
        return "bg-primary/10 text-primary border-primary/20";
      case "delivered":
        return "bg-vendix-accent/10 text-vendix-accent border-vendix-accent/20";
      case "cancelled":
        return "bg-error/10 text-error border-error/20";
      default:
        return "bg-muted text-text-muted border-border";
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border-hidden">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Items
              </th>
              <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="group hover:bg-background/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <span className="text-sm font-black text-primary">
                    #ORD-{order.id}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-muted border border-border flex items-center justify-center text-text-primary text-[10px] font-bold">
                      {order.userName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-bold text-text-primary truncate">
                        {order.userName}
                      </span>
                      <span className="text-[10px] text-text-muted truncate">
                        {order.userEmail}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-black text-text-primary">
                    ${order.totalAmount.toFixed(2)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex -space-x-2">
                    {order.items.slice(0, 3).map((item, idx) => (
                      <div
                        key={idx}
                        className="relative h-7 w-7 rounded-lg overflow-hidden border-2 border-card bg-muted shadow-sm"
                        title={item.productName}
                      >
                        <Image
                          src={item.productImage}
                          alt={item.productName}
                          fill
                          sizes="28px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                    {order.items.length > 3 && (
                      <div className="h-7 w-7 rounded-lg border-2 border-card bg-background flex items-center justify-center text-[8px] font-bold text-text-muted shadow-sm">
                        +{order.items.length - 3}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${getStatusStyles(
                      order.status,
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-text-muted">
                    <Calendar className="h-3 w-3" />
                    <span className="text-xs font-medium">
                      {formatDate(order.createdAt)}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <IconButton
                      onClick={() => onViewDetails(order)}
                      icon={Eye}
                      className="h-8 w-8 hover:text-primary hover:bg-primary/5"
                      title="View Details"
                    />
                    <IconButton
                      icon={Truck}
                      className="h-8 w-8 hover:text-vendix-accent hover:bg-vendix-accent/5"
                      title="Update Shipping"
                    />
                    <IconButton
                      icon={FileText}
                      className="h-8 w-8 hover:text-secondary hover:bg-secondary/5"
                      title="Generate Invoice"
                    />
                    <IconButton
                      icon={MoreVertical}
                      className="h-8 w-8"
                      title="More"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="px-6 py-4 bg-muted/20 border-t border-border flex items-center justify-between">
        <p className="text-xs text-text-muted">
          Showing <span className="font-bold text-text-primary">1</span> to{" "}
          <span className="font-bold text-text-primary">{orders.length}</span>{" "}
          of <span className="font-bold text-text-primary">124</span> orders
        </p>
        <div className="flex items-center gap-2">
          <button className="p-2 border border-border rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer bg-card/50">
            <ChevronLeft className="h-4 w-4" />
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`h-8 w-8 flex items-center justify-center text-xs font-bold rounded-lg transition-all cursor-pointer ${
                page === 1
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "hover:bg-white bg-card/50"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="p-2 border border-border rounded-lg hover:bg-white transition-colors cursor-pointer bg-card/50">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

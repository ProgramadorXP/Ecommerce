"use client";

import {
  X,
  Package,
  Truck,
  CreditCard,
  MapPin,
  User,
  Calendar,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import IconButton from "@/components/common/IconButton";
import { Order } from "@/components/dashboard/orders/types";

interface OrderDetailsModalProps {
  order: Order | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderDetailsModal({
  order,
  isOpen,
  onClose,
}: OrderDetailsModalProps) {
  if (!order || !isOpen) return null;

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "long",
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-card border border-border rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between bg-muted/30">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-xl font-black text-text-primary">
                Order #ORD-{order.id}
              </h2>
              <span
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${getStatusStyles(order.status)}`}
              >
                {order.status}
              </span>
            </div>
            <p className="text-xs text-text-muted flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />
              Placed on {formatDate(order.createdAt)}
            </p>
          </div>
          <IconButton
            icon={X}
            onClick={onClose}
            className="hover:bg-error/10 hover:text-error transition-colors"
          />
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Top Section: Customer & Shipping */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Customer Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <User className="h-4 w-4" />
                <h4 className="text-sm font-bold uppercase tracking-widest">
                  Customer Details
                </h4>
              </div>
              <div className="p-4 bg-muted/20 border border-border rounded-2xl flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {order.userName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-text-primary">
                    {order.userName}
                  </p>
                  <p className="text-xs text-text-muted">{order.userEmail}</p>
                  <p className="text-[10px] text-primary font-medium mt-1 cursor-pointer hover:underline flex items-center gap-1">
                    View profile <ExternalLink className="h-2 w-2" />
                  </p>
                </div>
              </div>
            </div>

            {/* Shipping Address (Mocked based on schema) */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-vendix-accent">
                <MapPin className="h-4 w-4" />
                <h4 className="text-sm font-bold uppercase tracking-widest">
                  Shipping Address
                </h4>
              </div>
              <div className="p-4 bg-muted/20 border border-border rounded-2xl">
                <p className="text-sm text-text-primary font-medium">
                  123 Business Ave, Suite 400
                </p>
                <p className="text-xs text-text-muted mt-1">
                  Silicon Valley, CA 94025
                </p>
                <p className="text-xs text-text-muted">United States</p>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-secondary">
              <Package className="h-4 w-4" />
              <h4 className="text-sm font-bold uppercase tracking-widest">
                Order Items
              </h4>
            </div>
            <div className="border border-border rounded-2xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/30 border-b border-border text-[10px] font-bold text-text-muted uppercase tracking-wider">
                    <th className="px-4 py-3">Product</th>
                    <th className="px-4 py-3 text-center">Qty</th>
                    <th className="px-4 py-3 text-right">Unit Price</th>
                    <th className="px-4 py-3 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {order.items.map((item) => (
                    <tr key={item.id} className="text-sm">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 rounded-lg overflow-hidden border border-border bg-muted shrink-0">
                            <Image
                              src={item.productImage}
                              alt={item.productName}
                              fill
                              sizes="40px"
                              className="object-cover"
                            />
                          </div>
                          <span className="font-bold text-text-primary line-clamp-1">
                            {item.productName}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center text-text-muted font-medium">
                        x{item.quantity}
                      </td>
                      <td className="px-4 py-3 text-right text-text-muted font-medium">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 text-right font-black text-text-primary">
                        ${(item.quantity * item.price).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer: Summary */}
        <div className="p-6 border-t border-border bg-muted/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-text-muted" />
              <div className="text-[10px] uppercase font-bold text-text-muted tracking-wide">
                Payment Method
                <p className="text-xs text-text-primary lowercase first-letter:uppercase font-black">
                  Visa •••• 4242
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-text-muted" />
              <div className="text-[10px] uppercase font-bold text-text-muted tracking-wide">
                Shipping Method
                <p className="text-xs text-text-primary lowercase first-letter:uppercase font-black">
                  Express Delivery (2-3 days)
                </p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-text-muted font-bold uppercase tracking-wider mb-1">
              Total Amount
            </p>
            <p className="text-3xl font-black text-primary tracking-tighter">
              ${order.totalAmount.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

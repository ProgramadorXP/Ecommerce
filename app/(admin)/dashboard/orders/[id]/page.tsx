"use client";

import {
  ArrowLeft,
  Package,
  Truck,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Printer,
  ChevronRight,
  User,
  XCircle,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MOCK_ORDERS } from "@/data/dashboard/orders";
import { cn } from "@/lib/utils";

export default function OrderDetailPage() {
  const params = useParams();
  const orderId = Number(params.id);

  // Find order from mock data
  const order = MOCK_ORDERS.find((o) => o.id === orderId) || MOCK_ORDERS[0];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "paid":
        return {
          icon: CheckCircle2,
          color: "text-success",
          bg: "bg-success/10",
          label: "Paid",
        };
      case "shipped":
        return {
          icon: Truck,
          color: "text-primary",
          bg: "bg-primary/10",
          label: "Shipped",
        };
      case "delivered":
        return {
          icon: Package,
          color: "text-secondary",
          bg: "bg-secondary/10",
          label: "Delivered",
        };
      case "cancelled":
        return {
          icon: XCircle,
          color: "text-error",
          bg: "bg-error/10",
          label: "Cancelled",
        };
      default:
        return {
          icon: Clock,
          color: "text-warning",
          bg: "bg-warning/10",
          label: "Pending",
        };
    }
  };

  const status = getStatusConfig(order.status);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/orders"
            className="p-2 bg-card border border-border rounded-xl hover:bg-muted transition-all group cursor-pointer"
          >
            <ArrowLeft className="h-5 w-5 text-text-muted group-hover:text-text-primary transition-colors" />
          </Link>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-black tracking-tighter text-text-primary">
                ORDER #{order.id}
              </h1>
              <Badge
                className={cn(
                  "font-black uppercase text-[10px] tracking-widest",
                  status.bg,
                  status.color,
                  "border-none",
                )}
              >
                {status.label}
              </Badge>
            </div>
            <p className="text-sm text-text-muted">
              Placed on{" "}
              {new Date(order.createdAt).toLocaleDateString("en-US", {
                dateStyle: "long",
              })}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-card border border-border text-text-primary text-sm font-bold rounded-xl hover:bg-muted transition-all cursor-pointer">
            <Printer className="h-4 w-4" />
            Print Invoice
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20 border-none cursor-pointer">
            Update Status
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content: Items & Timeline */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border rounded-2xl bg-card shadow-sm border-none ring-1 ring-border">
            <CardHeader className="px-6 border-b border-border/50">
              <CardTitle className="text-lg font-bold">Order Items</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-border/50">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 rounded-2xl overflow-hidden border border-border bg-muted/20">
                        <Image
                          src={item.productImage}
                          alt={item.productName}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="64px"
                        />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-black text-text-primary group-hover:text-primary transition-colors cursor-pointer leading-tight">
                          {item.productName}
                        </h4>
                        <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-xs font-black text-text-primary">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-muted/10 border-t border-border/50 space-y-3">
                <div className="flex justify-between text-xs font-bold text-text-muted uppercase tracking-widest">
                  <span>Subtotal</span>
                  <span className="text-text-primary">
                    ${(order.totalAmount - 15).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-xs font-bold text-text-muted uppercase tracking-widest">
                  <span>Shipping (Express)</span>
                  <span className="text-text-primary">$15.00</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-border/50">
                  <span className="text-sm font-black text-text-primary uppercase tracking-tighter">
                    Total Amount
                  </span>
                  <span className="text-2xl font-black text-primary tracking-tighter">
                    ${order.totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border rounded-2xl bg-card shadow-sm border-none ring-1 ring-border">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Order Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative space-y-8 before:absolute before:inset-0 before:ml-4 before:-translate-x-px before:h-full before:w-0.5 before:bg-linear-to-b before:from-primary before:via-border/50 before:to-transparent">
                <TimelineItem
                  title="Delivered Successfully"
                  time="Jan 22, 2026 - 10:45 AM"
                  description="The order has been delivered to the customer."
                  icon={CheckCircle2}
                  active
                  color="text-success"
                />
                <TimelineItem
                  title="Out for Delivery"
                  time="Jan 22, 2026 - 08:30 AM"
                  description="Package is with the courier for local delivery."
                  icon={Truck}
                />
                <TimelineItem
                  title="Shipped from Warehouse"
                  time="Jan 21, 2026 - 14:00 PM"
                  description="Order has been packed and sent to the courier."
                  icon={Package}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar: Customer & Shipping */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-border rounded-2xl bg-card shadow-sm border-none ring-1 ring-border overflow-hidden">
            <CardHeader className="px-6 border-b border-border/50 bg-muted/30">
              <CardTitle className="text-sm font-black uppercase tracking-widest text-text-muted flex items-center gap-2">
                <User className="h-4 w-4" />
                Customer Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary font-black uppercase text-xl">
                  {order.userName[0]}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-black text-text-primary">
                    {order.userName}
                  </h4>
                  <p className="text-[10px] text-text-muted">
                    14 previous orders
                  </p>
                </div>
                <Link
                  href={`/dashboard/customers/${order.userId}`}
                  className="ml-auto p-2 hover:bg-muted rounded-xl transition-colors"
                >
                  <ExternalLink className="h-4 w-4 text-text-muted" />
                </Link>
              </div>

              <div className="space-y-4">
                <ContactInfo
                  icon={Mail}
                  label="Email Address"
                  value={order.userEmail}
                />
                <ContactInfo
                  icon={Phone}
                  label="Phone Number"
                  value="+1 (555) 123-4567"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border rounded-2xl bg-card shadow-sm border-none ring-1 ring-border">
            <CardHeader className="px-6 border-b border-border/50 bg-muted/30">
              <CardTitle className="text-sm font-black uppercase tracking-widest text-text-muted flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Shipping Address
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="p-4 bg-muted/20 border border-border rounded-2xl">
                <p className="text-sm text-text-primary font-black uppercase tracking-tighter mb-1">
                  {order.userName}
                </p>
                <p className="text-xs text-text-muted leading-relaxed">
                  123 Business Way, Apt 4B
                  <br />
                  San Francisco, CA 94107
                  <br />
                  United States
                </p>
              </div>
              <button className="w-full py-2.5 bg-card border border-border rounded-xl text-xs font-bold text-text-muted hover:text-text-primary hover:bg-muted transition-all cursor-pointer">
                Edit Shipping Details
              </button>
            </CardContent>
          </Card>

          <Card className="border-border rounded-2xl bg-card shadow-sm border-none ring-1 ring-border bg-linear-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="text-sm font-black uppercase tracking-widest text-text-muted">
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ActionRow
                label="Request Refund"
                icon={XCircle}
                color="text-error"
              />
              <ActionRow label="Duplicate Order" icon={Package} />
              <ActionRow label="Contact Customer" icon={Mail} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({
  title,
  time,
  description,
  icon: Icon,
  active = false,
  color,
}: {
  title: string;
  time: string;
  description: string;
  icon: LucideIcon;
  active?: boolean;
  color?: string;
}) {
  return (
    <div className="relative pl-12">
      <div
        className={cn(
          "absolute left-0 p-2 rounded-xl border border-card ring-4 ring-card z-10",
          active ? "bg-primary/10 text-primary" : "bg-muted text-text-muted",
        )}
      >
        <Icon className={cn("h-4 w-4", color)} />
      </div>
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h4
            className={cn(
              "text-xs font-black uppercase tracking-widest",
              active ? "text-text-primary" : "text-text-muted",
            )}
          >
            {title}
          </h4>
          <span className="text-[10px] text-text-muted font-bold">{time}</span>
        </div>
        <p className="text-xs text-text-muted font-medium">{description}</p>
      </div>
    </div>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 bg-muted rounded-xl">
        <Icon className="h-3.5 w-3.5 text-text-muted" />
      </div>
      <div>
        <p className="text-[9px] font-bold text-text-muted uppercase tracking-widest leading-none mb-1">
          {label}
        </p>
        <p className="text-xs font-bold text-text-primary">{value}</p>
      </div>
    </div>
  );
}

function ActionRow({
  label,
  icon: Icon,
  color,
}: {
  label: string;
  icon: LucideIcon;
  color?: string;
}) {
  return (
    <div className="flex items-center justify-between p-3 bg-muted/20 border border-border/10 rounded-xl hover:bg-muted/40 transition-all cursor-pointer group">
      <div className="flex items-center gap-3">
        <Icon
          className={cn(
            "h-4 w-4 text-text-muted group-hover:scale-110 transition-transform",
            color,
          )}
        />
        <span
          className={cn(
            "text-xs font-bold text-text-muted group-hover:text-text-primary",
            color,
          )}
        >
          {label}
        </span>
      </div>
      <ChevronRight className="h-3 w-3 text-text-muted" />
    </div>
  );
}

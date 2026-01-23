"use client";

import {
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  ShoppingBag,
  DollarSign,
  MapPin,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  User,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";
import { MOCK_CUSTOMERS } from "@/data/dashboard/customers";
import { cn } from "@/lib/utils";

export default function CustomerDetailPage() {
  const params = useParams();
  const customerId = Number(params.id);

  // Find customer from mock data
  const customer =
    MOCK_CUSTOMERS.find((c) => c.id === customerId) || MOCK_CUSTOMERS[0];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/customers"
          className="p-2 bg-card border border-border rounded-xl hover:bg-muted transition-all group"
        >
          <ArrowLeft className="h-5 w-5 text-text-muted group-hover:text-text-primary transition-colors" />
        </Link>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tighter text-text-primary uppercase">
              {customer.details?.firstName ?? "N/A"}{" "}
              {customer.details?.lastName ?? ""}
            </h1>
            <Badge
              className={cn(
                "font-black uppercase text-[10px] tracking-widest",
                customer.role === "VIP"
                  ? "bg-vendix-accent text-white"
                  : "bg-primary/10 text-primary border-primary/20",
              )}
            >
              {customer.role}
            </Badge>
          </div>
          <p className="text-sm text-text-muted">
            Customer details and purchase history.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatItem
          label="Total Revenue"
          value={`$${customer.stats.totalSpent.toFixed(2)}`}
          icon={DollarSign}
          color="text-success"
          bgColor="bg-success/10"
        />
        <StatItem
          label="Orders Count"
          value={customer.stats.totalOrders}
          icon={ShoppingBag}
          color="text-primary"
          bgColor="bg-primary/10"
        />
        <StatItem
          label="Lifetime Value"
          value={`$${(customer.stats.totalSpent / (customer.stats.totalOrders || 1)).toFixed(2)}`}
          icon={TrendingUp}
          color="text-secondary"
          bgColor="bg-secondary/10"
          sub="Average per order"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-border rounded-3xl bg-card shadow-xl shadow-primary/5 overflow-hidden border-none ring-1 ring-border">
            <div className="h-24 bg-linear-to-br from-primary/20 via-primary/5 to-transparent"></div>
            <CardContent className="relative px-6 pb-8 mt-[-48px]">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 rounded-3xl overflow-hidden border-4 border-card bg-muted shadow-lg mb-4">
                  {customer.details?.image ? (
                    <Image
                      src={customer.details.image}
                      alt={customer.username}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-primary/10 text-primary">
                      <User className="h-10 w-10" />
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-black text-text-primary">
                  @{customer.username}
                </h3>
                <p className="text-xs text-text-muted mt-1">
                  ID: #CUST-00{customer.id}
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <InfoRow
                  icon={Mail}
                  label="Email Address"
                  value={customer.email}
                />
                <InfoRow
                  icon={Phone}
                  label="Phone Number"
                  value={customer.details?.phone ?? "N/A"}
                />
                <InfoRow
                  icon={Calendar}
                  label="Join Date"
                  value={new Date(customer.createdAt).toLocaleDateString()}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border rounded-3xl bg-card shadow-sm border-none ring-1 ring-border">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                <MapPin className="h-4 w-4 text-vendix-accent" />
                Default Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-muted/20 border border-border rounded-2xl">
                <p className="text-sm text-text-primary font-medium">
                  123 Business Way, Apt 4B
                </p>
                <p className="text-xs text-text-muted mt-1">
                  San Francisco, CA 94107
                </p>
                <p className="text-xs text-text-muted">United States</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content: Orders */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border rounded-3xl bg-card shadow-sm border-none ring-1 ring-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-bold">Recent Orders</CardTitle>
              <Link
                href="/dashboard/orders"
                className="text-xs text-primary font-bold hover:underline flex items-center gap-1"
              >
                View all orders <ExternalLink className="h-3 w-3" />
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((orderIdx) => (
                  <div
                    key={orderIdx}
                    className="group p-4 bg-muted/20 border border-border rounded-2xl flex items-center justify-between hover:bg-muted/40 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-card border border-border flex items-center justify-center font-black text-xs text-primary group-hover:scale-110 transition-transform">
                        #{1024 + orderIdx}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text-primary">
                          Vendix Pro Sneakers X
                        </p>
                        <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold">
                          Jan {15 + orderIdx}, 2026
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm font-black text-text-primary">
                          $219.99
                        </p>
                        <Badge
                          variant="outline"
                          className="bg-success/10 text-success border-success/20 font-bold text-[8px] px-1.5 py-0 uppercase"
                        >
                          Paid
                        </Badge>
                      </div>
                      <ChevronRight className="h-4 w-4 text-text-muted group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function StatItem({
  label,
  value,
  icon: Icon,
  color,
  bgColor,
  sub,
}: {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  sub?: string;
}) {
  return (
    <div className="p-5 bg-card border border-border rounded-3xl flex items-center gap-4 hover:shadow-lg hover:shadow-primary/5 transition-all group border-none ring-1 ring-border shadow-sm">
      <div
        className={cn(
          "p-3 rounded-2xl transition-transform group-hover:scale-110",
          bgColor,
          color,
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div className="space-y-0.5">
        <p className="text-[10px] font-black text-text-muted uppercase tracking-widest leading-none">
          {label}
        </p>
        <h3 className="text-2xl font-black text-text-primary tracking-tighter">
          {value}
        </h3>
        {sub && (
          <p className="text-[10px] text-text-muted font-medium">{sub}</p>
        )}
      </div>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string | null;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-1.5 rounded-lg bg-muted border border-border">
        <Icon className="h-3.5 w-3.5 text-text-muted" />
      </div>
      <div>
        <p className="text-[9px] font-bold text-text-muted uppercase tracking-widest leading-none mb-1">
          {label}
        </p>
        <p className="text-xs font-bold text-text-primary break-all">
          {value || "Not provided"}
        </p>
      </div>
    </div>
  );
}

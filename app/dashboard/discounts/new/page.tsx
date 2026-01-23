"use client";

import {
  ArrowLeft,
  Save,
  Tag,
  Calendar,
  Percent,
  DollarSign,
  Ticket,
  Plus,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export default function NewDiscountPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/discounts"
          className="p-2 bg-card border border-border rounded-xl hover:bg-muted transition-all group cursor-pointer"
        >
          <ArrowLeft className="h-5 w-5 text-text-muted group-hover:text-text-primary transition-colors" />
        </Link>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">
            New Discount
          </h1>
          <p className="text-sm text-text-muted">
            Create a coupon code or automatic discount.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border rounded-2xl bg-card shadow-sm ring-1 ring-border border-none">
            <CardHeader className="px-6 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Ticket className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold">
                  Discount Code
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between px-1">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
                    Coupon Code
                  </label>
                  <button className="text-[10px] font-black text-primary hover:underline uppercase tracking-widest">
                    Generate Random
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="e.g. SUMMER2026"
                  className="w-full px-4 py-3 bg-muted/20 border border-border rounded-xl text-sm font-black text-text-primary placeholder:text-text-muted/30 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all uppercase"
                />
                <p className="text-[10px] text-text-muted italic px-1">
                  Customers will enter this code at checkout.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                  Description
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. 20% off on all winter collection"
                  className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border rounded-2xl bg-card shadow-sm ring-1 ring-border border-none">
            <CardHeader className="px-6 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Percent className="h-5 w-5 text-secondary" />
                </div>
                <CardTitle className="text-lg font-bold">
                  Value & Type
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                    Discount Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="p-3 bg-primary text-white rounded-xl text-xs font-bold border-none cursor-pointer flex items-center justify-center gap-2">
                      <Percent className="h-4 w-4" />
                      Percentage
                    </button>
                    <button className="p-3 bg-muted border border-border rounded-xl text-xs font-bold text-text-muted flex items-center justify-center gap-2 hover:text-text-primary transition-all">
                      <DollarSign className="h-4 w-4" />
                      Fixed Amount
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                    Discount Value
                  </label>
                  <div className="relative">
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted font-bold">
                      %
                    </span>
                    <input
                      type="number"
                      placeholder="20"
                      className="w-full px-4 py-3 bg-muted/20 border border-border rounded-xl text-sm font-black focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-border/50"></div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                  Applies To
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <SelectionCard label="All Products" icon={Tag} active />
                  <SelectionCard label="Categories" icon={Plus} />
                  <SelectionCard label="Specific Items" icon={Ticket} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <Card className="border-border rounded-2xl bg-card shadow-sm ring-1 ring-border border-none">
            <CardHeader className="px-6 border-b border-border/50">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Active Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                  Start Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
                  End Date (Optional)
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
              <div className="flex items-center gap-2 px-1">
                <input
                  type="checkbox"
                  id="no-expiry"
                  className="rounded border-border text-primary cursor-pointer"
                />
                <label
                  htmlFor="no-expiry"
                  className="text-xs font-bold text-text-muted cursor-pointer"
                >
                  This discount has no expiry date
                </label>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border rounded-2xl bg-card shadow-sm ring-1 ring-border border-none">
            <CardHeader className="px-6 border-b border-border/50">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-text-muted">
                Usage Limits
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-4">
                <LimitToggle label="Limit total usage" />
                <LimitToggle label="Limit to one per user" active />
              </div>

              <div className="w-full h-px bg-border/50 my-2"></div>

              <div className="flex flex-col gap-2">
                <button className="w-full py-3 bg-primary text-white text-xs font-black rounded-xl hover:opacity-90 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-primary/20 uppercase tracking-widest">
                  <Save className="h-4 w-4" />
                  Create Discount
                </button>
                <button className="py-2.5 bg-card border border-border text-text-muted text-[10px] font-black rounded-xl hover:bg-muted transition-all cursor-pointer uppercase tracking-widest">
                  Discard Draft
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function SelectionCard({
  label,
  icon: Icon,
  active = false,
}: {
  label: string;
  icon: LucideIcon;
  active?: boolean;
}) {
  return (
    <div
      className={cn(
        "p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col items-center gap-2 text-center",
        active
          ? "bg-primary/5 border-primary text-primary"
          : "bg-card border-border text-text-muted hover:border-border/80",
      )}
    >
      <Icon className="h-5 w-5" />
      <span className="text-[10px] font-black uppercase tracking-tight">
        {label}
      </span>
    </div>
  );
}

function LimitToggle({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs font-bold text-text-primary">{label}</span>
      <button
        className={`w-10 h-5 rounded-full relative transition-all border-none cursor-pointer ${active ? "bg-primary" : "bg-muted"}`}
      >
        <div
          className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${active ? "left-5.5" : "left-0.5"}`}
        />
      </button>
    </div>
  );
}

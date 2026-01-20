"use client";

import { Tag, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const activeDiscounts = [
  {
    id: 1,
    name: "Summer Sale",
    percentage: "25%",
    endsIn: "2 days",
    status: "active",
  },
  {
    id: 2,
    name: "New Arrivals",
    percentage: "10%",
    endsIn: "5 days",
    status: "active",
  },
];

export default function DiscountStatus() {
  return (
    <Card className="p-6 bg-card border-border rounded-2xl bg-linear-to-br from-card to-secondary/5 shadow-sm h-fit">
      <CardContent className="p-0">
        <div className="flex items-center gap-2 mb-6 text-secondary">
          <Tag className="h-5 w-5" />
          <h2 className="text-lg font-bold">Active Promotions</h2>
        </div>

        <div className="space-y-4">
          {activeDiscounts.map((discount) => (
            <div
              key={discount.id}
              className="p-4 bg-background border border-border rounded-xl hover:border-secondary transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-2">
                <Badge
                  variant="secondary"
                  className="text-xs font-bold px-2 py-0.5 bg-secondary/10 text-secondary rounded-full border-secondary/20"
                >
                  {discount.percentage} OFF
                </Badge>
                <div className="flex items-center gap-1 text-[10px] text-text-muted">
                  <Clock className="h-3 w-3" />
                  {discount.endsIn}
                </div>
              </div>
              <p className="text-sm font-bold text-text-primary">
                {discount.name}
              </p>
              <div className="mt-3 w-full bg-border h-1 rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-[65%]" />
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 py-2 text-xs font-bold text-secondary hover:underline transition-all cursor-pointer border-none bg-transparent">
          Manage Discounts
        </button>
      </CardContent>
    </Card>
  );
}

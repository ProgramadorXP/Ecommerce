"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreVertical, ArrowUpRight } from "lucide-react";
import IconButton from "@/components/common/IconButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { RECENT_ORDERS_DATA } from "@/data/dashboard/analytics";

const getStatusStyles = (status: string) => {
  switch (status.toLowerCase()) {
    case "paid":
      return "bg-success/10 text-success border-success/20";
    case "pending":
      return "bg-warning/10 text-warning border-warning/20";
    case "shipped":
      return "bg-primary/10 text-primary border-primary/20";
    case "delivered":
      return "bg-vendix-accent/10 text-vendix-accent border-vendix-accent/20";
    default:
      return "bg-error/10 text-error border-error/20";
  }
};

export function RecentOrders() {
  return (
    <Card className="bg-card border-border rounded-2xl overflow-hidden shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between px-4 sm:px-6">
        <div>
          <CardTitle className="text-lg font-bold text-text-primary">
            Recent Orders
          </CardTitle>
          <p className="text-xs text-text-muted mt-1">
            Latest transactions across your store
          </p>
        </div>
        <IconButton icon={MoreVertical} className="h-8 w-8 hover:bg-muted" />
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border/50 hover:bg-transparent">
                <TableHead className="px-6 py-4 text-xs font-black text-text-muted uppercase tracking-wider">
                  Order ID
                </TableHead>
                <TableHead className="px-6 py-4 text-xs font-black text-text-muted uppercase tracking-wider hidden sm:table-cell">
                  Customer
                </TableHead>
                <TableHead className="px-6 py-4 text-xs font-black text-text-muted uppercase tracking-wider">
                  Details
                </TableHead>
                <TableHead className="px-6 py-4 text-xs font-black text-text-muted uppercase tracking-wider">
                  Amount
                </TableHead>
                <TableHead className="px-6 py-4 text-xs font-black text-text-muted uppercase tracking-wider">
                  Status
                </TableHead>
                <TableHead className="px-6 py-4 text-xs font-black text-text-muted uppercase tracking-wider text-left">
                  Date
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {RECENT_ORDERS_DATA.map((order) => (
                <TableRow
                  key={order.id}
                  className="group hover:bg-muted/30 transition-colors border-b border-border/50 last:border-0"
                >
                  <TableCell className="px-6 py-4 text-sm font-black text-primary">
                    {order.id}
                  </TableCell>
                  <TableCell className="px-6 py-4 hidden sm:table-cell">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">
                        {order.customer}
                      </span>
                      <span className="text-[10px] text-text-muted font-medium">
                        {order.email}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <span className="text-xs font-bold text-text-muted bg-muted px-2 py-1 rounded-lg">
                      {order.items} {order.items === 1 ? "item" : "items"}
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-sm font-black text-text-primary">
                    {order.amount}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Badge
                      variant="outline"
                      className={cn(
                        "px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider border",
                        getStatusStyles(order.status),
                      )}
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-xs font-semibold text-text-muted text-left">
                    {order.date}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="p-4 border-t border-border/50">
          <button className="w-full py-2.5 flex items-center justify-center gap-2 text-xs font-black text-primary hover:bg-primary/5 rounded-xl transition-all cursor-pointer group">
            View All Transaction History
            <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

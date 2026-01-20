"use client";

import { MoreVertical } from "lucide-react";
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
import { RECENT_ORDERS } from "@/data/dashboard/overview";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OrdersTable() {
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
      default:
        return "bg-error/10 text-error border-error/20";
    }
  };

  return (
    <Card className="bg-card border-border rounded-2xl overflow-hidden shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between p-6">
        <CardTitle className="text-lg font-bold text-text-primary">
          Recent Orders
        </CardTitle>
        <IconButton icon={MoreVertical} className="h-8 w-8" />
      </CardHeader>

      <CardContent className="p-0 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border hover:bg-transparent">
              <TableHead className="px-6 pb-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Order ID
              </TableHead>
              <TableHead className="px-6 pb-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Customer
              </TableHead>
              <TableHead className="px-6 pb-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Amount
              </TableHead>
              <TableHead className="px-6 pb-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Status
              </TableHead>
              <TableHead className="px-6 pb-4 text-xs font-bold text-text-muted uppercase tracking-wider text-right">
                Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-border">
            {RECENT_ORDERS.map((order) => (
              <TableRow
                key={order.id}
                className="group hover:bg-background/50 transition-colors border-border"
              >
                <TableCell className="px-6 py-4 text-sm font-bold text-primary">
                  {order.id}
                </TableCell>
                <TableCell className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-text-primary">
                      {order.customer}
                    </span>
                    <span className="text-[10px] text-text-muted">
                      {order.email}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4 text-sm font-bold text-text-primary">
                  {order.amount}
                </TableCell>
                <TableCell className="px-6 py-4">
                  <Badge
                    variant="outline"
                    className={cn(
                      "px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider border",
                      getStatusStyles(order.status),
                    )}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-6 py-4 text-xs text-text-muted text-right">
                  {order.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      <div className="p-6 pt-0">
        <button className="w-full mt-6 py-2 text-xs font-bold text-primary hover:bg-primary/5 rounded-lg transition-all cursor-pointer">
          View All Transaction History
        </button>
      </div>
    </Card>
  );
}

"use client";

import {
  MoreVertical,
  Eye,
  Mail,
  Phone,
  Calendar,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Image from "next/image";
import IconButton from "@/components/common/IconButton";
import { Customer } from "@/components/dashboard/customers/types";
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

interface CustomerTableProps {
  customers: Customer[];
}

export default function CustomerTable({ customers }: CustomerTableProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getRoleStyles = (role: string) => {
    switch (role.toLowerCase()) {
      case "vip":
        return "bg-vendix-accent/10 text-vendix-accent border-vendix-accent/20";
      case "admin":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-muted text-text-muted border-border";
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 hover:bg-muted/30 border-b border-border">
              <TableHead className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Customer
              </TableHead>
              <TableHead className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider hidden sm:table-cell">
                Join Date
              </TableHead>
              <TableHead className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Stats
              </TableHead>
              <TableHead className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Total Spent
              </TableHead>
              <TableHead className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Role
              </TableHead>
              <TableHead className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow
                key={customer.id}
                className="group hover:bg-background/50 transition-colors border-b border-border/50 last:border-0"
              >
                <TableCell className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 rounded-xl overflow-hidden border border-border bg-muted shrink-0">
                      {customer.details?.image ? (
                        <Image
                          src={customer.details.image}
                          alt={customer.username}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs font-bold text-text-muted">
                          {customer.username[0].toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-bold text-text-primary truncate">
                        {customer.details?.firstName}{" "}
                        {customer.details?.lastName}
                      </span>
                      <span className="text-[10px] text-text-muted truncate">
                        @{customer.username} • {customer.email}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4 hidden sm:table-cell">
                  <div className="flex items-center gap-1.5 text-text-muted">
                    <Calendar className="h-3 w-3" />
                    <span className="text-xs font-medium">
                      {formatDate(customer.createdAt)}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-text-primary">
                      {customer.stats.totalOrders} Orders
                    </span>
                    <span className="text-[10px] text-text-muted">
                      Last:{" "}
                      {customer.stats.lastOrderDate
                        ? formatDate(customer.stats.lastOrderDate)
                        : "Never"}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <span className="text-sm font-black text-primary">
                    ${customer.stats.totalSpent.toFixed(2)}
                  </span>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <Badge
                    variant="outline"
                    className={cn(
                      "font-black uppercase tracking-wider border transition-colors py-0.5 px-2 text-[10px]",
                      getRoleStyles(customer.role),
                    )}
                  >
                    {customer.role}
                  </Badge>
                </TableCell>
                <TableCell className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <IconButton
                      icon={Eye}
                      className="h-8 w-8 hover:text-primary hover:bg-primary/5"
                      title="View Profile"
                    />
                    <IconButton
                      icon={Mail}
                      className="h-8 w-8 hover:text-vendix-accent hover:bg-vendix-accent/5"
                      title="Send Message"
                    />
                    <IconButton
                      icon={Phone}
                      className="h-8 w-8 hover:text-secondary hover:bg-secondary/5"
                      title="Call"
                    />
                    <IconButton
                      icon={MoreVertical}
                      className="h-8 w-8"
                      title="More"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 bg-muted/20 border-t border-border flex items-center justify-between">
        <p className="text-xs text-text-muted">
          Showing <span className="font-bold text-text-primary">1</span> to{" "}
          <span className="font-bold text-text-primary">
            {customers.length}
          </span>{" "}
          of <span className="font-bold text-text-primary">2.5k</span> customers
        </p>
        <div className="flex items-center gap-2">
          <button className="p-2 border border-border rounded-lg hover:border-primary/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer bg-card/50">
            <ChevronLeft className="h-4 w-4" />
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`h-8 w-8 flex items-center justify-center text-xs font-bold rounded-lg transition-all cursor-pointer border ${
                page === 1
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                  : "border-border hover:border-primary/50 bg-card/50"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="p-2 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer bg-card/50">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

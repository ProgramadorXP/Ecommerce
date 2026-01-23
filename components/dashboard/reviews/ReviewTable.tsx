"use client";

import {
  Star,
  MoreVertical,
  CheckCircle2,
  XCircle,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import IconButton from "@/components/common/IconButton";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Review {
  id: number;
  userName: string;
  userImage: string;
  rating: number;
  comment: string;
  productName: string;
  productImage: string;
  status: string;
  date: string;
}

interface ReviewTableProps {
  reviews: Review[];
}

export default function ReviewTable({ reviews }: ReviewTableProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-success/10 text-success border-success/20";
      case "pending":
        return "bg-warning/10 text-warning border-warning/20";
      case "flagged":
        return "bg-error/10 text-error border-error/20";
      default:
        return "bg-muted text-text-muted border-border";
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-muted/30 border-b border-border">
              <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                Customer & Rating
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                Comment
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {reviews.map((review) => (
              <tr
                key={review.id}
                className="group hover:bg-background/50 transition-colors"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3 min-w-[180px]">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden border border-border">
                      <Image
                        src={review.userImage}
                        alt={review.userName}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-text-primary leading-none">
                        {review.userName}
                      </p>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-2.5 w-2.5 ${i < review.rating ? "fill-warning text-warning" : "text-border"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2 min-w-[150px]">
                    <div className="relative h-8 w-8 rounded-lg overflow-hidden border border-border bg-muted">
                      <Image
                        src={review.productImage}
                        alt={review.productName}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-bold text-text-secondary truncate max-w-[120px]">
                      {review.productName}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <p className="text-xs text-text-muted leading-relaxed line-clamp-2 max-w-[300px]">
                    {review.comment}
                  </p>
                </td>
                <td className="px-6 py-5">
                  <Badge
                    variant="outline"
                    className={cn(
                      "font-bold uppercase text-[9px] tracking-tighter px-2",
                      getStatusStyles(review.status),
                    )}
                  >
                    {review.status}
                  </Badge>
                </td>
                <td className="px-6 py-5">
                  <span className="text-xs font-medium text-text-muted whitespace-nowrap">
                    {formatDate(review.date)}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <IconButton
                      icon={CheckCircle2}
                      className="h-8 w-8 hover:text-success hover:bg-success/5"
                      title="Approve"
                    />
                    <IconButton
                      icon={XCircle}
                      className="h-8 w-8 hover:text-error hover:bg-error/5"
                      title="Reject"
                    />
                    <IconButton
                      icon={MessageSquare}
                      className="h-8 w-8 hover:text-primary hover:bg-primary/5"
                      title="Reply"
                    />
                    <IconButton icon={MoreVertical} className="h-8 w-8" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Placeholder */}
      <div className="px-6 py-4 bg-muted/20 border-t border-border flex items-center justify-between">
        <p className="text-[10px] text-text-muted font-bold uppercase">
          Total: {reviews.length} reviews
        </p>
        <div className="flex gap-2">
          <Badge className="bg-primary/5 text-primary border-primary/20 cursor-pointer">
            1
          </Badge>
          <Badge variant="outline" className="cursor-pointer opacity-50">
            2
          </Badge>
        </div>
      </div>
    </div>
  );
}

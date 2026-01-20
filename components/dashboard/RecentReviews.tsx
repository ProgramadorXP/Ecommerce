"use client";

import { Star, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const recentReviews = [
  {
    id: 1,
    user: "Sarah Jenkins",
    rating: 5,
    comment: "The quality is outstanding. Definitely buying again!",
    product: "Vendix Pro Sneakers",
    date: "1h ago",
  },
  {
    id: 2,
    user: "Mark Thompson",
    rating: 4,
    comment: "Very comfortable, though delivery took a bit long.",
    product: "Classic Leather Belt",
    date: "3h ago",
  },
  {
    id: 3,
    user: "Emma Davis",
    rating: 3,
    comment: "The size runs smaller than expected. Good material though.",
    product: "Signature Tee Black",
    date: "1d ago",
  },
];

export default function RecentReviews() {
  return (
    <Card className="bg-card border-border rounded-2xl shadow-sm h-fit">
      <CardHeader className="flex flex-row items-center justify-between p-6">
        <CardTitle className="text-lg font-bold text-text-primary">
          Latest Reviews
        </CardTitle>
        <div className="h-8 w-8 rounded-lg bg-secondary/10 flex items-center justify-center">
          <MessageSquare className="h-4 w-4 text-secondary" />
        </div>
      </CardHeader>

      <CardContent className="p-6 pt-0 space-y-6">
        {recentReviews.map((review) => (
          <div
            key={review.id}
            className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-border hover:before:bg-primary transition-all"
          >
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${i < review.rating ? "fill-warning text-warning" : "text-border"}`}
                />
              ))}
              <span className="text-[10px] text-text-muted ml-2">
                {review.date}
              </span>
            </div>
            <p className="text-xs font-bold text-text-primary mb-1">
              {review.user}
            </p>
            <p className="text-xs text-text-secondary line-clamp-2 italic underline decoration-secondary/20 underline-offset-4">
              {`"${review.comment}"`}
            </p>
            <p className="text-[10px] text-primary font-medium mt-2">
              on {review.product}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

"use client";

import { useState } from "react";
import ReviewHeader from "@/components/dashboard/reviews/ReviewHeader";
import ReviewFilters from "@/components/dashboard/reviews/ReviewFilters";
import ReviewTable from "@/components/dashboard/reviews/ReviewTable";
import ReviewSummary from "@/components/dashboard/reviews/ReviewSummary";

// Mock data for reviews
const MOCK_REVIEWS = [
  {
    id: 1,
    userName: "Sarah Jenkins",
    userImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
    comment:
      "The quality is outstanding. Definitely buying again! The fit is perfect and the color is exactly as shown in the pictures.",
    productName: "Vendix Pro Sneakers",
    productImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop",
    status: "approved",
    date: "2026-01-22T14:30:00Z",
  },
  {
    id: 2,
    userName: "Mark Thompson",
    userImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    rating: 4,
    comment:
      "Very comfortable, though delivery took a bit long. The product itself is great quality.",
    productName: "Classic Leather Belt",
    productImage:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop",
    status: "pending",
    date: "2026-01-22T12:00:00Z",
  },
  {
    id: 3,
    userName: "Emma Davis",
    userImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 3,
    comment:
      "The size runs smaller than expected. Good material though, I wish I had ordered one size up.",
    productName: "Signature Tee Black",
    productImage:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop",
    status: "pending",
    date: "2026-01-21T18:45:00Z",
  },
  {
    id: 4,
    userName: "Robert Wilson",
    userImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 2,
    comment:
      "Product arrived damaged. Customer support was helpful but it was a hassle to return.",
    productName: "Urban Explorer Backpack",
    productImage:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop",
    status: "flagged",
    date: "2026-01-20T10:15:00Z",
  },
];

export default function ReviewsPage() {
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredReviews = MOCK_REVIEWS.filter((review) => {
    if (filterStatus === "all") return true;
    return review.status === filterStatus;
  });

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <ReviewHeader />

      <ReviewSummary />

      <ReviewFilters
        currentStatus={filterStatus}
        onStatusChange={setFilterStatus}
      />

      <ReviewTable reviews={filteredReviews} />
    </div>
  );
}

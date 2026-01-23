"use client";

import { MessageSquare, Download } from "lucide-react";

export default function ReviewHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-primary/10 rounded-2xl">
          <MessageSquare className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">
            Reviews & Feedback
          </h1>
          <p className="text-sm text-text-muted">
            Moderate and analyze customer ratings and comments.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-card border border-border text-text-secondary text-sm font-bold rounded-xl hover:bg-muted transition-all cursor-pointer">
          <Download className="h-4 w-4" />
          Export Report
        </button>
      </div>
    </div>
  );
}

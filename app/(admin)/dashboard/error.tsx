"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[70vh] w-full flex-col items-center justify-center gap-6 text-center">
      <div className="space-y-2">
        <div className="mx-auto w-fit p-4 bg-error/10 rounded-full">
          <AlertCircle className="h-10 w-10 text-error" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-text-primary">
          Something went wrong!
        </h2>
        <p className="text-text-muted max-w-[400px]">
          An error occurred while loading this section of the dashboard. Please
          try again or contact support.
        </p>
      </div>
      <button
        onClick={() => reset()}
        className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20 cursor-pointer border-none"
      >
        <RefreshCcw className="h-4 w-4" />
        Try again
      </button>
    </div>
  );
}

import Link from "next/link";
import { FileQuestion, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex h-[70vh] w-full flex-col items-center justify-center gap-6 text-center">
      <div className="space-y-2">
        <div className="mx-auto w-fit p-4 bg-muted rounded-full">
          <FileQuestion className="h-10 w-10 text-text-muted" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-text-primary">
          Page Not Found
        </h2>
        <p className="text-text-muted max-w-[400px]">
          The page you are looking for does not exist or has been moved.
        </p>
      </div>
      <Link
        href="/dashboard"
        className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20 border-none no-underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Link>
    </div>
  );
}

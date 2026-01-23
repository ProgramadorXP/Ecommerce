import Link from "next/link";
import { ShoppingBag, Search, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4 text-center">
      {/* Visual Element */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150" />
        <div className="relative flex items-center justify-center w-32 h-32 md:w-48 md:h-48 bg-card border border-border rounded-3xl shadow-2xl overflow-hidden group">
          <span className="text-6xl md:text-8xl font-black text-primary select-none">
            404
          </span>
          <div className="absolute top-2 right-2">
            <Search className="h-6 w-6 text-text-muted opacity-20" />
          </div>
        </div>
      </div>

      {/* Text Info */}
      <div className="max-w-md space-y-4">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-text-primary">
          Lost in the Store?
        </h1>
        <p className="text-text-muted font-medium text-lg leading-relaxed">
          The page you&apos;re looking for has been moved or doesn&apos;t exist.
          Don&apos;t worry, we have plenty of other things to show you.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
        <Link
          href="/"
          className="flex items-center gap-2 px-8 py-4 bg-primary text-white text-sm font-black rounded-2xl hover:opacity-90 transition-all shadow-xl shadow-primary/20 border-none group"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 px-8 py-4 bg-card border border-border text-text-primary text-sm font-black rounded-2xl hover:bg-muted transition-all shadow-sm group"
        >
          <ShoppingBag className="h-4 w-4" />
          Browse Products
        </Link>
      </div>

      {/* Helper Links */}
      <div className="mt-12 pt-8 border-t border-border w-full max-w-sm">
        <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">
          Need help?
        </p>
        <div className="flex justify-center gap-6">
          <Link
            href="#"
            className="text-xs font-bold text-primary hover:underline"
          >
            Support
          </Link>
          <Link
            href="#"
            className="text-xs font-bold text-primary hover:underline"
          >
            Sitemap
          </Link>
          <Link
            href="#"
            className="text-xs font-bold text-primary hover:underline"
          >
            Track Order
          </Link>
        </div>
      </div>
    </div>
  );
}

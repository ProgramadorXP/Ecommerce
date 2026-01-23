import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <Link className="flex items-center justify-center gap-2" href="/">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <ShoppingBag className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-black tracking-tighter text-text-primary">
            VENDIX
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-bold text-text-muted hover:text-primary transition-colors"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border py-6 md:px-6 px-4 bg-card">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted font-medium">
            © 2026 Vendix E-commerce. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              className="text-xs text-text-muted hover:text-primary font-bold"
              href="#"
            >
              Terms
            </Link>
            <Link
              className="text-xs text-text-muted hover:text-primary font-bold"
              href="#"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

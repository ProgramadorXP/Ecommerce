import Link from "next/link";
import ShopHeader from "@/components/layout/shop/ShopHeader";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ShopHeader />

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

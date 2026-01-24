"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingBag, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Logo from "@/components/common/Logo";
import SearchInput from "@/components/common/SearchInput";
import IconButton from "@/components/common/IconButton";
import { cn } from "@/lib/utils";

export default function ShopHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        {/* Main Header Row */}
        <div
          className={cn(
            "flex items-center gap-4 transition-all duration-300",
            isScrolled ? "h-16" : "h-20",
          )}
        >
          {/* Logo */}
          <Link href="/" className="inline-block no-underline shrink-0">
            <Logo
              className={cn(
                "transition-all duration-300 scale-90 sm:scale-100",
                !isScrolled && "[&_h1]:text-black dark:[&_h1]:text-white",
              )}
            />
          </Link>

          {/* Search Bar - Desktop Only */}
          <div className="hidden lg:block flex-1 max-w-2xl mx-auto">
            <SearchInput
              placeholder="Search for products, brands and more..."
              className={cn(
                "transition-all duration-300",
                !isScrolled &&
                  "[&_input]:bg-black/5 [&_input]:border-black/10 [&_input]:text-black [&_input]:placeholder:text-black/50 [&_svg]:text-black/50 dark:[&_input]:bg-white/10 dark:[&_input]:border-white/20 dark:[&_input]:text-white dark:[&_input]:placeholder:text-white/50 dark:[&_svg]:text-white/50",
              )}
            />
          </div>

          <div className="flex items-center gap-1 sm:gap-4 md:gap-6 ml-auto lg:ml-0">
            {/* Dark Mode Toggle - Visible on all screens */}
            <IconButton
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className={cn(
                "transition-colors duration-300 border-none",
                isScrolled
                  ? "text-text-primary hover:bg-muted"
                  : "text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10",
              )}
              title="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </IconButton>

            {/* Desktop Auth Links */}
            <div className="hidden lg:flex items-center gap-6 pr-4 border-r border-border/20 mr-2">
              <Link
                className={cn(
                  "text-sm font-bold transition-all no-underline",
                  isScrolled
                    ? "text-text-muted hover:text-primary"
                    : "text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white",
                )}
                href="/login"
              >
                Login
              </Link>
              <Link
                className={cn(
                  "px-5 py-2.5 text-sm font-black rounded-xl transition-all shadow-lg no-underline",
                  isScrolled
                    ? "bg-primary text-white shadow-primary/20 hover:opacity-90"
                    : "bg-[#5A6EFF] text-white shadow-black/10 hover:bg-opacity-90 hover:scale-105 dark:bg-white dark:text-primary",
                )}
                href="/register"
              >
                Create Account
              </Link>
            </div>

            {/* Cart Icon - Visible on all screens */}
            <Link
              href="/products"
              className={cn(
                "p-2 relative transition-colors rounded-lg no-underline",
                isScrolled
                  ? "text-text-primary hover:bg-muted"
                  : "text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10",
              )}
            >
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute top-1 right-1 bg-[#5A6EFF] text-white text-[8px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center border border-black/10 shadow-sm">
                0
              </span>
            </Link>

            {/* Mobile Menu Icon (Hamburger) */}
            <IconButton
              onClick={() => setIsMenuOpen(true)}
              className={cn(
                "border-none lg:hidden",
                isScrolled ? "text-text-primary" : "text-black dark:text-white",
              )}
            >
              <Menu className="h-6 w-6" />
            </IconButton>
          </div>
        </div>

        {/* Desktop Bottom Row: Nav Links */}
        {!isScrolled && (
          <div className="hidden lg:flex items-center justify-between pb-4 animate-in fade-in slide-in-from-top-2 duration-500">
            <nav className="flex items-center gap-8">
              {["Categories", "Flash Deals", "Sell Now", "Help"].map((item) => (
                <Link
                  key={item}
                  className="text-sm font-bold text-black/70 hover:text-black dark:text-white/80 dark:hover:text-white transition-colors no-underline"
                  href="/products"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <nav className="flex items-center gap-8">
              {["Orders", "Favorites"].map((item) => (
                <Link
                  key={item}
                  className="text-sm font-bold text-black/70 hover:text-black dark:text-white/80 dark:hover:text-white transition-colors no-underline"
                  href="/products"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={cn(
          "fixed inset-0 z-60 bg-background/80 backdrop-blur-sm lg:hidden transition-all duration-300",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsMenuOpen(false)}
      >
        <aside
          className={cn(
            "fixed inset-y-0 right-0 w-[320px] bg-card border-l border-border p-6 shadow-2xl transition-transform duration-300",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <Logo />
            <IconButton
              onClick={() => setIsMenuOpen(false)}
              className="border-none"
            >
              <X className="h-5 w-5" />
            </IconButton>
          </div>

          <div className="space-y-2">
            {/* Search Input - Mobile Only in Sidebar */}
            <SearchInput
              placeholder="Find products..."
              className="[&_input]:h-12 [&_input]:rounded-2xl"
            />

            {/* Auth Section */}
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/login"
                className="flex items-center justify-center h-12 rounded-xl bg-muted text-sm font-bold text-text-primary no-underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="flex items-center justify-center h-12 rounded-xl bg-[#5A6EFF] text-sm font-black text-white no-underline shadow-lg shadow-[#5A6EFF]/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Now
              </Link>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-text-muted uppercase tracking-widest pl-1">
                Store
              </span>
              <nav className="grid grid-cols-1 gap-1">
                {[
                  "Categories",
                  "Flash Deals",
                  "Sell Now",
                  "Help",
                  "Orders",
                  "Favorites",
                ].map((item) => (
                  <Link
                    key={item}
                    href="/products"
                    className="flex items-center h-12 px-4 rounded-xl text-sm font-bold text-text-muted hover:text-primary hover:bg-primary/5 transition-all no-underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}

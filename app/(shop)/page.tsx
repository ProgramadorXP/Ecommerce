import Link from "next/link";
import { ArrowRight, Zap, Shield, Star } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                The Future of E-commerce
              </div>
              <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-text-primary leading-[1.1]">
                Manage your store with <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
                  Unmatched Precision
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-medium">
                A high-performance, premium dashboard designed for modern
                e-commerce businesses. Scale faster, manage easier, and sell
                more.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 py-6">
              <Link
                href="/dashboard"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-sm font-black text-white shadow-xl shadow-primary/20 transition-all hover:opacity-90 hover:scale-105"
              >
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <button className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-card px-8 text-sm font-black text-text-primary shadow-sm transition-all hover:bg-muted">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Lightning Fast</h3>
              <p className="text-text-muted">
                Built with Next.js 15 and Turbopack for near-instant load times
                and high performance.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-secondary/10 rounded-2xl">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">Secure by Design</h3>
              <p className="text-text-muted">
                Advanced security protocols and role-based access control to
                protect your store data.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-vendix-accent/10 rounded-2xl">
                <Star className="h-8 w-8 text-vendix-accent" />
              </div>
              <h3 className="text-xl font-bold">Premium UI</h3>
              <p className="text-text-muted">
                A beautiful, responsive interface designed with the latest UI/UX
                trends in mind.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

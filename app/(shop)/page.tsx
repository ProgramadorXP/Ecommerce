import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Star,
  Shield,
  Smartphone,
  Laptop,
  Shirt,
  Dumbbell,
  Gift,
  Truck,
  CreditCard,
  Headphones,
  LucideIcon,
} from "lucide-react";
import ProductGrid from "@/components/shop/ProductGrid";
import HeroSlider from "@/components/shop/HeroSlider";
import { MOCK_PRODUCTS } from "@/data/dashboard/products";

export default function Home() {
  const deals = MOCK_PRODUCTS.filter((p) => p.discount > 0).slice(0, 4);
  const featured = MOCK_PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-16 pb-20">
      <HeroSlider />

      {/* Trust Badges */}
      <section className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-border">
          <TrustBadge
            icon={Truck}
            title="Free Shipping"
            desc="On orders over $99"
          />
          <TrustBadge
            icon={Shield}
            title="Secure Payment"
            desc="100% certified protection"
          />
          <TrustBadge
            icon={CreditCard}
            title="Flexible Payments"
            desc="Up to 12 interest-free"
          />
          <TrustBadge
            icon={Headphones}
            title="Expert Support"
            desc="Available 24/7 for you"
          />
        </div>
      </section>

      {/* Daily Deals Section */}
      <section className="container mx-auto px-4 space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-text-primary flex items-center gap-2">
              <Zap className="h-8 w-8 text-primary fill-primary" />
              Flash Deals
            </h2>
            <p className="text-text-muted text-sm font-medium italic">
              Handpicked discounts just for you
            </p>
          </div>
          <Link
            href="/products"
            className="text-primary text-sm font-bold hover:underline flex items-center gap-1 no-underline"
          >
            View all deals <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ProductGrid products={deals} />
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text-primary">
              Shop by Category
            </h2>
            <p className="text-text-muted text-lg font-medium max-w-xl mx-auto italic">
              Explore our wide range of premium collections
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            <CategoryCard icon={Smartphone} name="Tech" count="240+" />
            <CategoryCard icon={Shirt} name="Fashion" count="1.2k+" />
            <CategoryCard icon={Laptop} name="Work" count="450+" />
            <CategoryCard icon={Dumbbell} name="Sport" count="800+" />
            <CategoryCard icon={Gift} name="Offers" count="150+" />
            <CategoryCard icon={Star} name="Exclusive" count="60+" />
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="container mx-auto px-4 space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-text-primary">
              Featured Products
            </h2>
            <p className="text-text-muted text-sm font-medium italic">
              Our most popular items this month
            </p>
          </div>
          <Link
            href="/products"
            className="text-primary text-sm font-bold hover:underline flex items-center gap-1 no-underline"
          >
            Browse all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      {/* Newsletter / CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-card border border-border rounded-4xl p-10 md:p-24 flex flex-col items-center text-center space-y-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Star className="h-64 w-64 text-primary" />
          </div>
          <div className="space-y-4 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-text-primary max-w-2xl leading-none">
              Join the future of <br />
              <span className="text-primary">E-commerce excellence.</span>
            </h2>
            <p className="text-text-muted text-xl font-medium max-w-lg mx-auto">
              Create an account today to get early access to sales and a faster
              checkout experience.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center relative z-10 pt-4">
            <Link
              href="/register"
              className="inline-flex h-16 items-center justify-center rounded-2xl bg-primary px-12 text-base font-black text-white shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 no-underline"
            >
              Get Started for Free
            </Link>
            <Link
              href="/login"
              className="inline-flex h-16 items-center justify-center rounded-2xl border border-border bg-card px-12 text-base font-black text-text-primary hover:bg-muted transition-all active:scale-95 no-underline"
            >
              Sign In to Your Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function TrustBadge({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
      <div className="p-4 bg-primary/5 rounded-2xl">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <div className="space-y-0.5">
        <h4 className="text-base font-black text-text-primary uppercase tracking-tight">
          {title}
        </h4>
        <p className="text-xs text-text-muted font-bold tracking-tight opacity-70">
          {desc}
        </p>
      </div>
    </div>
  );
}

function CategoryCard({
  icon: Icon,
  name,
  count,
}: {
  icon: LucideIcon;
  name: string;
  count: string;
}) {
  return (
    <Link
      href="/products"
      className="bg-card border border-border p-8 rounded-4xl flex flex-col items-center text-center gap-5 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 group no-underline"
    >
      <div
        className={`p-5 rounded-2xl bg-muted group-hover:bg-primary transition-colors`}
      >
        <Icon
          className={`h-10 w-10 text-primary group-hover:text-white transition-colors`}
        />
      </div>
      <div className="space-y-1">
        <h4 className="text-lg font-black text-text-primary tracking-tight">
          {name}
        </h4>
        <p className="text-xs text-text-muted font-bold uppercase tracking-widest">
          {count} Items
        </p>
      </div>
    </Link>
  );
}

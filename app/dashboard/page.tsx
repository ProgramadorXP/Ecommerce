import { ArrowUpRight, Calendar } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import OrdersTable from "@/components/dashboard/OrdersTable";
import RevenueChart from "@/components/dashboard/RevenueChart";
import TopProducts from "@/components/dashboard/TopProducts";
import RecentReviews from "@/components/dashboard/RecentReviews";
import DiscountStatus from "@/components/dashboard/DiscountStatus";

import { DASHBOARD_STATS } from "@/data/dashboard/overview";

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Welcome Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">
            Dashboard Overview
          </h1>
          <p className="text-xs sm:text-sm text-text-muted">
            Welcome back! Here&apos;s what&apos;s happening with your store
            today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-xl text-xs font-medium text-text-secondary">
            <Calendar className="h-3.5 w-3.5" />
            Last 30 Days
          </div>
          <button className="flex-1 sm:flex-none px-4 py-2 bg-primary text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer border-none">
            Export Report
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {DASHBOARD_STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start">
        {/* Left Column: Chart & Table */}
        <div className="lg:col-span-2 space-y-6">
          <RevenueChart />
          <OrdersTable />
        </div>

        {/* Right Column: Key Widgets */}
        <div className="space-y-6">
          <TopProducts />
          <DiscountStatus />
          <RecentReviews />

          {/* Upgrade Banner */}
          <div className="p-6 bg-primary rounded-2xl text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">Upgrade to Pro</h3>
              <p className="text-xs text-white/80 mb-4 leading-relaxed">
                Get advanced analytics, custom reports and unlimited products
                for your store.
              </p>
              <button className="px-4 py-2 bg-white text-primary text-xs font-bold rounded-lg hover:bg-opacity-90 transition-all border-none cursor-pointer">
                Learn More
              </button>
            </div>
            <div className="absolute -bottom-4 -right-4 h-32 w-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute -top-4 -left-4 h-24 w-24 bg-white/5 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

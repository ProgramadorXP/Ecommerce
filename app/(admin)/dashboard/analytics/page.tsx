"use client";

import { useState } from "react";
import StatCard from "@/components/dashboard/StatCard";
import { SalesChart } from "@/components/dashboard/analytics/SalesChart";
import { TopProducts } from "@/components/dashboard/analytics/TopProducts";
import { RecentOrders } from "@/components/dashboard/analytics/RecentOrders";
import { CustomerInsights } from "@/components/dashboard/analytics/CustomerInsights";
import { CategoryDistribution } from "@/components/dashboard/analytics/CategoryDistribution";
import AnalyticsHeader from "@/components/dashboard/analytics/AnalyticsHeader";
import AnalyticsFilters from "@/components/dashboard/analytics/AnalyticsFilters";
import { AnalyticsPeriod } from "@/components/dashboard/analytics/types";

export default function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<AnalyticsPeriod>("30d");

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <AnalyticsHeader />

      <AnalyticsFilters
        selectedPeriod={selectedPeriod}
        onPeriodChange={setSelectedPeriod}
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <StatCard
          label="Total Revenue"
          value="$42,500.00"
          change="+12.5%"
          trend="up"
          iconName="revenue"
          color="text-primary"
        />
        <StatCard
          label="Total Orders"
          value="1,234"
          change="+8.2%"
          trend="up"
          iconName="orders"
          color="text-success"
        />
        <StatCard
          label="Total Products"
          value="342"
          change="+5.4%"
          trend="up"
          iconName="products"
          color="text-warning"
        />
        <StatCard
          label="Total Customers"
          value="856"
          change="+15.3%"
          trend="up"
          iconName="customers"
          color="text-vendix-accent"
        />
      </div>

      {/* Master Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Main Data Column (2/3) */}
        <div className="lg:col-span-2 space-y-6">
          <SalesChart />
          <RecentOrders />
        </div>

        {/* Side Insights Column (1/3) */}
        <div className="space-y-6">
          <CustomerInsights />
          <CategoryDistribution />
        </div>

        {/* Bottom Section (Full Width) */}
        <div className="lg:col-span-3">
          <TopProducts />
        </div>
      </div>
    </div>
  );
}

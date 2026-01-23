"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { TrendingUp, Calendar } from "lucide-react";
import { SALES_DATA } from "@/data/dashboard/analytics";

export function SalesChart() {
  return (
    <Card className="border-border rounded-2xl bg-card">
      <CardHeader className="px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="text-xl font-bold text-text-primary">
              Sales Overview
            </CardTitle>
            <CardDescription className="text-text-muted">
              Monthly sales and order trends
            </CardDescription>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-muted bg-muted/50 px-3 py-1.5 rounded-lg border border-border/50">
            <Calendar className="h-4 w-4" />
            <span>Last 7 months</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-4 sm:px-6">
        <div className="h-80">
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={SALES_DATA}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
                vertical={false}
                opacity={0.5}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "var(--color-muted-foreground)" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "var(--color-muted-foreground)" }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
                itemStyle={{ fontSize: "12px", fontWeight: "bold" }}
                labelStyle={{
                  fontSize: "12px",
                  color: "hsl(var(--text-muted))",
                  fontWeight: "bold",
                  marginBottom: "4px",
                }}
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="hsl(221, 83%, 53%)"
                strokeWidth={4}
                dot={{
                  fill: "hsl(221, 83%, 53%)",
                  r: 4,
                  strokeWidth: 2,
                  stroke: "white",
                }}
                activeDot={{ r: 6, strokeWidth: 0 }}
                name="Sales ($)"
              />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="hsl(142, 71%, 45%)"
                strokeWidth={4}
                dot={{
                  fill: "hsl(142, 71%, 45%)",
                  r: 4,
                  strokeWidth: 2,
                  stroke: "white",
                }}
                activeDot={{ r: 6, strokeWidth: 0 }}
                name="Orders"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-center gap-8 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[hsl(221,83%,53%)] shadow-lg shadow-blue-500/20"></div>
            <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
              Sales ($)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[hsl(142,71%,45%)] shadow-lg shadow-green-500/20"></div>
            <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
              Orders
            </span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
          <div className="flex items-end gap-3">
            <div>
              <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">
                Total Revenue
              </p>
              <p className="text-3xl font-black text-text-primary tracking-tight">
                $35,500
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-success bg-success/10 px-2 py-1 rounded-lg border border-success/20 mb-1">
              <TrendingUp className="h-3.5 w-3.5" />
              <span className="text-xs font-black">+18.5%</span>
            </div>
          </div>
          <button className="text-xs font-bold text-primary hover:underline cursor-pointer">
            View Details
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

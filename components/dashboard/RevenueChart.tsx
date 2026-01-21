"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Jan", total: 1500 },
  { name: "Feb", total: 2300 },
  { name: "Mar", total: 3200 },
  { name: "Apr", total: 2800 },
  { name: "May", total: 4500 },
  { name: "Jun", total: 3800 },
  { name: "Jul", total: 5200 },
];

export default function RevenueChart() {
  return (
    <Card className="w-full bg-card border-border rounded-2xl flex flex-col overflow-hidden shadow-sm">
      <CardHeader className="px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between mb-0 shrink-0 gap-3 space-y-0">
        <div>
          <CardTitle className="text-base sm:text-lg font-bold text-text-primary">
            Revenue Overview
          </CardTitle>
          <p className="text-[10px] sm:text-xs text-text-muted text-balance mt-0.5 sm:mt-1">
            Monthly revenue performance for the current year.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 sm:py-1 bg-success/10 rounded-md w-fit">
            <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-success" />
            <span className="text-[9px] sm:text-[10px] font-bold text-success uppercase">
              Growth +12%
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 w-full">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-primary)"
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-primary)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="var(--color-border)"
              opacity={0.5}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "var(--color-muted-foreground)" }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "var(--color-muted-foreground)" }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "12px",
                fontSize: "12px",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
              }}
              itemStyle={{ color: "var(--color-primary)", fontWeight: "bold" }}
            />
            <Area
              type="monotone"
              dataKey="total"
              stroke="var(--color-primary)"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorTotal)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

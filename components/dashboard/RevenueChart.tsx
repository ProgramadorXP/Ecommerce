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
    <Card className="bg-card border-border rounded-2xl flex flex-col shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between p-6 shrink-0">
        <div>
          <CardTitle className="text-lg font-bold text-text-primary">
            Revenue Overview
          </CardTitle>
          <p className="text-xs text-text-muted text-balance mt-1">
            Monthly revenue performance for the current year.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-1 bg-success/10 rounded-md">
            <div className="h-1.5 w-1.5 rounded-full bg-success" />
            <span className="text-[10px] font-bold text-success uppercase">
              Growth +12%
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 pt-0 flex-1 w-full">
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="rgb(var(--primary))"
                    stopOpacity={0.5}
                  />
                  <stop
                    offset="95%"
                    stopColor="rgb(var(--primary))"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="rgb(var(--border))"
                opacity={0.5}
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "rgb(var(--muted-foreground))" }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "rgb(var(--muted-foreground))" }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgb(var(--card))",
                  border: "1px solid rgb(var(--border))",
                  borderRadius: "12px",
                  fontSize: "12px",
                  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                }}
                itemStyle={{
                  color: "rgb(var(--primary))",
                  fontWeight: "bold",
                }}
              />
              <Area
                type="monotone"
                dataKey="total"
                stroke="rgb(var(--primary))"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorTotal)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

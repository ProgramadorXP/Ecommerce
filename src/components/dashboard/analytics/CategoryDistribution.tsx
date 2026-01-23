"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Layers } from "lucide-react";
import { CATEGORY_DATA } from "@/data/dashboard/analytics";

export function CategoryDistribution() {
  return (
    <Card className="border-border rounded-2xl bg-card h-full">
      <CardHeader className="px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="text-xl font-bold text-text-primary">
              Categories
            </CardTitle>
            <CardDescription className="text-text-muted">
              Sales by category
            </CardDescription>
          </div>
          <div className="p-2 bg-muted rounded-xl border border-border">
            <Layers className="h-5 w-5 text-text-muted" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-4 sm:px-6">
        <div className="h-64">
          <ResponsiveContainer width="100%" height={256}>
            <BarChart
              data={CATEGORY_DATA}
              layout="vertical"
              margin={{ left: -20, right: 20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
                horizontal={true}
                vertical={false}
                opacity={0.3}
              />
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="category"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                width={100}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
                cursor={{ fill: "hsl(var(--primary) / 0.05)" }}
              />
              <Bar dataKey="sales" radius={[0, 8, 8, 0]} maxBarSize={24}>
                {CATEGORY_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-8 space-y-3">
          {CATEGORY_DATA.map((item) => (
            <div
              key={item.category}
              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-muted/50 transition-all border border-transparent hover:border-border/50 group"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-3 H-3 rounded-full shadow-lg"
                  style={{
                    backgroundColor: item.color,
                    boxShadow: `0 0 10px ${item.color}33`,
                  }}
                ></div>
                <span className="text-sm font-medium text-text-muted group-hover:text-text-primary transition-colors">
                  {item.category}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-black text-text-primary">
                  {item.sales}
                </span>
                <span className="text-[10px] font-bold text-success bg-success/10 px-1.5 py-0.5 rounded-md">
                  {item.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

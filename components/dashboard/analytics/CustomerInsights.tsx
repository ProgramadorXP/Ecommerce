"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Users, TrendingUp } from "lucide-react";
import { CUSTOMER_INSIGHTS_DATA } from "@/data/dashboard/analytics";

export function CustomerInsights() {
  return (
    <Card className="border-border rounded-2xl bg-card h-full">
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="text-xl font-bold text-text-primary">
          Customer Insights
        </CardTitle>
        <CardDescription className="text-text-muted">
          Customer distribution overview
        </CardDescription>
      </CardHeader>

      <CardContent className="px-4 sm:px-6">
        <div className="h-64 relative">
          <ResponsiveContainer width="100%" height={256}>
            <PieChart>
              <Pie
                data={CUSTOMER_INSIGHTS_DATA}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={85}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
              >
                {CUSTOMER_INSIGHTS_DATA.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-3xl font-black text-text-primary">856</span>
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
              Total
            </span>
          </div>
        </div>

        <div className="space-y-3 mt-8">
          {CUSTOMER_INSIGHTS_DATA.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-muted/50 transition-all border border-transparent hover:border-border/50 group"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: item.color,
                    boxShadow: `0 0 10px ${item.color}44`,
                  }}
                ></div>
                <span className="text-sm font-medium text-text-muted group-hover:text-text-primary transition-colors">
                  {item.name}
                </span>
              </div>
              <span className="text-sm font-black text-text-primary">
                {item.value}%
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 bg-linear-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 opacity-10">
            <Users className="h-24 w-24 text-primary" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-primary/20 rounded-lg">
                <Users className="h-4 w-4 text-primary" />
              </div>
              <p className="text-xs font-bold text-text-primary uppercase tracking-wider">
                Growth Rate
              </p>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-3xl font-black text-primary tracking-tight">
                +15.3%
              </p>
              <div className="flex items-center gap-1 text-success mb-1.5">
                <TrendingUp className="h-3 w-3" />
                <span className="text-[10px] font-bold">This month</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

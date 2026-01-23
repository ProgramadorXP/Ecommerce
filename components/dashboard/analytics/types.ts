// Analytics Types based on Prisma schema
export interface RevenueData {
  month: string;
  sales: number;
  orders: number;
  [key: string]: string | number;
}

export interface CategoryData {
  category: string;
  sales: number;
  color: string;
  trend: string;
  [key: string]: string | number;
}

export interface CustomerData {
  name: string;
  value: number;
  color: string;
  [key: string]: string | number;
}

export interface TopProduct {
  id: number;
  name: string;
  category: string;
  sales: number;
  revenue: string;
  rating: number;
  trend: string;
  image: string;
}

export interface RecentOrder {
  id: string;
  customer: string;
  email: string;
  date: string;
  amount: string;
  status: string;
  items: number;
}

export type AnalyticsPeriod = "7d" | "30d" | "90d" | "1y";

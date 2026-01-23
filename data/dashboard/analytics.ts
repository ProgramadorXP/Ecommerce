import {
  RevenueData,
  CategoryData,
  CustomerData,
  TopProduct,
  RecentOrder,
} from "@/components/dashboard/analytics/types";

export const SALES_DATA: RevenueData[] = [
  { month: "Jan", sales: 4000, orders: 240 },
  { month: "Feb", sales: 3000, orders: 198 },
  { month: "Mar", sales: 5000, orders: 320 },
  { month: "Apr", sales: 4500, orders: 280 },
  { month: "May", sales: 6000, orders: 390 },
  { month: "Jun", sales: 5500, orders: 350 },
  { month: "Jul", sales: 7000, orders: 420 },
];

export const CATEGORY_DATA: CategoryData[] = [
  {
    category: "Footwear",
    sales: 234,
    color: "hsl(221, 83%, 53%)", // Vibrant Blue
    trend: "+12.5%",
  },
  {
    category: "Apparel",
    sales: 189,
    color: "hsl(142, 71%, 45%)", // Vibrant Green
    trend: "+8.2%",
  },
  {
    category: "Athletic",
    sales: 156,
    color: "hsl(48, 96%, 53%)", // Vibrant Yellow/Gold
    trend: "+5.1%",
  },
  {
    category: "Accessories",
    sales: 142,
    color: "hsl(262, 83%, 58%)", // Vibrant Purple
    trend: "+3.9%",
  },
  {
    category: "Luxury",
    sales: 98,
    color: "hsl(316, 70%, 50%)", // Vibrant Pink/Rose
    trend: "+2.4%",
  },
];

export const CUSTOMER_INSIGHTS_DATA: CustomerData[] = [
  { name: "New Customers", value: 45, color: "hsl(221, 83%, 53%)" },
  { name: "Returning", value: 35, color: "hsl(142, 71%, 45%)" },
  { name: "Inactive", value: 20, color: "hsl(48, 96%, 53%)" },
];

export const TOP_PRODUCTS_DATA: TopProduct[] = [
  {
    id: 1,
    name: "Vendix Pro Sneakers",
    category: "Footwear",
    sales: 234,
    revenue: "$37,446",
    rating: 4.8,
    trend: "+12%",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Classic White T-Shirt",
    category: "Apparel",
    sales: 189,
    revenue: "$5,670",
    rating: 4.6,
    trend: "+8%",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Premium Backpack",
    category: "Accessories",
    sales: 156,
    revenue: "$12,480",
    rating: 4.9,
    trend: "+15%",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Sport Watch",
    category: "Accessories",
    sales: 142,
    revenue: "$21,300",
    rating: 4.7,
    trend: "+5%",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop",
  },
];

export const RECENT_ORDERS_DATA: RecentOrder[] = [
  {
    id: "#ORD-1234",
    customer: "John Doe",
    email: "john@example.com",
    date: "Jan 15, 2026",
    amount: "$159.99",
    status: "delivered",
    items: 3,
  },
  {
    id: "#ORD-1233",
    customer: "Jane Smith",
    email: "jane@example.com",
    date: "Jan 15, 2026",
    amount: "$89.50",
    status: "shipped",
    items: 2,
  },
  {
    id: "#ORD-1232",
    customer: "Mike Johnson",
    email: "mike@example.com",
    date: "Jan 14, 2026",
    amount: "$234.00",
    status: "paid",
    items: 5,
  },
  {
    id: "#ORD-1231",
    customer: "Sarah Williams",
    email: "sarah@example.com",
    date: "Jan 14, 2026",
    amount: "$45.99",
    status: "pending",
    items: 1,
  },
  {
    id: "#ORD-1230",
    customer: "Robert Brown",
    email: "robert@example.com",
    date: "Jan 13, 2026",
    amount: "$120.00",
    status: "delivered",
    items: 2,
  },
  {
    id: "#ORD-1229",
    customer: "Emily Davis",
    email: "emily@example.com",
    date: "Jan 13, 2026",
    amount: "$320.50",
    status: "shipped",
    items: 4,
  },
  {
    id: "#ORD-1228",
    customer: "Chris Wilson",
    email: "chris@example.com",
    date: "Jan 12, 2026",
    amount: "$65.00",
    status: "paid",
    items: 1,
  },
  {
    id: "#ORD-1227",
    customer: "Emma Taylor",
    email: "emma@example.com",
    date: "Jan 12, 2026",
    amount: "$210.00",
    status: "pending",
    items: 3,
  },
];

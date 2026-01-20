import { IconType } from "@/components/dashboard/StatCard";

export const DASHBOARD_STATS: {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  iconName: IconType;
  color: string;
}[] = [
  {
    label: "Total Revenue",
    value: "$12,450.00",
    change: "+12.5%",
    trend: "up",
    iconName: "revenue",
    color: "text-success",
  },
  {
    label: "Total Orders",
    value: "156",
    change: "+8.2%",
    trend: "up",
    iconName: "orders",
    color: "text-primary",
  },
  {
    label: "Active Products",
    value: "42",
    change: "-2.4%",
    trend: "down",
    iconName: "products",
    color: "text-secondary",
  },
  {
    label: "New Customers",
    value: "1,240",
    change: "+18.1%",
    trend: "up",
    iconName: "customers",
    color: "text-vendix-accent",
  },
];

export const RECENT_ORDERS = [
  {
    id: "#ORD-1234",
    customer: "John Doe",
    email: "john@example.com",
    amount: "$240.00",
    status: "paid",
    date: "2 mins ago",
  },
  {
    id: "#ORD-1235",
    customer: "Sarah Smith",
    email: "sarah@smith.com",
    amount: "$1,200.00",
    status: "pending",
    date: "1 hour ago",
  },
  {
    id: "#ORD-1236",
    customer: "Michael Brown",
    email: "m.brown@dev.com",
    amount: "$89.99",
    status: "shipped",
    date: "3 hours ago",
  },
  {
    id: "#ORD-1237",
    customer: "Emma Watson",
    email: "emma@star.com",
    amount: "$450.00",
    status: "delivered",
    date: "5 hours ago",
  },
  {
    id: "#ORD-1238",
    customer: "Robert Fox",
    email: "robert@fox.com",
    amount: "$120.00",
    status: "cancelled",
    date: "Yesterday",
  },
  {
    id: "#ORD-1239",
    customer: "Emma Watson",
    email: "emma@star.com",
    amount: "$450.00",
    status: "delivered",
    date: "5 hours ago",
  },
  {
    id: "#ORD-1240",
    customer: "Emma Watson",
    email: "emma@star.com",
    amount: "$450.00",
    status: "delivered",
    date: "5 hours ago",
  },
  {
    id: "#ORD-1241",
    customer: "Emma Watson",
    email: "emma@star.com",
    amount: "$450.00",
    status: "delivered",
    date: "5 hours ago",
  },
];

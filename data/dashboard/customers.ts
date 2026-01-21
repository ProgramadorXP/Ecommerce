import { Customer } from "@/components/dashboard/customers/types";

export const MOCK_CUSTOMERS: Customer[] = [
  {
    id: 1,
    username: "jdoe",
    email: "john.doe@example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(),
    role: "Customer",
    details: {
      firstName: "John",
      lastName: "Doe",
      phone: "+1 555-0101",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
    },
    stats: {
      totalOrders: 12,
      totalSpent: 1250.5,
      lastOrderDate: new Date(
        Date.now() - 1000 * 60 * 60 * 24 * 2,
      ).toISOString(),
    },
  },
  {
    id: 2,
    username: "asmith",
    email: "alice.smith@example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15).toISOString(),
    role: "Customer",
    details: {
      firstName: "Alice",
      lastName: "Smith",
      phone: "+1 555-0102",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    },
    stats: {
      totalOrders: 5,
      totalSpent: 450.0,
      lastOrderDate: new Date(
        Date.now() - 1000 * 60 * 60 * 24 * 5,
      ).toISOString(),
    },
  },
  {
    id: 3,
    username: "mbrown",
    email: "m.brown@example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    role: "Customer",
    details: {
      firstName: "Michael",
      lastName: "Brown",
      phone: "+1 555-0103",
      image: null,
    },
    stats: {
      totalOrders: 1,
      totalSpent: 89.99,
      lastOrderDate: new Date(
        Date.now() - 1000 * 60 * 60 * 24 * 1,
      ).toISOString(),
    },
  },
  {
    id: 4,
    username: "ewatson",
    email: "emma.watson@example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60).toISOString(),
    role: "VIP",
    details: {
      firstName: "Emma",
      lastName: "Watson",
      phone: "+1 555-0104",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
    },
    stats: {
      totalOrders: 28,
      totalSpent: 4500.0,
      lastOrderDate: new Date(Date.now() - 1000 * 60 * 60 * 10).toISOString(),
    },
  },
  {
    id: 5,
    username: "rfox",
    email: "robert.fox@example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 120).toISOString(),
    role: "Customer",
    details: {
      firstName: "Robert",
      lastName: "Fox",
      phone: "+1 555-0105",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
    },
    stats: {
      totalOrders: 0,
      totalSpent: 0.0,
      lastOrderDate: null,
    },
  },
];

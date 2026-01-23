import { Customer } from "@/components/dashboard/customers/types";

export const MOCK_CUSTOMERS: Customer[] = [
  {
    id: 1,
    username: "jdoe",
    email: "john.doe@example.com",
    createdAt: "2025-12-21T10:00:00.000Z",
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
      lastOrderDate: "2026-01-18T15:00:00.000Z",
    },
  },
  {
    id: 2,
    username: "asmith",
    email: "alice.smith@example.com",
    createdAt: "2026-01-05T10:00:00.000Z",
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
      lastOrderDate: "2026-01-15T12:00:00.000Z",
    },
  },
  {
    id: 3,
    username: "mbrown",
    email: "m.brown@example.com",
    createdAt: "2026-01-18T09:00:00.000Z",
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
      lastOrderDate: "2026-01-19T14:00:00.000Z",
    },
  },
  {
    id: 4,
    username: "ewatson",
    email: "emma.watson@example.com",
    createdAt: "2025-11-21T10:00:00.000Z",
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
      lastOrderDate: "2026-01-20T11:00:00.000Z",
    },
  },
  {
    id: 5,
    username: "rfox",
    email: "robert.fox@example.com",
    createdAt: "2025-09-22T10:00:00.000Z",
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

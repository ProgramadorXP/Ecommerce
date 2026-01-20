import { Order } from "@/components/dashboard/orders/types";

export const MOCK_ORDERS: Order[] = [
  {
    id: 1024,
    userId: 1,
    userName: "John Doe",
    userEmail: "john@example.com",
    totalAmount: 319.98,
    status: "paid",
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
    updatedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    items: [
      {
        id: 1,
        productId: 1,
        productName: "Vendix Pro Sneakers",
        productImage:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
        quantity: 2,
        price: 159.99,
      },
    ],
  },
  {
    id: 1025,
    userId: 2,
    userName: "Sarah Smith",
    userEmail: "sarah@smith.com",
    totalAmount: 45.0,
    status: "pending",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    items: [
      {
        id: 2,
        productId: 2,
        productName: "Classic Leather Belt",
        productImage:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
        quantity: 1,
        price: 45.0,
      },
    ],
  },
  {
    id: 1026,
    userId: 3,
    userName: "Michael Brown",
    userEmail: "m.brown@dev.com",
    totalAmount: 124.99,
    status: "shipped",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    items: [
      {
        id: 3,
        productId: 3,
        productName: "Signature Tee Black",
        productImage:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
        quantity: 1,
        price: 35.0,
      },
      {
        id: 4,
        productId: 4,
        productName: "Urban Explorer Backpack",
        productImage:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
        quantity: 1,
        price: 89.99,
      },
    ],
  },
  {
    id: 1027,
    userId: 4,
    userName: "Emma Watson",
    userEmail: "emma@star.com",
    totalAmount: 299.0,
    status: "delivered",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // Yesterday
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    items: [
      {
        id: 5,
        productId: 5,
        productName: "Limited Edition Watch",
        productImage:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
        quantity: 1,
        price: 299.0,
      },
    ],
  },
  {
    id: 1028,
    userId: 5,
    userName: "Robert Fox",
    userEmail: "robert@fox.com",
    totalAmount: 159.99,
    status: "cancelled",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    items: [
      {
        id: 6,
        productId: 1,
        productName: "Vendix Pro Sneakers",
        productImage:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
        quantity: 1,
        price: 159.99,
      },
    ],
  },
];

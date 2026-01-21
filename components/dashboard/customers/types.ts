export interface Customer {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  role: string;
  details: {
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    image: string | null;
  } | null;
  stats: {
    totalOrders: number;
    totalSpent: number;
    lastOrderDate: string | null;
  };
}

export type CustomerFilterStatus = "all" | "new" | "active" | "inactive";

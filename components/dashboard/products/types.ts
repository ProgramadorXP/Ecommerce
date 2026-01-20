export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  maxStock: number;
  image: string;
  categories: string[];
  sku: string;
  discount: number;
  rating: number;
  reviewsCount: number;
  favoritesCount: number;
  cartCount: number;
  createdAt: string;
}

export type StockStatus = "all" | "low" | "out";

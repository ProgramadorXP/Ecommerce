import { Product } from "@/components/dashboard/products/types";

export const CATEGORIES = [
  "All",
  "Apparel",
  "Footwear",
  "Accessories",
  "Athletic",
  "Travel",
  "Luxury",
  "Essentials",
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Vendix Pro Sneakers",
    description:
      "High performance running shoes with premium cushioning and breathable mesh.",
    price: 159.99,
    stock: 42,
    maxStock: 100,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    categories: ["Footwear", "Athletic"],
    sku: "VNX-SNK-001",
    discount: 15,
    rating: 4.8,
    reviewsCount: 124,
    favoritesCount: 450,
    cartCount: 82,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 2,
    name: "Classic Leather Belt",
    description:
      "Handcrafted genuine leather belt with a brushed nickel buckle.",
    price: 45.0,
    stock: 8,
    maxStock: 50,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
    categories: ["Accessories"],
    sku: "VNX-BLT-002",
    discount: 0,
    rating: 4.5,
    reviewsCount: 56,
    favoritesCount: 120,
    cartCount: 14,
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 3,
    name: "Signature Tee Black",
    description:
      "Premium cotton t-shirt with a modern fit and subtle branding.",
    price: 35.0,
    stock: 0,
    maxStock: 80,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
    categories: ["Apparel", "Essentials"],
    sku: "VNX-TEE-003",
    discount: 10,
    rating: 4.2,
    reviewsCount: 89,
    favoritesCount: 310,
    cartCount: 45,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 4,
    name: "Urban Explorer Backpack",
    description:
      "Water-resistant backpack with multiple compartments for digital nomads.",
    price: 89.0,
    stock: 15,
    maxStock: 60,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
    categories: ["Accessories", "Travel"],
    sku: "VNX-BPK-004",
    discount: 0,
    rating: 4.7,
    reviewsCount: 42,
    favoritesCount: 180,
    cartCount: 22,
    createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 5,
    name: "Limited Edition Watch",
    description:
      "Minimalist timepiece with a sapphire crystal and Swiss movement.",
    price: 299.0,
    stock: 3,
    maxStock: 20,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    categories: ["Accessories", "Luxury"],
    sku: "VNX-WCH-005",
    discount: 5,
    rating: 4.9,
    reviewsCount: 12,
    favoritesCount: 75,
    cartCount: 5,
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

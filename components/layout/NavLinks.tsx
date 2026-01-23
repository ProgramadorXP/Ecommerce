"use client";

import { usePathname } from "next/navigation";
import {
  Home,
  ShoppingCart,
  Box,
  Users,
  ChartLine,
  MessageSquare,
  Layers,
  Settings,
  Tag,
} from "lucide-react";
import NavLinkItem from "@/components/layout/NavLinkItem";

const links = [
  {
    href: "/dashboard",
    icon: Home,
    text: "Dashboard",
  },
  {
    href: "/dashboard/orders",
    icon: ShoppingCart,
    text: "Orders",
  },
  {
    href: "/dashboard/products",
    icon: Box,
    text: "Products",
  },
  {
    href: "/dashboard/customers",
    icon: Users,
    text: "Customers",
  },
  {
    href: "/dashboard/discounts",
    icon: Tag,
    text: "Discounts",
  },
  {
    href: "/dashboard/reviews",
    icon: MessageSquare,
    text: "Reviews",
  },
  {
    href: "/dashboard/categories",
    icon: Layers,
    text: "Categories",
  },
  {
    href: "/dashboard/analytics",
    icon: ChartLine,
    text: "Analytics",
  },
  {
    href: "/dashboard/settings",
    icon: Settings,
    text: "Settings",
  },
];

export default function NavLinks({
  onLinkClick,
}: {
  onLinkClick?: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <NavLinkItem
          key={link.text}
          href={link.href}
          icon={link.icon}
          text={link.text}
          isActive={pathname === link.href}
          onClick={onLinkClick}
        />
      ))}
    </>
  );
}

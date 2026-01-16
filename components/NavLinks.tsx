"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Home,
  ShoppingCart,
  Box,
  Users,
  ChartLine,
  Settings,
} from "lucide-react";

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
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link
            key={link.text}
            href={link.href}
            onClick={onLinkClick}
            className={clsx(
              "flex items-center gap-3 px-8 py-4 border-transparent border-l-4 hover:text-primary",
              {
                "from-primary/20 to-primary/5 bg-linear-to-r border-l-primary text-primary":
                  pathname === link.href,
              }
            )}
          >
            <LinkIcon size={20} />
            <span className="text-sm">{link.text}</span>
          </Link>
        );
      })}
    </>
  );
}

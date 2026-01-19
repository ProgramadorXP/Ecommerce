"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface NavLinkItemProps {
  href: string;
  icon: LucideIcon;
  text: string;
  isActive: boolean;
  onClick?: () => void;
}

export default function NavLinkItem({
  href,
  icon: Icon,
  text,
  isActive,
  onClick,
}: NavLinkItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "flex items-center gap-3 px-8 py-4 border-transparent border-l-4 transition-all duration-200 hover:text-primary group",
        {
          "from-primary/20 to-primary/5 bg-linear-to-r border-l-primary text-primary font-medium":
            isActive,
          "text-text-secondary": !isActive,
        }
      )}
    >
      <Icon
        size={20}
        className={clsx(
          "transition-transform duration-200 group-hover:scale-110",
          {
            "text-primary": isActive,
          }
        )}
      />
      <span className="text-sm tracking-wide">{text}</span>
    </Link>
  );
}

import { LucideIcon } from "lucide-react";
import clsx from "clsx";
import { ReactNode } from "react";

interface IconButtonProps {
  icon?: LucideIcon; // Opcional ahora
  children?: ReactNode; // Para permitir iconos superpuestos
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
  badge?: ReactNode;
  title?: string;
}

export default function IconButton({
  icon: Icon,
  children,
  onClick,
  className,
  iconClassName = "h-5 w-5",
  badge,
  title,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={clsx(
        "relative flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary hover:bg-background transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20",
        className,
      )}
    >
      {Icon && <Icon className={iconClassName} />}
      {children}
      {badge}
    </button>
  );
}

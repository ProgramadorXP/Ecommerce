import { LucideIcon } from "lucide-react";
import { ReactNode, forwardRef, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon;
  iconClassName?: string;
  badge?: ReactNode;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon: Icon,
      children,
      className,
      iconClassName = "h-5 w-5",
      badge,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "relative flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary hover:bg-background transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
          className,
        )}
        {...props}
      >
        {Icon && <Icon className={iconClassName} />}
        {children}
        {badge}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";

export default IconButton;

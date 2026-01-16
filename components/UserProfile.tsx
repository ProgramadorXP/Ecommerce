import clsx from "clsx";

interface UserProfileProps {
  name?: string;
  role?: string;
  initials: string;
  showDetails?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function UserProfile({
  name,
  role,
  initials,
  showDetails = false,
  className,
  size = "md",
}: UserProfileProps) {
  return (
    <div className={clsx("flex items-center gap-3", className)}>
      <div
        className={clsx(
          "rounded-full border border-border bg-surface overflow-hidden hover:border-primary transition-colors cursor-pointer shrink-0",
          {
            "h-8 w-8": size === "sm",
            "h-9 w-9": size === "md",
            "h-10 w-10": size === "lg",
          }
        )}
      >
        <div
          className={clsx(
            "h-full w-full bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center font-medium text-primary",
            {
              "text-[10px]": size === "sm",
              "text-xs": size === "md",
              "text-sm": size === "lg",
            }
          )}
        >
          {initials}
        </div>
      </div>
      {showDetails && (name || role) && (
        <div className="flex flex-col min-w-0">
          {name && (
            <span className="text-sm font-bold text-text-primary truncate">
              {name}
            </span>
          )}
          {role && (
            <span className="text-[10px] font-medium text-text-muted uppercase tracking-wider">
              {role}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

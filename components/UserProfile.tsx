import clsx from "clsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User, Settings, CreditCard } from "lucide-react";

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
  const avatar = (
    <div
      className={clsx(
        "rounded-full border border-border bg-surface overflow-hidden hover:border-primary transition-colors cursor-pointer shrink-0",
        {
          "h-8 w-8": size === "sm",
          "h-9 w-9": size === "md",
          "h-10 w-10": size === "lg",
        },
      )}
    >
      <div
        className={clsx(
          "h-full w-full bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center font-medium text-primary",
          {
            "text-[10px]": size === "sm",
            "text-xs": size === "md",
            "text-sm": size === "lg",
          },
        )}
      >
        {initials}
      </div>
    </div>
  );

  return (
    <div className={clsx("flex items-center gap-3", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{avatar}</DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {name || "John Doe"}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                admin@vendix.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-error focus:text-error">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

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

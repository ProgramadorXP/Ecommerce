import clsx from "clsx";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className, size = "md" }: LogoProps) {
  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <div
        className={clsx(
          "rounded-lg bg-vendix flex items-center justify-center shrink-0",
          {
            "h-7 w-7": size === "sm",
            "h-8 w-8": size === "md",
            "h-9 w-9": size === "lg",
          }
        )}
      >
        <span
          className={clsx("text-white font-bold", {
            "text-base": size === "sm",
            "text-lg": size === "md",
            "text-xl": size === "lg",
          })}
        >
          V
        </span>
      </div>
      <h1
        className={clsx("font-bold tracking-tight text-text-primary", {
          "text-xl": size === "sm",
          "text-2xl": size === "md",
          "text-3xl": size === "lg",
        })}
      >
        Vendix
      </h1>
    </div>
  );
}

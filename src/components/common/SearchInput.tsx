import { Search } from "lucide-react";
import clsx from "clsx";

interface SearchInputProps {
  className?: string;
  placeholder?: string;
}

export default function SearchInput({
  className,
  placeholder = "Search...",
}: SearchInputProps) {
  return (
    <div className={clsx("relative group", className)}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted group-focus-within:text-primary transition-colors" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-10 pl-10 pr-4 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
      />
    </div>
  );
}

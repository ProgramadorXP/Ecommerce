import { Search } from "lucide-react";
import NavLinks from "@/components/NavLinks";
import clsx from "clsx";

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <aside
      className={clsx(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-border transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:block",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {/* Logo & Brand */}
      <div className="flex items-center gap-2 h-16 px-10">
        <div className="h-8 w-8 rounded-lg bg-vendix flex items-center justify-center">
          <span className="text-white font-bold text-lg">V</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-text-primary">
          Vendix
        </h1>
      </div>

      {/* Mobile Search Bar */}
      <div className="px-6 md:hidden">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-10 pl-10 pr-4 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="h-full">
        <ul className="py-2">
          <li>
            <NavLinks onLinkClick={() => setIsOpen(false)} />
          </li>
        </ul>
      </nav>
    </aside>
  );
}

import NavLinks from "@/components/NavLinks";
import Logo from "@/components/Logo";
import SearchInput from "@/components/SearchInput";
import UserProfile from "@/components/UserProfile";
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
        "fixed inset-y-0 left-0 z-50 w-64 bg-background border-r border-border transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:block flex flex-col",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      {/* Logo & Brand */}
      <div className="h-16 px-10 flex items-center shrink-0">
        <Logo size="lg" />
      </div>

      <div className="px-6 md:hidden shrink-0">
        <SearchInput />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <ul>
          <li>
            <NavLinks onLinkClick={() => setIsOpen(false)} />
          </li>
        </ul>
      </nav>

      {/* Mobile User Profile */}
      <div className="p-4 border-t border-border md:hidden shrink-0 bg-background/50 backdrop-blur-sm">
        <UserProfile
          name="John Doe"
          role="Administrator"
          initials="JD"
          showDetails
          size="lg"
          className="px-2 py-1"
        />
      </div>
    </aside>
  );
}

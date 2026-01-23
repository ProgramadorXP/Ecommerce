import NavLinks from "@/components/layout/NavLinks";
import Logo from "@/components/common/Logo";
import UserProfile from "@/components/layout/UserProfile";
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
        "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col h-screen shrink-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      {/* Logo & Brand */}
      <div className="h-16 px-10 flex items-center shrink-0">
        <Logo size="lg" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden pt-2 scroll-smooth min-h-0 custom-scrollbar">
        <ul className="p-0 m-0 list-none">
          <NavLinks onLinkClick={() => setIsOpen(false)} />
        </ul>
        {/* Bottom spacer to ensure last items are fully reachable */}
        <div className="h-10" />
      </nav>

      {/* Mobile User Profile */}
      <div className="p-4 border-t border-border md:hidden shrink-0 bg-card/50 backdrop-blur-sm">
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

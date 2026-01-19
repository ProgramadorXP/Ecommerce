"use client";

import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Logo from "@/components/Logo";
import SearchInput from "@/components/SearchInput";
import IconButton from "@/components/IconButton";
import UserProfile from "@/components/UserProfile";
import NotificationMenu from "@/components/NotificationMenu";

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-border bg-card/80 px-4 backdrop-blur-md md:px-6">
      {/* Left Section */}
      <div className="flex items-center gap-4 flex-1">
        <Logo className="md:hidden" />
        <div className="hidden md:block w-64 lg:w-80">
          <SearchInput />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Dark Mode Toggle (Documentation Style) */}
        <IconButton
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          title="Toggle theme"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </IconButton>

        {/* Notifications */}
        <NotificationMenu />

        {/* Desktop Profile Avatar */}
        <UserProfile initials="JD" className="hidden md:flex" />

        {/* Mobile Menu Toggle */}
        <IconButton
          onClick={onMenuClick}
          icon={Menu}
          className="md:hidden"
          iconClassName="h-6 w-6"
          title="Open Menu"
        />
      </div>
    </header>
  );
}

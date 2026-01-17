"use client";

import { useState } from "react";
import { Bell, Menu, Moon, Sun } from "lucide-react";
import Logo from "@/components/Logo";
import SearchInput from "@/components/SearchInput";
import IconButton from "@/components/IconButton";
import UserProfile from "@/components/UserProfile";

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const [isLight, setIsLight] = useState(true);

  const toggleIcon = () => {
    setIsLight(!isLight);
  };

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-border bg-white px-4 backdrop-blur-md md:px-6">
      {/* Left Section: Mobile Logo & Desktop Search */}
      <div className="flex items-center gap-4 flex-1">
        {/* Mobile Logo & Brand */}
        <Logo className="md:hidden" />

        {/* Desktop Search Bar */}
        <div className="hidden md:block w-64 lg:w-80">
          <SearchInput />
        </div>
      </div>

      {/* Right Section: Actions & Menu */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Dark Mode Toggle */}
        <IconButton
          onClick={toggleIcon}
          icon={isLight ? Sun : Moon}
          title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
        />

        {/* Notifications */}
        <IconButton
          icon={Bell}
          title="Notifications"
          badge={
            <span className="absolute top-2.5 right-2.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-error"></span>
            </span>
          }
        />

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

"use client";

import { useState } from "react";
import { Search, Bell, Menu, Moon, Sun } from "lucide-react";

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
        <div className="flex items-center gap-2 md:hidden">
          <div className="h-8 w-8 rounded-lg bg-vendix flex items-center justify-center">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">
            Vendix
          </h1>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:block w-64 lg:w-80">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-10 pl-10 pr-4 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>
      </div>

      {/* Right Section: Actions & Menu */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleIcon}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary hover:bg-background transition-colors cursor-pointer"
        >
          {isLight ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        {/* Notifications (Mobile & Desktop) */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary hover:bg-background transition-colors cursor-pointer">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2.5 right-2.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-error"></span>
          </span>
        </button>

        {/* Desktop Profile Avatar */}
        <div className="hidden md:flex h-9 w-9 rounded-full border border-border bg-surface overflow-hidden cursor-pointer hover:border-primary transition-colors">
          <div className="h-full w-full bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-xs font-medium text-primary">
            JD
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={onMenuClick}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary hover:bg-background md:hidden cursor-pointer"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}

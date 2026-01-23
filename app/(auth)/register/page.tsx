"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Github,
  Chrome,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register with:", formData);
  };

  return (
    <div className="space-y-8">
      <Link
        href="/"
        className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors font-bold text-sm lg:hidden mb-4 w-fit"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-black tracking-tight text-text-primary">
          Create account
        </h1>
        <p className="text-text-muted font-medium">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary hover:underline font-bold"
          >
            Sign in here
          </Link>
        </p>
      </div>

      {/* Social Logins */}
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-3 px-4 py-3 bg-card border border-border rounded-xl hover:bg-muted transition-all cursor-pointer font-bold text-sm shadow-sm">
          <Chrome className="h-5 w-5 text-[#4285F4]" />
          Google
        </button>
        <button className="flex items-center justify-center gap-3 px-4 py-3 bg-card border border-border rounded-xl hover:bg-muted transition-all cursor-pointer font-bold text-sm shadow-sm">
          <Github className="h-5 w-5" />
          Github
        </button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-4 text-text-muted font-bold tracking-widest">
            Or register with email
          </span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label className="text-xs font-bold text-text-muted uppercase tracking-widest px-1">
            Full Name
          </label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="John Doe"
              className="w-full pl-12 pr-4 py-3.5 bg-muted/20 border border-border rounded-xl text-sm font-semibold focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-text-muted/50"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-text-muted uppercase tracking-widest px-1">
            Email Address
          </label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted group-focus-within:text-primary transition-colors" />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="example@vendix.com"
              className="w-full pl-12 pr-4 py-3.5 bg-muted/20 border border-border rounded-xl text-sm font-semibold focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-text-muted/50"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-text-muted uppercase tracking-widest px-1">
            Password
          </label>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted group-focus-within:text-primary transition-colors" />
            <input
              type={showPassword ? "text" : "password"}
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="••••••••"
              className="w-full pl-12 pr-12 py-3.5 bg-muted/20 border border-border rounded-xl text-sm font-semibold focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-text-muted/50"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors cursor-pointer border-none bg-transparent"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
          <p className="text-[10px] text-text-muted font-medium px-1">
            Must be at least 8 characters long with a mix of symbols and
            letters.
          </p>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-white text-sm font-black rounded-xl hover:opacity-95 transition-all shadow-xl shadow-primary/20 border-none cursor-pointer uppercase tracking-widest"
        >
          Create Account
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      {/* Bottom info */}
      <p className="text-center text-xs text-text-muted leading-relaxed">
        By creating an account, you agree to Vendix&apos;s{" "}
        <Link href="/terms" className="underline font-bold">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="underline font-bold">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}

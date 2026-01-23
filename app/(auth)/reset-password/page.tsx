"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Password reset success");
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500 text-center">
        <div className="mx-auto w-fit p-4 bg-success/10 rounded-full">
          <CheckCircle2 className="h-12 w-12 text-success" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-tight text-text-primary">
            Password updated
          </h1>
          <p className="text-text-muted font-medium">
            Your password has been reset successfully. <br />
            You can now sign in with your new password.
          </p>
        </div>
        <div className="pt-4">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 py-4 px-8 bg-primary text-white text-sm font-black rounded-xl hover:opacity-95 transition-all shadow-xl shadow-primary/20 border-none cursor-pointer uppercase tracking-widest no-underline"
          >
            Sign In Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in shadow-2xl">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-black tracking-tight text-text-primary">
          Reset password
        </h1>
        <p className="text-text-muted font-medium">
          Choose a strong password to secure your account.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-text-muted uppercase tracking-widest px-1">
            New Password
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
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-text-muted uppercase tracking-widest px-1">
            Confirm New Password
          </label>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted group-focus-within:text-primary transition-colors" />
            <input
              type={showPassword ? "text" : "password"}
              required
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              placeholder="••••••••"
              className="w-full pl-12 pr-12 py-3.5 bg-muted/20 border border-border rounded-xl text-sm font-semibold focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-text-muted/50"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-white text-sm font-black rounded-xl hover:opacity-95 transition-all shadow-xl shadow-primary/20 border-none cursor-pointer uppercase tracking-widest"
        >
          Reset Password
          <ArrowRight className="h-4 w-4" />
        </button>

        <div className="text-center pt-2">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-xs font-bold text-text-muted hover:text-primary transition-colors group"
          >
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" />
            Return to sign in
          </Link>
        </div>
      </form>
    </div>
  );
}

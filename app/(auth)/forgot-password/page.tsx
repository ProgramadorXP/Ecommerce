"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Reset link requested for:", email);
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
            Check your email
          </h1>
          <p className="text-text-muted font-medium">
            We&apos;ve sent a password reset link to <br />
            <span className="text-text-primary font-bold">{email}</span>
          </p>
        </div>
        <div className="pt-4">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-xs font-bold text-text-muted hover:text-primary transition-colors group mb-2"
        >
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" />
          Back to login
        </Link>
        <h1 className="text-3xl font-black tracking-tight text-text-primary">
          Forgot password?
        </h1>
        <p className="text-text-muted font-medium">
          Enter your email address and we&apos;ve sent you a reset link.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-text-muted uppercase tracking-widest px-1">
            Email Address
          </label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted group-focus-within:text-primary transition-colors" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@vendix.com"
              className="w-full pl-12 pr-4 py-3.5 bg-muted/20 border border-border rounded-xl text-sm font-semibold focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-text-muted/50"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-white text-sm font-black rounded-xl hover:opacity-95 transition-all shadow-xl shadow-primary/20 border-none cursor-pointer uppercase tracking-widest"
        >
          Send Reset Link
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}

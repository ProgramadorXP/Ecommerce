import Link from "next/link";
import Logo from "@/components/common/Logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side: Visual/Branding (Hidden on mobile) */}
      <div className="hidden lg:flex flex-col justify-between p-12 bg-vendix relative overflow-hidden">
        <div className="relative z-10">
          <Link href="/" className="inline-block">
            <Logo size="lg" className="[&_h1]:text-white" />
          </Link>
        </div>

        <div className="relative z-10 space-y-6">
          <h2 className="text-5xl font-black text-white leading-tight">
            Start your journey <br />
            with the next gen <br />
            of E-commerce.
          </h2>
          <p className="text-white/70 text-lg max-w-md font-medium">
            Join thousands of satisfied customers and experience a seamless
            shopping and management experience.
          </p>
        </div>

        <div className="relative z-10">
          <p className="text-white/50 text-sm font-bold uppercase tracking-widest">
            © 2026 VENDIX
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[80%] h-[80%] bg-secondary/20 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Right Side: Auth Form */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-12 bg-background relative">
        <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {children}
        </div>
      </div>
    </div>
  );
}

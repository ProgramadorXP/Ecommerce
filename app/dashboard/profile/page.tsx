"use client";

import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Shield,
  Camera,
  Edit2,
  Briefcase,
  Clock,
  ExternalLink,
  LucideIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function ProfilePage() {
  // Mock data based on schema
  const user = {
    username: "jdoe_admin",
    email: "admin@vendix.com",
    role: "Administrator",
    createdAt: "January 2025",
    details: {
      firstName: "John",
      lastName: "Doe",
      phone: "+1 (555) 000-0000",
      dateOfBirth: "May 15, 1990",
      gender: "Male",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    address: {
      street: "Main Street",
      externalNumber: "123",
      internalNumber: "4B",
      neighborhood: "Downtown",
      municipality: "San Francisco",
      state: "California",
      postalCode: "94105",
    },
    stats: {
      totalOrders: 42,
      totalReviews: 12,
      savedItems: 8,
    },
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">
          Account Profile
        </h1>
        <p className="text-sm text-text-muted">
          Manage your personal information, security, and addresses.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left Column: Profile Card & Stats */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-border rounded-2xl bg-card overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/5">
            {/* Banner Background */}
            <div className="h-32 bg-linear-to-br from-primary/20 via-secondary/10 to-vendix-accent/10"></div>

            <CardContent className="relative px-6 pb-8 mt-[-48px]">
              <div className="flex flex-col items-center text-center">
                {/* Avatar with Camera Overlay */}
                <div className="relative group cursor-pointer">
                  <div className="h-28 w-28 rounded-2xl overflow-hidden border-4 border-card shadow-2xl bg-background transition-transform group-hover:scale-[1.02]">
                    <Image
                      src={user.details.image}
                      alt={user.username}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                  <button className="absolute bottom-[-8px] right-[-8px] p-2 bg-primary text-white rounded-xl shadow-lg hover:scale-110 active:scale-95 transition-transform flex items-center justify-center cursor-pointer border-none z-10">
                    <Camera className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="mt-4 space-y-1">
                  <h2 className="text-xl font-bold text-text-primary tracking-tight">
                    {user.details.firstName} {user.details.lastName}
                  </h2>
                  <p className="text-sm font-medium text-text-muted">
                    @{user.username}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 font-bold uppercase text-[10px] tracking-wider rounded-lg">
                    {user.role}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-success/10 text-success border-success/20 px-3 py-1 font-bold uppercase text-[10px] tracking-wider rounded-lg"
                  >
                    Verified
                  </Badge>
                </div>

                <div className="w-full h-px bg-border/50 my-6"></div>

                <div className="w-full space-y-4">
                  <div className="flex items-center gap-3 text-sm text-text-muted transition-colors hover:text-text-primary group">
                    <div className="p-2 bg-muted/50 rounded-xl border border-border/50 group-hover:border-primary/30 transition-colors text-text-muted group-hover:text-primary">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="truncate font-medium">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-text-muted group">
                    <div className="p-2 bg-muted/50 rounded-xl border border-border/50 transition-colors text-text-muted group-hover:text-success">
                      <Clock className="h-4 w-4" />
                    </div>
                    <span className="font-medium">
                      Member since {user.createdAt}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Activity Stats Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
            <StatMini
              label="Successful Orders"
              value={user.stats.totalOrders}
              icon={Briefcase}
              color="text-primary"
            />
            <StatMini
              label="Product Reviews"
              value={user.stats.totalReviews}
              icon={Briefcase}
              color="text-success"
            />
            <StatMini
              label="Saved for later"
              value={user.stats.savedItems}
              icon={Briefcase}
              color="text-warning"
            />
          </div>
        </div>

        {/* Right Column: Detailed Forms */}
        <div className="lg:col-span-2 space-y-6">
          {/* Section: Personal Details */}
          <Card className="border-border rounded-2xl bg-card shadow-sm border-none ring-1 ring-border">
            <CardHeader className="flex flex-row items-center justify-between px-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary/10 rounded-xl">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-0.5">
                  <CardTitle className="text-lg font-bold">
                    Personal Information
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Edit your public and private details
                  </CardDescription>
                </div>
              </div>
              <button className="px-4 py-2 bg-muted/80 hover:bg-muted text-text-primary text-xs font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer border border-border shadow-xs">
                <Edit2 className="h-3 w-3" />
                Edit Profile
              </button>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <InfoItem
                label="First Name"
                value={user.details.firstName}
                icon={User}
              />
              <InfoItem
                label="Last Name"
                value={user.details.lastName}
                icon={User}
              />
              <InfoItem label="Username" value={user.username} />
              <InfoItem label="Email Address" value={user.email} icon={Mail} />
              <InfoItem
                label="Phone Number"
                value={user.details.phone}
                icon={Phone}
              />
              <InfoItem
                label="Date of Birth"
                value={user.details.dateOfBirth}
                icon={Calendar}
              />
              <InfoItem label="Gender Identity" value={user.details.gender} />
              <InfoItem label="Account Role" value={user.role} badge />
            </CardContent>
          </Card>

          {/* Section: Shipping & Logistics */}
          <Card className="border-border rounded-2xl bg-card shadow-sm border-none ring-1 ring-border relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity -rotate-12">
              <MapPin className="h-32 w-32" />
            </div>

            <CardHeader className="flex flex-row items-center justify-between px-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-success/10 rounded-xl text-success">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <CardTitle className="text-lg font-bold">
                    Shipping Address
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Your primary delivery destination
                  </CardDescription>
                </div>
              </div>
              <button className="px-4 py-2 bg-muted/80 hover:bg-muted text-text-primary text-xs font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer border border-border">
                <ExternalLink className="h-3 w-3" />
                Manage
              </button>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="md:col-span-2">
                <InfoItem
                  label="Street Address"
                  value={user.address.street}
                  icon={MapPin}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InfoItem
                  label="External #"
                  value={user.address.externalNumber}
                />
                <InfoItem
                  label="Internal #"
                  value={user.address.internalNumber || "N/A"}
                />
              </div>
              <InfoItem
                label="Neighborhood"
                value={user.address.neighborhood}
              />
              <InfoItem
                label="City / Municipality"
                value={user.address.municipality}
              />
              <InfoItem label="State / Province" value={user.address.state} />
              <InfoItem label="Postal Code" value={user.address.postalCode} />
            </CardContent>
          </Card>

          {/* Section: Security Highlight */}
          <Card className="border-border rounded-2xl bg-linear-to-br from-card via-card to-warning/5 shadow-sm border-none ring-1 ring-border border-l-4 border-l-warning">
            <CardContent className="px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-warning/10 rounded-2xl">
                  <Shield className="h-6 w-6 text-warning" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-text-primary tracking-tight">
                    Two-Factor Authentication
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Boost your account security by adding an extra verification
                    step.
                  </p>
                </div>
              </div>
              <button className="w-full sm:w-auto px-6 py-2.5 bg-primary text-white text-xs font-black rounded-xl hover:opacity-90 active:scale-95 transition-all cursor-pointer border-none shadow-lg shadow-primary/20 uppercase tracking-widest">
                Setup 2FA
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function InfoItem({
  label,
  value,
  icon: Icon,
  badge,
}: {
  label: string;
  value: string | null;
  icon?: LucideIcon;
  badge?: boolean;
}) {
  return (
    <div className="space-y-2">
      <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-0.5">
        {label}
      </p>
      <div className="flex items-center gap-2.5 group">
        {Icon && (
          <div className="p-1.5 bg-muted/30 rounded-lg group-hover:bg-primary/5 transition-colors border border-border/20">
            <Icon className="h-3.5 w-3.5 text-text-muted group-hover:text-primary transition-colors" />
          </div>
        )}
        {badge ? (
          <Badge
            variant="outline"
            className="bg-primary/5 text-primary border-primary/10 font-bold text-[11px] px-2 py-0.5 rounded-md"
          >
            {value || "Not Assigned"}
          </Badge>
        ) : (
          <span className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors truncate">
            {value || "Not provided"}
          </span>
        )}
      </div>
    </div>
  );
}

function StatMini({
  label,
  value,
  icon: Icon,
  color,
}: {
  label: string;
  value: number;
  icon: LucideIcon;
  color: string;
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-4 flex items-center justify-between group hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer">
      <div className="space-y-1">
        <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
          {label}
        </p>
        <p className="text-2xl font-black text-text-primary tracking-tighter">
          {value}
        </p>
      </div>
      <div
        className={`p-3 bg-muted/50 rounded-xl group-hover:bg-primary/5 transition-colors ${color} group-hover:scale-110 duration-300`}
      >
        <Icon className="h-5 w-5" />
      </div>
    </div>
  );
}

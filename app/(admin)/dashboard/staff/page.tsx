"use client";

import {
  Users,
  Mail,
  Key,
  UserPlus,
  MoreVertical,
  Edit2,
  Trash2,
  ShieldCheck,
  ShieldAlert,
  LucideIcon,
} from "lucide-react";
import IconButton from "@/components/common/IconButton";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

const MOCK_STAFF = [
  {
    id: 1,
    name: "Admin Jona",
    email: "jona@vendix.com",
    role: "Owner",
    status: "active",
    lastActive: "2 mins ago",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Sarah Miller",
    email: "sarah.m@vendix.com",
    role: "Manager",
    status: "active",
    lastActive: "1 day ago",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Lucas Thorne",
    email: "lucas.t@vendix.com",
    role: "Editor",
    status: "inactive",
    lastActive: "1 week ago",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma.w@vendix.com",
    role: "Support",
    status: "active",
    lastActive: "5 hours ago",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

export default function StaffPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-2xl">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-text-primary">
              Staff Management
            </h1>
            <p className="text-sm text-text-muted">
              Manage your team members and their access levels.
            </p>
          </div>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20 border-none cursor-pointer group">
          <UserPlus className="h-4 w-4 group-hover:scale-110 transition-transform" />
          Invite Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RoleCard
          title="Admins"
          count={2}
          icon={ShieldCheck}
          color="text-primary"
          bgColor="bg-primary/10"
          description="Full access to all settings and financial data."
        />
        <RoleCard
          title="Managers"
          count={3}
          icon={Key}
          color="text-secondary"
          bgColor="bg-secondary/10"
          description="Can manage products, orders and customers."
        />
        <RoleCard
          title="Editors"
          count={5}
          icon={ShieldAlert}
          color="text-warning"
          bgColor="bg-warning/10"
          description="Restricted access to content and catalogs."
        />
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/30 border-b border-border">
                <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                  Member
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                  Access Status
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                  Last Activity
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {MOCK_STAFF.map((member) => (
                <tr
                  key={member.id}
                  className="group hover:bg-background/50 transition-colors"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 rounded-xl overflow-hidden border border-border">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-sm font-bold text-text-primary">
                          {member.name}
                        </span>
                        <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
                          <Mail className="h-3 w-3" />
                          {member.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <Badge
                      variant="outline"
                      className="bg-muted text-text-primary border-border font-bold text-[9px] uppercase tracking-wider"
                    >
                      {member.role}
                    </Badge>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          "h-2 w-2 rounded-full",
                          member.status === "active"
                            ? "bg-success"
                            : "bg-text-muted/30",
                        )}
                      />
                      <span
                        className={cn(
                          "text-xs font-bold",
                          member.status === "active"
                            ? "text-success"
                            : "text-text-muted",
                        )}
                      >
                        {member.status === "active" ? "Active" : "Disabled"}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs text-text-muted font-medium italic">
                      {member.lastActive}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <IconButton
                        icon={Edit2}
                        className="h-8 w-8 hover:text-primary hover:bg-primary/5"
                        title="Edit Permissions"
                      />
                      <IconButton
                        icon={Trash2}
                        className="h-8 w-8 hover:text-error hover:bg-error/5"
                        title="Remove Access"
                      />
                      <IconButton icon={MoreVertical} className="h-8 w-8" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function RoleCard({
  title,
  count,
  icon: Icon,
  color,
  bgColor,
  description,
}: {
  title: string;
  count: number;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  description: string;
}) {
  return (
    <div className="p-5 bg-card border border-border rounded-2xl space-y-3 hover:shadow-lg hover:shadow-primary/5 transition-all group">
      <div className="flex items-center justify-between">
        <div className={cn("p-2.5 rounded-xl", bgColor, color)}>
          <Icon className="h-5 w-5" />
        </div>
        <Badge className={cn("bg-background border-border", color)}>
          {count} Members
        </Badge>
      </div>
      <div>
        <h3 className="text-sm font-black text-text-primary uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-[10px] text-text-muted font-medium mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

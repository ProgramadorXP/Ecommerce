"use client";

import { useState } from "react";
import { User, Bell, Shield, CreditCard, Store, Save } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General", icon: Store },
    { id: "account", label: "My Account", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "billing", label: "Billing", icon: CreditCard },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">
          Settings
        </h1>
        <p className="text-sm text-text-muted">
          Manage your store preferences and account security.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Navigation Tabs */}
        <Card className="lg:col-span-1 border-border rounded-2xl bg-card overflow-hidden h-fit">
          <CardContent className="p-2">
            <nav className="flex flex-col gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "text-text-muted hover:bg-muted hover:text-text-primary"
                  }`}
                >
                  <tab.icon
                    className={`h-4 w-4 ${activeTab === tab.id ? "text-white" : "text-text-muted group-hover:text-text-primary"}`}
                  />
                  {tab.label}
                </button>
              ))}
            </nav>
          </CardContent>
        </Card>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === "general" && <GeneralSettings />}
          {activeTab === "notifications" && <NotificationSettings />}
          {activeTab === "security" && <SecuritySettings />}
          {/* Add more as needed */}
        </div>
      </div>
    </div>
  );
}

function GeneralSettings() {
  return (
    <Card className="border-border rounded-2xl bg-card shadow-sm ring-1 ring-border border-none">
      <CardHeader className="px-6 border-b border-border/50">
        <CardTitle className="text-lg font-bold">Store Configuration</CardTitle>
        <CardDescription className="text-xs">
          Update your store basic information and locale settings.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SettingInput
            label="Store Name"
            placeholder="Vendix Premium E-commerce"
          />
          <SettingInput
            label="Support Email"
            placeholder="support@vendix.com"
          />
          <SettingSelect
            label="Default Currency"
            options={["USD ($)", "EUR (€)", "MXN ($)"]}
          />
          <SettingSelect
            label="Timezone"
            options={[
              "(GMT-06:00) Central Time",
              "(GMT+00:00) UTC",
              "(GMT-08:00) Pacific Time",
            ]}
          />
        </div>

        <div className="pt-4 flex justify-end">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-xs font-black rounded-xl hover:opacity-90 transition-all cursor-pointer shadow-lg shadow-primary/20 border-none uppercase tracking-widest">
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

function NotificationSettings() {
  return (
    <Card className="border-border rounded-2xl bg-card shadow-sm ring-1 ring-border border-none">
      <CardHeader className="px-6 border-b border-border/50">
        <CardTitle className="text-lg font-bold">
          Manage Notifications
        </CardTitle>
        <CardDescription className="text-xs">
          Choose how you want to be notified about store activity.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <ToggleSetting
          label="Email on New Order"
          description="Receive an email every time a customer places an order."
          active
        />
        <ToggleSetting
          label="Low Stock Alerts"
          description="Get notified when products fall below the minimum threshold."
          active
        />
        <ToggleSetting
          label="Customer Review Notifications"
          description="Be alerted when customers leave a new product review."
        />
        <ToggleSetting
          label="Marketing Analytics Report"
          description="Weekly summary of your store performance."
          active
        />
      </CardContent>
    </Card>
  );
}

function SecuritySettings() {
  return (
    <div className="space-y-6">
      <Card className="border-border rounded-2xl bg-card shadow-sm ring-1 ring-border border-none">
        <CardHeader className="px-6 border-b border-border/50">
          <CardTitle className="text-lg font-bold">
            Password Management
          </CardTitle>
          <CardDescription className="text-xs">
            Change your password and secure your admin access.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <SettingInput label="Current Password" type="password" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SettingInput label="New Password" type="password" />
            <SettingInput label="Confirm New Password" type="password" />
          </div>
          <button className="mt-4 px-6 py-2 bg-text-primary text-background text-xs font-bold rounded-xl hover:opacity-90 transition-all cursor-pointer border-none">
            Update Password
          </button>
        </CardContent>
      </Card>
    </div>
  );
}

function SettingInput({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-text-muted/50"
      />
    </div>
  );
}

function SettingSelect({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">
        {label}
      </label>
      <select className="w-full px-4 py-2.5 bg-muted/20 border border-border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none cursor-pointer">
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function ToggleSetting({
  label,
  description,
  active = false,
}: {
  label: string;
  description: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl hover:bg-muted/30 transition-all border border-transparent hover:border-border/50">
      <div className="space-y-0.5">
        <p className="text-sm font-bold text-text-primary">{label}</p>
        <p className="text-xs text-text-muted">{description}</p>
      </div>
      <button
        className={`w-12 h-6 rounded-full relative transition-all cursor-pointer border-none ${active ? "bg-primary" : "bg-muted"}`}
      >
        <div
          className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${active ? "left-7" : "left-1"}`}
        />
      </button>
    </div>
  );
}

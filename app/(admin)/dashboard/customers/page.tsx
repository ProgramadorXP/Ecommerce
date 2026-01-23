"use client";

import { useState } from "react";
import CustomerHeader from "@/components/dashboard/customers/CustomerHeader";
import CustomerSummary from "@/components/dashboard/customers/CustomerSummary";
import CustomerFilters from "@/components/dashboard/customers/CustomerFilters";
import CustomerTable from "@/components/dashboard/customers/CustomerTable";
import { MOCK_CUSTOMERS } from "@/data/dashboard/customers";
import { CustomerFilterStatus } from "@/components/dashboard/customers/types";

export default function CustomersPage() {
  const [selectedStatus, setSelectedStatus] =
    useState<CustomerFilterStatus>("all");

  const filteredCustomers = MOCK_CUSTOMERS.filter((customer) => {
    if (selectedStatus === "all") return true;
    if (selectedStatus === "new") {
      const joinDate = new Date(customer.createdAt);
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      return joinDate > sevenDaysAgo;
    }
    if (selectedStatus === "active") return customer.stats.totalOrders > 0;
    if (selectedStatus === "inactive") return customer.stats.totalOrders === 0;

    return true;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <CustomerHeader />

      {/* Summary */}
      <CustomerSummary />

      {/* Filters */}
      <CustomerFilters
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
      />

      {/* Table */}
      <CustomerTable customers={filteredCustomers} />
    </div>
  );
}

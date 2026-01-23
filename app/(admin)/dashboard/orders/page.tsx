"use client";

import { useState, useMemo } from "react";
import OrderHeader from "@/components/dashboard/orders/OrderHeader";
import OrderFilters from "@/components/dashboard/orders/OrderFilters";
import OrderTable from "@/components/dashboard/orders/OrderTable";
import OrderSummary from "@/components/dashboard/orders/OrderSummary";
import OrderDetailsModal from "@/components/dashboard/orders/OrderDetailsModal";
import { Order, OrderStatus } from "@/components/dashboard/orders/types";
import { MOCK_ORDERS } from "@/data/dashboard/orders";

export default function OrdersPage() {
  const [selectedStatus, setSelectedStatus] = useState<OrderStatus | "all">(
    "all",
  );
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const filteredOrders = useMemo(() => {
    return MOCK_ORDERS.filter((order) => {
      const statusMatch =
        selectedStatus === "all" || order.status === selectedStatus;
      return statusMatch;
    });
  }, [selectedStatus]);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <OrderHeader />

      <OrderSummary />

      <OrderFilters
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
      />

      <OrderTable orders={filteredOrders} onViewDetails={handleViewDetails} />

      <OrderDetailsModal
        order={selectedOrder}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

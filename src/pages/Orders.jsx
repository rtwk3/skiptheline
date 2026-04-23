import React from 'react'
import { OrderCard } from '../components/OrderCard'

export function Orders({ orders }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Order History</h1>
        <p className="text-gray-500 mt-1">Track your current and previous orders.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {orders.map(order => (
          <OrderCard key={order.id} order={order} />
        ))}
        {orders.length === 0 && (
          <div className="col-span-full py-12 text-center text-gray-500 border-2 border-dashed rounded-xl">
             You haven't placed any orders yet.
          </div>
        )}
      </div>
    </div>
  )
}

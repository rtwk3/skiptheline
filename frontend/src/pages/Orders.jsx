import React from 'react'
import { OrderCard } from '../components/OrderCard'
import { motion } from 'framer-motion'

export function Orders({ orders }) {
  return (
    <motion.div 
      className="space-y-8 pb-10"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="pb-2">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Order History</h1>
        <p className="text-gray-500 mt-2 text-lg">Track your current and previous orders.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {orders.map(order => (
          <OrderCard key={order.id} order={order} />
        ))}
        {orders.length === 0 && (
          <div className="col-span-full py-16 text-center text-gray-400 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50/50">
             <p className="text-lg">You haven't placed any orders yet.</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

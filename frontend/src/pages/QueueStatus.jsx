import React from 'react'
import { Card, CardContent } from '../components/ui/Card'
import { Clock, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function QueueStatus({ activeOrder }) {
  if (!activeOrder) {
    return (
      <motion.div 
        className="flex flex-col items-center justify-center p-12 text-center h-[60vh]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
      >
        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-300">
          <CheckCircle size={40} />
        </div>
        <h2 className="text-3xl font-bold tracking-tight">No Active Orders</h2>
        <p className="text-gray-500 mt-3 text-lg">Place an order to see your queue status here.</p>
      </motion.div>
    )
  }

  // Mock progress based on status
  const progressPercent = activeOrder.status === 'Preparing' ? 50 : activeOrder.status === 'Ready' ? 100 : 0;
  
  return (
    <motion.div 
      className="space-y-8 max-w-2xl mx-auto pb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Queue Status</h1>
        <p className="text-gray-500 mt-2 text-lg">Track your active order.</p>
      </div>

      <Card className="p-8 mt-8 text-center glass border border-white/60 shadow-xl shadow-primary/5">
        <h2 className="text-3xl font-bold mb-3 text-gray-800">Order #{activeOrder.id}</h2>
        
        <div className="flex items-center justify-center gap-2 text-primary font-bold text-xl mb-10 bg-primary/5 py-3 rounded-2xl mx-auto w-max px-6">
          <Clock size={24} className={activeOrder.status === 'Preparing' ? "animate-pulse" : ""} />
          {activeOrder.status === 'Ready' 
            ? "Your order is ready!" 
            : "Estimated wait: 5-10 mins"}
        </div>

        {/* Progress Bar */}
        <div className="relative pt-1 px-2">
          <div className="overflow-hidden h-5 mb-4 text-xs flex rounded-full bg-gray-100 shadow-inner">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-orange-400 to-primary ${progressPercent < 100 ? 'animate-pulse' : ''}`}
            />
          </div>
          <div className="flex justify-between text-sm font-semibold text-gray-400 px-1 mt-2">
            <span className={progressPercent >= 0 ? "text-primary transition-colors duration-500" : ""}>Received</span>
            <span className={progressPercent >= 50 ? "text-primary transition-colors duration-500" : ""}>Preparing</span>
            <span className={progressPercent >= 100 ? "text-primary transition-colors duration-500" : ""}>Ready</span>
          </div>
        </div>
      </Card>
      
      <Card className="glass border border-white/60 shadow-lg">
        <CardContent className="p-8">
          <h3 className="font-bold text-xl mb-5 border-b border-gray-100 pb-3 text-gray-800">Order Items</h3>
          <ul className="space-y-4">
            {activeOrder.items.map((item, idx) => (
              <li key={idx} className="flex justify-between text-lg text-gray-600">
                <span><span className="font-bold text-gray-900 mr-3 bg-gray-100 px-2 py-1 rounded-md">{item.quantity}x</span> {item.name}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

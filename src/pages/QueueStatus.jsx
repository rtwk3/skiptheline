import React from 'react'
import { Card, CardContent } from '../components/ui/Card'
import { Clock, CheckCircle } from 'lucide-react'

export function QueueStatus({ activeOrder }) {
  if (!activeOrder) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center h-[60vh]">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
          <CheckCircle size={32} />
        </div>
        <h2 className="text-2xl font-semibold">No Active Orders</h2>
        <p className="text-gray-500 mt-2">Place an order to see your queue status here.</p>
      </div>
    )
  }

  // Mock progress based on status
  const progressPercent = activeOrder.status === 'Preparing' ? 50 : activeOrder.status === 'Ready' ? 100 : 0;
  
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-center">Queue Status</h1>
        <p className="text-gray-500 mt-1 text-center">Track your active order.</p>
      </div>

      <Card className="p-8 mt-8 text-center glass border-primary/20">
        <h2 className="text-2xl font-bold mb-2">Order #{activeOrder.id}</h2>
        
        <div className="flex items-center justify-center gap-2 text-primary font-semibold text-lg mb-8">
          <Clock size={20} />
          {activeOrder.status === 'Ready' 
            ? "Your order is ready!" 
            : "Estimated wait: 5-10 mins"}
        </div>

        {/* Progress Bar */}
        <div className="relative pt-1">
          <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-200">
            <div 
              style={{ width: `${progressPercent}%` }} 
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all duration-1000"
            ></div>
          </div>
          <div className="flex justify-between text-xs font-semibold text-gray-500 px-1">
            <span className={progressPercent >= 0 ? "text-primary" : ""}>Received</span>
            <span className={progressPercent >= 50 ? "text-primary" : ""}>Preparing</span>
            <span className={progressPercent >= 100 ? "text-primary" : ""}>Ready</span>
          </div>
        </div>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4 border-b pb-2">Order Items</h3>
          <ul className="space-y-3">
            {activeOrder.items.map((item, idx) => (
              <li key={idx} className="flex justify-between">
                <span><span className="font-medium mr-2">{item.quantity}x</span> {item.name}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

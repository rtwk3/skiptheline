import React from 'react'
import { Card, CardContent, CardHeader } from './ui/Card'
import { Badge } from './ui/Badge'
import { Clock } from 'lucide-react'

export function OrderCard({ order }) {
  const getStatusBadge = (status) => {
    switch(status.toLowerCase()) {
      case 'preparing': return <Badge variant="warning">Preparing</Badge>;
      case 'ready': return <Badge variant="success">Ready for pickup</Badge>;
      case 'completed': return <Badge variant="secondary">Completed</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  }

  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardHeader className="flex flex-row items-center justify-between py-4">
        <div>
          <h4 className="font-semibold">Order #{order.id}</h4>
          <div className="flex items-center text-xs text-gray-500 mt-1 gap-1">
            <Clock size={12} /> {order.time}
          </div>
        </div>
        {getStatusBadge(order.status)}
      </CardHeader>
      
      <CardContent className="py-2 bg-gray-50/50 rounded-b-xl border-t">
        <ul className="space-y-1 mb-3">
          {order.items.map((item, idx) => (
            <li key={idx} className="flex justify-between text-sm">
              <span className="text-gray-600">
                <span className="font-medium mr-2">{item.quantity}x</span> 
                {item.name}
              </span>
              <span className="text-gray-900 font-medium">${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between pt-2 border-t font-semibold">
          <span>Total</span>
          <span className="text-primary">${order.total.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  )
}

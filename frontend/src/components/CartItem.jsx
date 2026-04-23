import React from 'react'
import { Card } from './ui/Card'
import { Button } from './ui/Button'
import { Minus, Plus, Trash2 } from 'lucide-react'

export function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <Card className="flex items-center gap-4 p-4 overflow-hidden shadow-sm transition-all hover:shadow-md">
      <div className="h-20 w-20 bg-gray-200 rounded-md flex-shrink-0 flex items-center justify-center text-xs text-gray-500">
        Img
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 truncate">{item.name}</h4>
        <p className="font-medium text-primary">${item.price.toFixed(2)}</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center border rounded-lg overflow-hidden bg-white">
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="p-1.5 hover:bg-gray-100 disabled:opacity-50 transition-colors"
          >
            <Minus size={16} />
          </button>
          <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="p-1.5 hover:bg-gray-100 transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-600 hover:bg-red-50 h-9 w-9"
        >
          <Trash2 size={18} />
        </Button>
      </div>
    </Card>
  )
}

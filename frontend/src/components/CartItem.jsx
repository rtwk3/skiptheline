import React from 'react'
import { Card } from './ui/Card'
import { Button } from './ui/Button'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'

export function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      whileHover={{ scale: 1.01 }}
      transition={{ layout: { type: "spring", bounce: 0.3, duration: 0.6 } }}
    >
      <Card className="flex items-center gap-5 p-4 overflow-hidden border border-white/60 shadow-md glass">
        <div className="h-24 w-24 bg-gray-100 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden shadow-sm">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </div>
        
        <div className="flex-1 min-w-0 py-1">
          <h4 className="text-xl font-bold text-gray-900 truncate mb-1">{item.name}</h4>
          <p className="font-semibold text-lg text-primary">${item.price.toFixed(2)}</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm h-11">
            <button 
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="px-3 hover:bg-slate-50 disabled:opacity-30 transition-colors h-full flex items-center justify-center"
            >
              <Minus size={18} className="text-slate-600" />
            </button>
            <span className="w-10 text-center font-bold text-base">{item.quantity}</span>
            <button 
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="px-3 hover:bg-slate-50 transition-colors h-full flex items-center justify-center"
            >
              <Plus size={18} className="text-slate-600" />
            </button>
          </div>
          
          <motion.div whileTap={{ scale: 0.8 }}>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => onRemove(item.id)}
              className="text-red-400 hover:text-white hover:bg-red-500 h-11 w-11 rounded-xl transition-all shadow-sm"
            >
              <Trash2 size={20} />
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}

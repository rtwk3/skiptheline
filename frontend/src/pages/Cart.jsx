import React from 'react'
import { CartItem } from '../components/CartItem'
import { Card, CardContent } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { ShoppingBag, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Cart({ cartItems, onUpdateQuantity, onRemove, onCheckout }) {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.05 // 5% tax mock
  const total = subtotal + tax

  if (cartItems.length === 0) {
    return (
      <motion.div 
        className="flex flex-col items-center justify-center p-12 text-center h-[60vh]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
      >
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary animate-bounce">
          <ShoppingBag size={40} />
        </div>
        <h2 className="text-3xl font-bold tracking-tight">Your cart is empty</h2>
        <p className="text-gray-500 mt-3 mb-8 text-lg">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/">
          <Button size="lg" className="rounded-full px-8">Browse Menu</Button>
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="space-y-6 lg:flex lg:gap-8 lg:space-y-0"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex-1 space-y-4">
        <div className="pb-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Your Cart</h1>
          <p className="text-gray-500 mt-2 text-lg">Review your items before checkout.</p>
        </div>
        
        <div className="space-y-4 pr-1 mt-6">
          {cartItems.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              onUpdateQuantity={onUpdateQuantity}
              onRemove={onRemove}
            />
          ))}
        </div>
      </div>

      <div className="w-full lg:w-[400px] shrink-0 mt-8 lg:mt-0">
        <Card className="sticky top-24 glass border border-white/60 shadow-xl shadow-primary/5">
          <CardContent className="p-8">
            <h3 className="font-bold text-2xl mb-6 text-gray-900">Order Summary</h3>
            
            <div className="space-y-4 pb-6 border-b border-gray-100 text-base">
              <div className="flex justify-between items-center text-gray-600">
                <span>Subtotal ({cartItems.length} items)</span>
                <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>Tax (5%)</span>
                <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center py-6 text-xl font-bold">
              <span>Total</span>
              <span className="text-primary text-2xl">${total.toFixed(2)}</span>
            </div>

            <Button className="w-full h-14 text-lg font-semibold gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all rounded-xl" onClick={onCheckout}>
              Proceed to Checkout <ArrowRight size={20} />
            </Button>
            
            <p className="text-sm text-center text-gray-400 mt-6">
              By checking out, you agree to our Terms of Service.
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

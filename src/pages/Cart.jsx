import React from 'react'
import { CartItem } from '../components/CartItem'
import { Card, CardContent } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { ShoppingBag, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Cart({ cartItems, onUpdateQuantity, onRemove, onCheckout }) {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.05 // 5% tax mock
  const total = subtotal + tax

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center h-[60vh]">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
          <ShoppingBag size={32} />
        </div>
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <p className="text-gray-500 mt-2 mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/">
          <Button>Browse Menu</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6 lg:flex lg:gap-8 lg:space-y-0">
      <div className="flex-1 space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Cart</h1>
          <p className="text-gray-500 mt-1">Review your items before checkout.</p>
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

      <div className="w-full lg:w-96 shrink-0 mt-8 lg:mt-0">
        <Card className="sticky top-24 glass border-primary/10">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
            
            <div className="space-y-3 pb-4 border-b text-sm">
              <div className="flex justify-between items-center text-gray-600">
                <span>Subtotal ({cartItems.length} items)</span>
                <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>Tax (5%)</span>
                <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center py-4 text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">${total.toFixed(2)}</span>
            </div>

            <Button className="w-full h-12 text-base gap-2" onClick={onCheckout}>
              Proceed to Checkout <ArrowRight size={18} />
            </Button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              By checking out, you agree to our Terms of Service.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

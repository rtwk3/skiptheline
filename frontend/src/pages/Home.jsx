import React from 'react'
import { FoodCard } from '../components/FoodCard'

export function Home({ menuItems, onAddToCart }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Today's Menu</h1>
        <p className="text-gray-500 mt-1">Pre-order your favorite meals and skip the line.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {menuItems.map(item => (
          <FoodCard 
            key={item.id} 
            item={item} 
            onAdd={onAddToCart} 
          />
        ))}
      </div>
    </div>
  )
}

import React from 'react'
import { FoodCard } from '../components/FoodCard'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function Home({ menuItems, onAddToCart }) {
  return (
    <motion.div 
      className="space-y-8 pb-10"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center md:text-left pt-4 pb-2">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Today's <span className="text-gradient">Menu</span>
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-500 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Pre-order your favorite meals and skip the line.
        </motion.p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {menuItems.map(item => (
          <FoodCard 
            key={item.id} 
            item={item} 
            onAdd={onAddToCart} 
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

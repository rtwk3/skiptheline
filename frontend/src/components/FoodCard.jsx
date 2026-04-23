import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/Card'
import { Button } from './ui/Button'
import { Plus } from 'lucide-react'
import { motion } from 'framer-motion'

export function FoodCard({ item, onAdd }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full card-hover overflow-hidden border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <div className="w-full h-52 relative overflow-hidden group">
          <motion.img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardHeader className="flex-1 px-5 pt-5 pb-2">
          <div className="flex justify-between items-start gap-4 mb-2">
            <CardTitle className="text-xl font-semibold leading-tight text-gray-800">{item.name}</CardTitle>
            <span className="font-bold text-lg text-primary bg-primary/10 px-2 py-1 rounded-lg">${item.price.toFixed(2)}</span>
          </div>
          <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed">{item.description}</p>
        </CardHeader>
        <CardFooter className="p-5 pt-3 mt-auto">
          <motion.div whileTap={{ scale: 0.95 }} className="w-full">
            <Button onClick={() => onAdd(item)} className="w-full gap-2 shadow-md hover:shadow-primary/30 transition-all font-medium py-6 rounded-xl">
              <Plus size={18} strokeWidth={2.5} /> Add to Order
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

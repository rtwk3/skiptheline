import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/Card'
import { Button } from './ui/Button'
import { Plus } from 'lucide-react'

export function FoodCard({ item, onAdd }) {
  return (
    <Card className="flex flex-col h-full card-hover overflow-hidden">
      <div className="w-full h-48 bg-gray-200">
        {/* Placeholder for image, in real app would use item.image */}
        <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500">
          Image
        </div>
      </div>
      <CardHeader className="flex-1">
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-lg">{item.name}</CardTitle>
          <span className="font-semibold text-primary">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{item.description}</p>
      </CardHeader>
      <CardFooter className="pt-0">
        <Button onClick={() => onAdd(item)} className="w-full gap-2">
          <Plus size={16} /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

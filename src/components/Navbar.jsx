import React from 'react'
import { Menu, ShoppingCart, Bell } from 'lucide-react'
import { Button } from './ui/Button'
import { Link } from 'react-router-dom'

export function Navbar({ onMenuClick, cartCount }) {
  return (
    <header className="sticky top-0 z-40 w-full glass">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
            <Menu size={20} />
          </Button>
          <h2 className="text-lg font-semibold md:hidden">Smart Canteen</h2>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative hidden md:flex">
            <Bell size={20} />
            <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative group">
              <ShoppingCart size={20} className="group-hover:text-primary transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          
          <div className="h-8 w-8 rounded-full bg-slate-200 border-2 border-white shadow-sm ml-2 overflow-hidden flex items-center justify-center text-xs font-semibold text-slate-500">
            U
          </div>
        </div>
      </div>
    </header>
  )
}

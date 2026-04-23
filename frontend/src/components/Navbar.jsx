import React from 'react'
import { Menu, ShoppingCart, Bell } from 'lucide-react'
import { Button } from './ui/Button'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar({ onMenuClick, cartCount }) {
  return (
    <header className="sticky top-0 z-40 w-full glass">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
            <Menu size={20} />
          </Button>
          <h2 className="text-xl font-bold md:hidden text-gradient">Smart Canteen</h2>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative hidden md:flex hover:bg-slate-100/50 rounded-full">
            <Bell size={20} className="text-slate-600" />
            <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          </Button>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative group hover:bg-slate-100/50 rounded-full">
              <ShoppingCart size={20} className="text-slate-600 group-hover:text-primary transition-colors" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-sm ring-2 ring-white"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </Link>
          
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primary to-orange-400 border-2 border-white shadow-sm ml-2 overflow-hidden flex items-center justify-center text-sm font-semibold text-white cursor-pointer hover:shadow-md transition-shadow">
            U
          </div>
        </div>
      </div>
    </header>
  )
}

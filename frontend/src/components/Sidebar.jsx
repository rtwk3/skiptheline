import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Utensils, ShoppingBag, Clock, History, Menu } from 'lucide-react'
import { cn } from '../utils/cn'

export function Sidebar({ mobileOpen, onClose }) {
  const location = useLocation()
  
  const navItems = [
    { name: 'Menu', path: '/', icon: Utensils },
    { name: 'Cart', path: '/cart', icon: ShoppingBag },
    { name: 'Orders', path: '/orders', icon: History },
    { name: 'Queue Status', path: '/queue', icon: Clock },
  ]

  const SidebarContent = (
    <div className="flex flex-col h-full bg-white border-r w-64 p-4 shadow-sm">
      <div className="flex items-center gap-2 px-2 mb-8 mt-2">
        <div className="bg-primary text-white p-2 rounded-lg">
          <Utensils size={24} />
        </div>
        <h1 className="font-bold text-xl tracking-tight">Smart Canteen</h1>
      </div>
      
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium text-sm",
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )

  return (
    <>
      {/* Desktop */}
      <aside className="hidden md:block h-screen sticky top-0">
        {SidebarContent}
      </aside>
      
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/20" onClick={onClose} />
          <div className="fixed inset-y-0 left-0">
            {SidebarContent}
          </div>
        </div>
      )}
    </>
  )
}

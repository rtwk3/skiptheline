import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'

// Pages
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Orders } from './pages/Orders'
import { QueueStatus } from './pages/QueueStatus'

// Mock Data
const MOCK_MENU = [
  { id: 1, name: 'Classic Smash Burger', price: 8.99, description: 'Double beef patty, american cheese, house sauce on brioche.', image: 'burger' },
  { id: 2, name: 'Spicy Chicken Sandwich', price: 9.49, description: 'Crispy fried chicken, spicy mayo, pickles, jalapenos.', image: 'chicken' },
  { id: 3, name: 'Caesar Salad', price: 6.99, description: 'Fresh romaine, parmesan flakes, croutons, creamy caesar dressing.', image: 'salad' },
  { id: 4, name: 'Margherita Pizza', price: 11.99, description: 'San marzano tomato sauce, fresh mozzarella, basil.', image: 'pizza' },
  { id: 5, name: 'Loaded Fries', price: 5.49, description: 'Crispy fries topped with cheese sauce, bacon bits, scallions.', image: 'fries' },
  { id: 6, name: 'Iced Latte', price: 4.50, description: 'Espresso over ice with your choice of milk.', image: 'coffee' }
]

function AppContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()

  // Find active order for queue
  const activeOrder = orders.find(o => o.status === 'Preparing' || o.status === 'Ready')

  // Cart Handlers
  const handleAddToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const handleUpdateQuantity = (id, newQuantity) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item))
  }

  const handleRemove = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const handleCheckout = () => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 1.05
    const newOrder = {
      id: Math.floor(Math.random() * 10000).toString().padStart(4, '0'),
      items: [...cart],
      total: total,
      status: 'Preparing',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    setOrders(prev => [newOrder, ...prev])
    setCart([])
    navigate('/queue')
    
    // Simulate order progression
    setTimeout(() => {
      setOrders(prev => prev.map(o => o.id === newOrder.id ? { ...o, status: 'Ready' } : o))
    }, 15000)
    setTimeout(() => {
      setOrders(prev => prev.map(o => o.id === newOrder.id ? { ...o, status: 'Completed' } : o))
    }, 45000)
  }

  return (
    <div className="flex min-h-screen bg-[var(--background)]">
      <Sidebar mobileOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar 
          onMenuClick={() => setMobileMenuOpen(true)} 
          cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        />
        
        <main className="flex-1 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home menuItems={MOCK_MENU} onAddToCart={handleAddToCart} />} />
            <Route path="/cart" element={
              <Cart 
                cartItems={cart} 
                onUpdateQuantity={handleUpdateQuantity} 
                onRemove={handleRemove} 
                onCheckout={handleCheckout} 
              />
            } />
            <Route path="/orders" element={<Orders orders={orders} />} />
            <Route path="/queue" element={<QueueStatus activeOrder={activeOrder} />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

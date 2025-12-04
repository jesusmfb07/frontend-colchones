"use client"

import { useState } from "react"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useCart } from "../context/CartContext"

interface HeaderProps {
  onCartClick: () => void
}

export default function Header({ onCartClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { cart } = useCart()

  const categories = ["COLCHONES", "SOPORTES", "ALMOHADAS", "ROPA DE CAMA", "OFERTAS"]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-2 px-4 text-center text-sm">
        Envío Gratuito en compras mayores a S/ 500
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold text-blue-600">J y E</h1>
            <h1 className="text-xs text-gray-600 -mt-1">COLCHONES</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-8 flex-1 justify-center">
            {categories.map((cat) => (
              <button key={cat} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                {cat}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <input
              type="text"
              placeholder="Buscar..."
              className="hidden md:block px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="text-gray-600 hover:text-blue-600 transition-colors">📍</button>
            <button className="text-gray-600 hover:text-blue-600 transition-colors">📞</button>
            <button onClick={onCartClick} className="relative text-gray-600 hover:text-blue-600 transition-colors">
              <ShoppingCart size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-gray-600">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="lg:hidden mt-4 space-y-2 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 rounded"
              >
                {cat}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

"use client"

import { useCart } from "../context/CartContext"
import { X, Trash2 } from "lucide-react"

export default function Cart() {
  const { cart, removeFromCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price.price, 0)

  return (
    <div className="fixed right-0 top-0 h-screen w-full max-w-md bg-white shadow-xl z-40 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-blue-600 text-white p-6 flex items-center justify-between">
        <h2 className="text-xl font-bold">Tu Carrito</h2>
        <button className="hover:bg-blue-700 p-2 rounded-lg transition-colors">
          <X size={24} />
        </button>
      </div>

      {/* Items */}
      <div className="p-6">
        {cart.length === 0 ? (
          <p className="text-gray-600 text-center py-8">Tu carrito está vacío</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm">{item.product.model}</h3>
                    <p className="text-xs text-gray-600">{item.price.sizeLabel}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(idx)}
                    className="text-red-500 hover:text-red-700 transition-colors p-1"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="text-right font-bold text-blue-600">S/ {item.price.price}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 space-y-4">
          <div className="flex justify-between items-center text-lg font-bold">
            <span>Total:</span>
            <span className="text-blue-600">S/ {total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Proceder al Pago
          </button>
          <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
            Continuar Comprando
          </button>
        </div>
      )}
    </div>
  )
}

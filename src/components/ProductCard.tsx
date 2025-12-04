"use client"

import React from "react"
import { useCart } from "../context/CartContext"
import { ShoppingCart } from "lucide-react"

interface Price {
  _id: string
  sizeLabel: string
  price: number
}

interface Product {
  _id: string
  brand: string
  model: string
  category: string
  prices: Price[]
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = React.useState(product.prices[0]?._id)
  const selectedPrice = product.prices.find((p) => p._id === selectedSize)

  const handleAddToCart = () => {
    if (selectedPrice) {
      addToCart(product, selectedPrice)
    }
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
      {/* Image */}
      <div className="relative bg-gray-200 h-64 overflow-hidden group">
        <img
          src={`/.jpg?key=mpqqm&height=400&width=300&query=${product.model}`}
          alt={product.model}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.category === "ofertas" && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            OFERTA
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-gray-900 mb-1 text-sm line-clamp-2">{product.model}</h3>
        <p className="text-xs text-gray-600 mb-3">{product.brand}</p>

        {/* Prices */}
        <div className="mb-4 flex-1">
          <div className="space-y-2">
            {product.prices.map((price) => (
              <label key={price._id} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={`size-${product._id}`}
                  value={price._id}
                  checked={selectedSize === price._id}
                  onChange={() => setSelectedSize(price._id)}
                  className="w-4 h-4 accent-blue-600"
                />
                <span className="text-sm text-gray-700">
                  {price.sizeLabel} - <span className="font-bold text-blue-600">S/ {price.price}</span>
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart size={18} />
          Añadir al carrito
        </button>
      </div>
    </div>
  )
}

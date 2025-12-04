"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

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

interface CartItem {
  product: Product
  price: Price
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (product: Product, price: Price) => void
  removeFromCart: (index: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product, price: Price) => {
    setCart([...cart, { product, price }])
  }

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider")
  }
  return context
}



/*import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, price) => {
    setCart(prev => [...prev, { product, price }]);
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}*/
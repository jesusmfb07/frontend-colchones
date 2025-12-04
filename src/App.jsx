/*import Home from "./pages/Home.jsx";
import Cart from "./componentsss/Cart.jsx";

function App() {
  return (
    <>
      <Home />
      <Cart />
    </>
  );
}

export default App;*/


"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import ProductGrid from "./components/ProductGrid"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import CartProvider from "./context/CartContext"
import { getProducts } from "./services/api"

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    // Fetch products from your backend
    getProducts().then((data) => {
      setProducts(data)
      setLoading(false)
    })
  }, [])

  return (
    <CartProvider>
      <div className="min-h-screen bg-white flex flex-col">
        <Header onCartClick={() => setShowCart(!showCart)} />
        {showCart && <Cart />}
        <main className="flex-1">
          <Hero />
          <Features />
          {!loading && <ProductGrid products={products} />}
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App;
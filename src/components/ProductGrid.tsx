import ProductCard from "./ProductCard"

interface Product {
  _id: string
  brand: string
  model: string
  category: string
  prices: Array<{
    _id: string
    sizeLabel: string
    price: number
  }>
}

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">EXPLORA NUESTROS PRODUCTOS</h2>
          <div className="flex gap-4 justify-center overflow-x-auto pb-4 mb-8">
            {["Colchones", "Soportes", "Almohadas", "Cabeceros", "Ropa de cama", "OFERTAS", "Packs Ahorro"].map(
              (cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-colors whitespace-nowrap"
                >
                  {cat}
                </button>
              ),
            )}
          </div>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Cargando productos...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

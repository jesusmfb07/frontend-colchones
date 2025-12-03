  import { useCart } from "../context/CartContext";

  function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 
                      text-white rounded-2xl overflow-hidden shadow-lg
                      hover:scale-[1.03] transition-transform duration-300">

        <img
          src="https://picsum.photos/500/600"
          className="w-full h-64 object-cover"
        />

        <div className="p-4 space-y-1">
          <h2 className="font-bold text-lg">{product.model}</h2>
          <p className="text-gray-300 text-sm">{product.brand}</p>

          {product.prices.map(price => (
            <div key={price._id} className="flex justify-between text-sm mt-2">
              <span>{price.sizeLabel}</span>
              <span className="font-semibold text-white-300">
                S/ {price.price}
              </span>
            </div>
          ))}

          <button
            onClick={() => addToCart(product, product.prices[0])}
            className="mt-5 w-full bg-white text-black font-semibold py-2 
              rounded-md hover:bg-gray-100 transition"
          >
            🛒 Añadir al carrito
          </button> 
        </div>
      </div>
    );
  }

  export default ProductCard;
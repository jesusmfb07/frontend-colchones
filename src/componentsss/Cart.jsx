import { useCart } from "../context/CartContextsss";

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="fixed top-4 right-4 bg-white shadow-2xl border border-gray-200 p-4 rounded-xl w-72 max-h-96 overflow-y-auto">
      <h2 className="font-bold text-xl mb-3 text-gray-700">
        🛒 Carrito
      </h2>

      {cart.length === 0 && (
        <p className="text-gray-500 text-sm">Tu carrito está vacío</p>
      )}

      {cart.map((item, i) => (
        <div
          key={i}
          className="flex justify-between items-center bg-gray-50 py-2 px-2 rounded-lg mb-2 border"
        >
          <span className="text-gray-700 font-medium text-sm">
            {item.product.model}
          </span>

          <button
            onClick={() => removeFromCart(i)}
            className="text-red-500 hover:text-red-700 font-bold text-lg"
          >
            ✕
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Finalizar compra
        </button>
      )}
    </div>
  );
}

export default Cart;

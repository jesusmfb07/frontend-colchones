import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-center text-xl tracking-widest mb-12">
        MÁS PARA TI
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {products.map(p => (
          <ProductCard product={p} key={p._id} />
        ))}
      </div>
    </div>
  );
}

export default Home;

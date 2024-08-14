import React, { useState } from "react";
import ProductCard from "../components/home/ProductCard";
import { getAllProducts } from "../services/apiServices";

function Home() {
  const [products, setProducts] = useState(null);

  if (!products) {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }

  if (!products) return null;

  return (
    <div className="p-8 grid grid-cols-3 gap-4">
      {products.map((product, index) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            rating={product.rating}
          />
        );
      })}
    </div>
  );
}

export default Home;

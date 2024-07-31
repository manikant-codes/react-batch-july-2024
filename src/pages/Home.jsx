import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/home/ProductCard";
import { getAllProducts } from "../services/apiServices";

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  if (!products) return null;

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {products.map((value) => {
          return (
            <ProductCard
              key={value.id}
              id={value.id}
              title={value.title}
              rating={value.rating.rate}
              image={value.image}
              price={value.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;

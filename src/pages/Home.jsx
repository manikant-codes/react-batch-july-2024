import React, { useState } from "react";
import ProductCard from "../components/home/ProductCard";
import {
  getAllCategories,
  getAllProducts,
  getProductsOfCategory,
} from "../services/apiServices";
import { Label, Radio } from "flowbite-react";

function Home() {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);

  if (!products) {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }

  if (!categories) {
    getAllCategories().then((data) => {
      setCategories(data);
    });
  }

  function handleChange(e) {
    if (e.target.value === "all") {
      getAllProducts().then((data) => {
        setProducts(data);
      });
    } else {
      getProductsOfCategory(e.target.value).then((data) => {
        setProducts(data);
      });
    }
  }

  if (!products) return null;
  if (!categories) return null;

  return (
    <div className="grid grid-cols-[256px_1fr]">
      {/* Sidebar Div */}
      <div className="border-r border-r-slate-300">
        <h2>Categories</h2>
        <ul className="flex flex-col gap-2 mt-4">
          <li key={"all"} className="flex gap-2 items-center">
            <Radio
              type="radio"
              name="category"
              id={"all"}
              value={"all"}
              onChange={handleChange}
            />
            <Label htmlFor={"all"}>{"all"}</Label>
          </li>
          {categories.map((category) => {
            return (
              <li key={category} className="flex gap-2 items-center">
                <Radio
                  type="radio"
                  name="category"
                  id={category}
                  value={category}
                  onChange={handleChange}
                />
                <Label htmlFor={category}>{category}</Label>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Products Div */}
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
    </div>
  );
}

export default Home;

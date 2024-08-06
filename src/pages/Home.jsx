import { Card, Checkbox, Label, Radio, Select } from "flowbite-react";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/home/ProductCard";
import {
  getAllCategories,
  getAllProducts,
  getCategoryProducts,
} from "../services/apiServices";

function Home({ cart, setCart }) {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    getAllProducts(sortOrder).then((data) => {
      setProducts(data);
    });
  }, [sortOrder]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  function handleChange(e) {
    if (e.target.value === "all") {
      getAllProducts().then((data) => {
        setProducts(data);
      });
    } else {
      getCategoryProducts(e.target.value).then((data) => {
        setProducts(data);
      });
    }
  }

  function handleSelect(e) {
    setSortOrder(e.target.value);
  }

  if (!products) return null;
  if (!categories) return null;

  return (
    <div className="p-8">
      <div className="flex justify-end mb-4">
        <Select className="w-fit" onChange={handleSelect}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
      </div>
      <div className="grid grid-cols-[200px_1fr] gap-4">
        <div>
          <h2 className="text-lg font-semibold">Categories</h2>
          <ul className="mt-2 flex flex-col gap-2">
            <li key={"all"} className="flex items-center gap-2">
              <Radio
                id={"all"}
                className="cursor-pointer"
                name="category"
                value={"all"}
                onChange={handleChange}
              />
              <Label htmlFor={"all"}>{"all"}</Label>
            </li>
            {categories.map((value) => {
              return (
                <li key={value} className="flex items-center gap-2">
                  <Radio
                    id={value}
                    className="cursor-pointer"
                    name="category"
                    value={value}
                    onChange={handleChange}
                  />
                  <Label htmlFor={value}>{value}</Label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {products.map((value) => {
            return (
              <ProductCard
                key={value.id}
                product={value}
                cart={cart}
                setCart={setCart}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;

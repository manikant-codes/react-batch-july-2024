import { Label, Radio, Select } from "flowbite-react";
import React, { useContext, useState } from "react";
import ProductCard from "../components/home/ProductCard";
import { useFetch } from "../hooks/useFetch";
import {
  getAllCategories,
  getAllProducts,
  getProductsOfCategory
} from "../services/apiServices";
import { cartCtx } from "../App";

function Home() {
  const [sort, setSort] = useState("asc");
  const { cart, setCart } = useContext(cartCtx);

  const {
    loading: loadingProducts,
    data: products,
    error: errorProducts,
    setData: setProducts
  } = useFetch(() => {
    return getAllProducts(sort);
  }, [sort]);

  const {
    loading: loadingCategories,
    data: categories,
    error: errorCategories
  } = useFetch(() => {
    return getAllCategories();
  }, []);

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

  function handleSortChange(e) {
    setSort(e.target.value);
    setProducts(null);
  }

  if (loadingProducts) return <p>Loading...</p>;
  if (loadingCategories) return <p>Loading...</p>;
  if (errorProducts) return <p>{errorProducts}</p>;
  if (errorCategories) return <p>{errorProducts}</p>;

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
          {categories?.map((category) => {
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
      <div>
        <div className="flex justify-end mr-8">
          <Select value={sort} onChange={handleSortChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Select>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.map((product, index) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
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

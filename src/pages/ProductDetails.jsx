import { Button } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../services/apiServices";
import { cartContext } from "../App";

function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const { cart, setCart } = useContext(cartContext);

  useEffect(() => {
    getSingleProduct(params.id).then((data) => {
      setProduct(data);
    });
  }, []);

  function handleAddToCart(e) {
    e.stopPropagation();
    const foundProduct = cart.find((value) => {
      if (value.id === product.id) {
        return true;
      }
      return false;
    });

    if (foundProduct) {
      const updatedCart = cart.map((value) => {
        if (value.id === foundProduct.id) {
          return { ...value, qty: value.qty + 1 };
        }
        return value;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  if (!product) return null;

  return (
    <div className="p-8 grid grid-cols-2 gap-4">
      <div className="h-[400px] overflow-hidden">
        <img
          src={product.image}
          alt=""
          className="h-full w-full object-contain border border-slate-300 p-8 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl">{product.title}</h3>
        <div className="flex gap-4">
          <p>Rating: {product.rating.rate}</p>
          <p>Number of Reviews: {product.rating.count}</p>
        </div>
        <div>
          <p className="text-2xl font-bold">${product.price}</p>
        </div>
        <div className="flex items-center gap-4 mt-8">
          <Button pill color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <Button pill color="primary">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../services/apiServices";
import Rating from "../components/home/Rating";
import { Button } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import { handleAddToCart } from "../components/home/ProductCard";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

function ProductDetails({ cart, setCart }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const params = useParams();

  // if (!product) {
  //   getSingleProduct(params.id).then((data) => {
  //     setProduct(data);
  //   });
  // }

  useEffect(() => {
    getSingleProduct(params.id)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <HiOutlineChevronDoubleDown className="text-5xl animate-bounce" />
      </div>
    );

  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="h-[400px] overflow-hidden border border-gray-300 rounded p-4">
        <img
          src={product.image}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <Rating rating={product.rating.rate} count={product.rating.count} />
        <p className="text-xl">${product.price}</p>
        <Button
          className="w-fit mt-8"
          onClick={(e) => {
            handleAddToCart(e, product, cart, setCart);
          }}
        >
          <HiPlus className="h-5 w-5 mr-2" /> Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductDetails;

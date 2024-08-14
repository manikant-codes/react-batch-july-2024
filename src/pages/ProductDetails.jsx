import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../services/apiServices";
import Rating from "../components/home/Rating";
import { Button } from "flowbite-react";
import { HiPlus } from "react-icons/hi";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const params = useParams();

  if (!product) {
    getSingleProduct(params.id).then((data) => {
      setProduct(data);
    });
  }

  if (!product) return null;

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
        <Button className="w-fit mt-8">
          <HiPlus className="h-5 w-5 mr-2" /> Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductDetails;

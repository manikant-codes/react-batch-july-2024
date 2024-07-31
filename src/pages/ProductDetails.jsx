import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../services/apiServices";

function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getSingleProduct(params.id).then((data) => {
      setProduct(data);
    });
  }, []);

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
      <div>
        <h3>{product.title}</h3>
        <div>
          <p>Rating: {product.rating.rate}</p>
          <p>Number of Reviews: {product.rating.count}</p>
        </div>
        <div>
          <p>${product.price}</p>
        </div>
        <div className="flex items-center gap-4">
          <Button pill color="primary">
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

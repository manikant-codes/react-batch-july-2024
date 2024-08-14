import { Button, Card } from "flowbite-react";
import React from "react";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";

function ProductCard({ id, title, price, image, rating }) {
  const navigate = useNavigate();

  function goToDetails() {
    navigate(`/product/${id}`);
  }

  return (
    <Card
      className="max-w-sm cursor-pointer"
      imgAlt={title}
      imgSrc={image}
      onClick={goToDetails}
    >
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <Rating rating={rating.rate} count={rating.count} />
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${price}
        </span>
        <Button>Add to cart</Button>
      </div>
    </Card>
  );
}

export default ProductCard;

import { Button } from "flowbite-react/components/Button";
import { Card } from "flowbite-react/components/Card";
import React from "react";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";

export function handleAddToCart(e, product, cart, setCart) {
  e.stopPropagation();
  const alreadyPresent = cart.find((cartItem) => {
    if (cartItem.id === product.id) {
      return true;
    }
    return false;
  });

  if (alreadyPresent) {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === product.id) {
        return { ...cartItem, qty: cartItem.qty + 1 };
      }
      return cartItem;
    });
    setCart(newCart);
  } else {
    setCart([...cart, { ...product, qty: 1 }]);
  }
}

function ProductCard({ cart, setCart, product }) {
  const { id, title, price, image, rating } = product;
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
        <Button
          onClick={(e) => {
            handleAddToCart(e, product, cart, setCart);
          }}
        >
          Add to cart
        </Button>
      </div>
    </Card>
  );
}

export default ProductCard;

import { Button, Card } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../App";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const value = useContext(cartContext);
  const { cart, setCart } = value;

  function goToDetails() {
    navigate(`/products/${product.id}`);
  }

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

  return (
    <Card
      className="max-w-sm border border-slate-300"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={product.image}
      onClick={goToDetails}
    >
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {product.title}
      </h5>
      <div className="mb-5 mt-2.5 flex items-center">
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          {product.rating.rate}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          ${product.price}
        </span>
        <Button pill size="xs" color={"primary"} onClick={handleAddToCart}>
          <span className="flex items-center gap-1">
            <HiPlus /> <span>Add to Cart</span>
          </span>
        </Button>
      </div>
    </Card>
  );
}

export default ProductCard;

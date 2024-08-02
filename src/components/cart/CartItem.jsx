import { Button } from "flowbite-react";
import React from "react";
import { HiTrash, HiPlus, HiMinus } from "react-icons/hi";

function CartItem({ product, cart, setCart }) {
  function handleDelete() {
    const updatedCart = cart.filter((value) => {
      if (value.id === product.id) {
        return false;
      }
      return true;
    });
    setCart(updatedCart);
  }

  function handleIncrease() {
    const updatedCart = cart.map((value) => {
      if (value.id === product.id) {
        return { ...value, qty: value.qty + 1 };
      }
      return value;
    });
    setCart(updatedCart);
  }

  function handleDecrease() {
    const updatedCart = cart.map((value) => {
      if (value.id === product.id) {
        if (value.qty > 1) {
          return { ...value, qty: value.qty - 1 };
        }
        return value;
      }
      return value;
    });
    setCart(updatedCart);
  }

  return (
    <div className="flex items-center gap-2 border-t pt-2 pb-2">
      <div className="h-[50px] w-[50px] overflow-hidden rounded-full border border-slate-400 shrink-0">
        <img src={product.image} alt="" />
      </div>
      <div className="flex flex-col gap-1 grow-[1]">
        <p className="text-sm">{product.title}</p>
        <p className="text-sm font-semibold">${product.price}</p>
        <div className="flex items-center gap-1">
          <Button size="xs" className="p-0" pill onClick={handleDecrease}>
            <HiMinus />
          </Button>
          <p>{product.qty}</p>
          <Button size="xs" className="p-0" pill onClick={handleIncrease}>
            <HiPlus />
          </Button>
        </div>
      </div>
      <div>
        <Button size="xs" pill onClick={handleDelete}>
          <HiTrash />
        </Button>
      </div>
    </div>
  );
}

export default CartItem;

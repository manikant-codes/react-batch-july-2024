import { Button } from "flowbite-react";
import React from "react";
import { HiMinus, HiPlus, HiTrash } from "react-icons/hi";

function CartItem({ product, cart, setCart }) {
  function handleDelete() {
    const newCart = cart.filter((value) => {
      if (value.id === product.id) {
        return false;
      }
      return true;
    });

    setCart(newCart);
  }

  function handleIncrease() {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === product.id) {
        if (cartItem.qty < 10) {
          return { ...cartItem, qty: cartItem.qty + 1 };
        }
        return cartItem;
      }
      return cartItem;
    });
    setCart(newCart);
  }

  function handleDecrease() {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === product.id) {
        if (cartItem.qty > 1) {
          return { ...cartItem, qty: cartItem.qty - 1 };
        }
        return cartItem;
      }
      return cartItem;
    });
    setCart(newCart);
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
          <Button onClick={handleDecrease} size="xs" className="p-0" pill>
            <HiMinus />
          </Button>
          <p>{product.qty}</p>
          <Button onClick={handleIncrease} size="xs" className="p-0" pill>
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

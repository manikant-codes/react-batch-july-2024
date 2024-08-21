import { Drawer } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import React from "react";
import CartItem from "./CartItem";

function CartDrawer({ isOpen, handleClose, cart, setCart }) {
  return (
    <div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Cart" titleIcon={HiShoppingCart} />
        {cart.map((cartItem) => {
          return <CartItem product={cartItem} cart={cart} setCart={setCart} />;
        })}
      </Drawer>
    </div>
  );
}

export default CartDrawer;

import { Drawer } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import React from "react";
import CartItem from "../components/cart/CartItem";

function CartDrawer({ cart, setCart, isOpen, toggleOpen }) {
  return (
    <Drawer position="right" open={isOpen} onClose={toggleOpen}>
      <Drawer.Header title="Cart" titleIcon={HiShoppingCart} />
      <div>
        {cart.map((value) => {
          return <CartItem product={value} cart={cart} setCart={setCart} />;
        })}
      </div>
    </Drawer>
  );
}

export default CartDrawer;

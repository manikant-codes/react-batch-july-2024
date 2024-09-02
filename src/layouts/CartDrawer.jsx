import { Drawer } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import React, { useContext } from "react";
import CartItem from "../components/cart/CartItem";
import { cartContext } from "../App";
import { useSelector } from "react-redux";

function CartDrawer({ isOpen, toggleOpen }) {
  const value = useContext(cartContext);
  const { setCart } = value;
  const cart = useSelector((store) => {
    return store.cart.cartList;
  });
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

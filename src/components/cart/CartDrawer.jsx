import { Drawer } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import React from "react";

function CartDrawer({ isOpen, handleClose }) {
  return (
    <div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Cart" titleIcon={HiShoppingCart} />
        <Drawer.Items></Drawer.Items>
      </Drawer>
    </div>
  );
}

export default CartDrawer;

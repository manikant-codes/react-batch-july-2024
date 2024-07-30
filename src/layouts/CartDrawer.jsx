import { Drawer } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import React from "react";

function CartDrawer(props) {
  console.log(props);
  return (
    <Drawer position="right" open={props.isOpen} onClose={props.toggleOpen}>
      <Drawer.Header title="Cart" titleIcon={HiShoppingCart} />
    </Drawer>
  );
}

export default CartDrawer;

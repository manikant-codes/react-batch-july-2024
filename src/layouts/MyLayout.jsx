import React from "react";
import Navbar from "./MyNavbar";
import Footer from "./MyFooter";
import { Outlet } from "react-router-dom";

function MyLayout({ cart, setCart }) {
  return (
    <>
      <Navbar cart={cart} setCart={setCart} />
      <Outlet />
      <Footer />
    </>
  );
}

export default MyLayout;

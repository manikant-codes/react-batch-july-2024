import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ cart, setCart }) {
  return (
    <>
      <Navbar cart={cart} setCart={setCart} />
      <div className="p-8">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;

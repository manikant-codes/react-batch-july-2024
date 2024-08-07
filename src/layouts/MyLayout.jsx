import React from "react";
import Navbar from "./MyNavbar";
import Footer from "./MyFooter";
import { Outlet } from "react-router-dom";

function MyLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MyLayout;

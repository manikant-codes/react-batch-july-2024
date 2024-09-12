import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MoveToTop from "../components/demo/MoveToTop";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <Outlet />
      </div>
      <MoveToTop />
      <Footer />
    </>
  );
}

export default Layout;

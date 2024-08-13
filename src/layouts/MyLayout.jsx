import React from "react";
import Navbar from "./MyNavbar";
import Footer from "./MyFooter";
import { Outlet } from "react-router-dom";
import MySidebar from "./MySidebar";

function MyLayout() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-[256px_1fr]">
        <MySidebar />
        <div className="p-8">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyLayout;

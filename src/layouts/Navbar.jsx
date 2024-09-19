import { Button } from "flowbite-react/components/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartDrawer from "../components/cart/CartDrawer";

const links = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Contact", link: "/contact" }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="px-8 py-4 flex items-center justify-between shadow">
        <h1 className="text-3xl font-bold">Ecom Express</h1>
        <ul className="flex gap-8 items-center">
          {links.map(function (value, index, array) {
            return (
              <li key={index}>
                <Link to={value.link}>{value.name}</Link>
              </li>
            );
          })}
          <li>
            <Button onClick={handleToggle}>Cart</Button>
          </li>
        </ul>
      </nav>
      <CartDrawer isOpen={isOpen} handleClose={handleToggle} />
    </>
  );
}

export default Navbar;

import { Button, Navbar, NavbarLink } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY_NAME, LOGO } from "../consts/consts";
import CartDrawer from "./CartDrawer";

const links = [
  { link: "/", text: "Home" },
  { link: "/about", text: "About" },
  { link: "/faqs", text: "FAQs" },
  { link: "/contact", text: "Contact" },
];

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img src={LOGO} className="mr-3 h-6 sm:h-9" alt={COMPANY_NAME} />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            {COMPANY_NAME}
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button
            pill
            size="sm"
            className=""
            color="primary"
            onClick={toggleOpen}
          >
            <span className="flex items-center gap-1">
              <HiShoppingCart className="w-4 h-4" />
              <span>Cart</span>
            </span>
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {links.map((value) => {
            return (
              <NavbarLink as={Link} to={value.link}>
                {value.text}
              </NavbarLink>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
      <CartDrawer isOpen={isOpen} toggleOpen={toggleOpen} />
    </>
  );
}

export default MyNavbar;

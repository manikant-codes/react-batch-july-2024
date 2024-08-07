import { Button, Navbar, NavbarLink } from "flowbite-react";
import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

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
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            React
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
    </>
  );
}

export default MyNavbar;

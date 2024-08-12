import { Button, Navbar, NavbarLink } from "flowbite-react";
import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { COMPANY_NAME, LOGO } from "../consts/consts";

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
      <Navbar fluid rounded border>
        <Navbar.Brand href="/">
          <img src={LOGO} className="mr-3 h-6 sm:h-9" alt={COMPANY_NAME} />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            {COMPANY_NAME}
          </span>
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default MyNavbar;

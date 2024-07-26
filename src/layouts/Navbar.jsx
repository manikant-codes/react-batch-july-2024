import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className="flex justify-between items-center px-8 py-6 bg-indigo-900 text-white fixed top-0 left-0 right-0 z-[1000]">
        <h1 className="text-4xl font-bold">Indigo</h1>
        <ul
          className={`flex gap-4 md:gap-8 overflow-hidden transition-all duration-300 bg-[#6764a7] md:bg-transparent flex-col md:flex-row fixed md:static top-[88px] md:top-[unset] left-[0] md:left-[unset] right-[0] md:right-[unset] ${
            showMenu ? "p-8" : "p-0"
          } md:p-0 ${
            showMenu ? "h-[calc(100vh_-_88px)]" : "h-[0px]"
          } md:h-auto z-[1000]`}
        >
          <li onClick={toggleMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/faqs">FAQs</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/work">Work</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button className="block md:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="h-[88px]" />
    </>
  );
}

export default Navbar;

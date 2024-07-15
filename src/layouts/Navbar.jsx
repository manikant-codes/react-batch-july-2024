import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { link: "/", text: "Home" },
  { link: "/about", text: "About" },
  { link: "/faqs", text: "FAQs" },
  { link: "/work", text: "Work" },
  { link: "/contact", text: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="flex fixed top-0 left-0 right-0 z-[1000] justify-between items-center px-8 py-6 bg-indigo-900 text-white">
        <h1 className="text-4xl font-bold">Indigo</h1>
        <ul
          className={`flex gap-8 overflow-hidden z-[1000] flex-col md:flex-row transition-all md:transition-none bg-[rgba(66,68,187,0.8)] md:bg-transparent fixed md:static top-[88px] md:top-auto left-0 md:left-auto right-0 md:right-auto md:h-auto md:p-0 ${
            isOpen ? "h-[calc(100vh-88px)] p-8" : "h-[0px] p-0"
          }`}
        >
          {links.map((value, index) => {
            return (
              <li key={index} onClick={toggleOpen}>
                <Link to={value.link}>{value.text}</Link>
              </li>
            );
          })}
        </ul>
        <button className="block md:hidden" onClick={toggleOpen}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="h-[88px]" />
    </>
  );
}

export default Navbar;

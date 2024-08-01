import React from "react";
import { Link } from "react-router-dom";

const links = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Contact", link: "/contact" },
];

function Navbar() {
  return (
    <nav className="px-8 py-4 flex items-center justify-between shadow">
      <h1 className="text-3xl font-bold">Bhagavad Gita</h1>
      <ul className="flex gap-8">
        {links.map(function (value, index, array) {
          return (
            <li>
              <Link to={value.link}>{value.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;

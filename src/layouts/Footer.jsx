import React from "react";
import { Link } from "react-router-dom";

const links = [
  { id: 1, name: "Privacy", link: "/privacy" },
  { id: 2, name: "Contact", link: "/contact" },
];

function Footer() {
  return (
    <div className="px-8 py-4 flex justify-between border-t">
      <p>Ecom Express</p>
      <ul className="flex gap-4">
        {links.map(function (value, index) {
          return (
            <li key={index}>
              <Link to={value.link}>{value.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductsList() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(width);

  return (
    <div>
      {width >= 550 && (
        <ul>
          <li>
            <Link to="/details/1">Product 1</Link>
          </li>
          <li>
            <Link to="/details/2">Product 2</Link>
          </li>
        </ul>
      )}
      {width < 550 && <h1>Hello</h1>}
    </div>
  );
}

export default ProductsList;

import React, { useEffect, useState } from "react";

function EffectsBasics() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // console.log(2 + 2);
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("data", data);
    //   })
    //   .catch((error) => {
    //     console.log("Error: ", error);
    //   });

    const id = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    const mydiv = document.getElementById("mydiv");
    mydiv.style.backgroundColor = "red";

    return () => {
      clearTimeout(id);
    };
  }, [count]);
  return <div id="mydiv">EffectsBasics {count}</div>;
}

export default EffectsBasics;

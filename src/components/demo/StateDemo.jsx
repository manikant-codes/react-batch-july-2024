import React, { useState } from "react";

function StateDemo() {
  //   let count = 0;

  const stateArr = useState(0);

  console.log("stateArr", stateArr);

  const count = stateArr[0];
  const setCount = stateArr[1];

  function increment() {
    // count++;
    // console.log(count);
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      {/* <p>{count}</p> */}
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default StateDemo;

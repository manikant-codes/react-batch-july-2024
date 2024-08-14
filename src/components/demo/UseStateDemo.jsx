import React, { useState } from "react";

function myfunction(props) {}

function UseStateDemo(props) {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
    console.log("count", count);
  }

  myfunction(props);
  myfunction(count);

  return (
    <div className="p-8">
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

export default UseStateDemo;

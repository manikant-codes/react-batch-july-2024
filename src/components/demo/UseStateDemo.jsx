import React, { useState } from "react";

function UseStateDemo(props) {
  console.log("props", props.name);
  //   let count = 0;
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
    console.log("count", count);
  }

  return (
    <div className="p-8">
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

export default UseStateDemo;

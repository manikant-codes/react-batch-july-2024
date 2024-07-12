import React, { useState } from "react";

function StateDemo() {
  // let count = 0;
  // console.log("stateArray", stateArray);
  const [count, setCount] = useState(0);
  // OR
  // const count = stateArray[0];
  // const setCount = stateArray[1];

  function decrement() {
    // count--;
    // console.log(count);
    setCount(count - 1);
  }

  function increment() {
    // count++;
    // console.log(count);
    setCount(count + 1);
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="bg-indigo-200 p-8 rounded-lg flex items-center gap-6 shadow-md">
        <button
          onClick={decrement}
          className="h-[30px] w-[30px] bg-indigo-600 rounded text-white text-2xl flex items-center justify-center"
        >
          <span className="pb-1">-</span>
        </button>
        <p className="text-4xl">{count}</p>
        <button
          onClick={increment}
          className="h-[30px] w-[30px] bg-indigo-600 rounded text-white text-2xl flex items-center justify-center"
        >
          <span className="pb-1">+</span>
        </button>
      </div>
    </div>
  );
}

export default StateDemo;

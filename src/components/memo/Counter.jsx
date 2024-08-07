import { Button } from "flowbite-react";
import React, { memo } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

function Counter({ count, setCount }) {
  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  console.log("Counter Rerendered");

  return (
    <div className="flex gap-4 items-center">
      <Button onClick={decrement}>
        <HiMinus />
      </Button>
      <p className="text-3xl font-semibold">{count}</p>
      <Button onClick={increment}>
        <HiPlus />
      </Button>
    </div>
  );
}

export default memo(Counter);

import { Button } from "flowbite-react";
import React, { useReducer } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

function reducer(cake, action) {
  if (action.type === "buy") {
    return cake - 1;
  } else if (action.type === "restock") {
    return cake + action.payload;
  } else {
    return cake;
  }
}

function UseReducerDemo() {
  const [cake, dispatch] = useReducer(reducer, 10);

  function buyCake() {
    dispatch({ type: "buy" });
  }
  function restockCake() {
    dispatch({ type: "restock", payload: 10 });
  }
  return (
    <div>
      <div className="flex items-center gap-4 p-4 bg-orange-200 rounded-md">
        <Button onClick={buyCake}>
          <HiMinus />
        </Button>
        <p className="text-2xl">{cake}</p>
        <Button onClick={restockCake}>
          <HiPlus />
        </Button>
      </div>
    </div>
  );
}

export default UseReducerDemo;

import { Button } from "flowbite-react";
import React, { useReducer } from "react";

function reducer(cake, action) {
  if (action.type === "restock") {
    return cake + action.payload;
  } else if (action.type === "buy") {
    return cake - action.payload;
  } else {
    return cake;
  }
}

function UseReducerDemo() {
  // const [count, setCount] = useState(0);
  const [cake, dispatch] = useReducer(reducer, 10);

  function handleBuy() {
    dispatch({ type: "buy", payload: 2 });
  }

  function handleRestock() {
    dispatch({ type: "restock", payload: 5 });
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-2xl">Cake Count: {cake}</p>
      <div className="flex gap-4">
        <Button onClick={handleBuy}>Buy</Button>
        <Button onClick={handleRestock}>Restock</Button>
      </div>
    </div>
  );
}

export default UseReducerDemo;

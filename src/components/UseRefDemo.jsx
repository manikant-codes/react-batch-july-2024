import React, { useRef, useState } from "react";

function UseRefDemo() {
  //   let count = 0;
  //   const [count, setCount] = useState(0);
  //   const count = useRef(0);
  const [redender, setRerender] = useState();
  const btnRef = useRef(null);

  console.log(btnRef);

  return (
    <div>
      <button
        onClick={() => {
          //   count--;
          //   console.log(count);
          //   setCount(count - 1);
          //   count.current--;
          //   console.log(count.current);
        }}
      >
        Decrease
      </button>
      <p></p>
      {/* <p>{count}</p> */}
      {/* <p>{count.current}</p> */}
      <button
        onClick={() => {
          //   count++;
          //   console.log(count);
          //   setCount(count + 1);
          //   count.current++;
          //   console.log(count.current);
        }}
      >
        Increase
      </button>
      <button
        ref={btnRef}
        onClick={() => {
          setRerender(new Date());
        }}
      >
        Rerender
      </button>
    </div>
  );
}

export default UseRefDemo;

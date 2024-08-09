import React, { useEffect, useRef } from "react";
import { useState } from "react";

function UseRefDemo() {
  //   const [renderCount, setRenderCount] = useState(0);
  const [input, setInput] = useState("");
  const countRef = useRef(0);

  console.log("Rendered");

  useEffect(() => {
    // setRenderCount(renderCount + 1);
    countRef.current++;
    console.log(countRef.current);
  }, [input]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {/* <p>Render-Count: {renderCount}</p> */}
      <p>Render-Count: {countRef.current}</p>
    </div>
  );
}

export default UseRefDemo;

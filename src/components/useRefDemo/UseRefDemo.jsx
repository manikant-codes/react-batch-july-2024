import React, { useEffect, useRef, useState } from "react";

function UseRefDemo() {
  const [input, setInput] = useState("");
  const countRef = useRef(0);
  const inputRef = useRef("");
  const domRef = useRef(null);
  //   const [renderCount, setRenderCount] = useState(0);

  function handleChange(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    // setRenderCount(renderCount + 1);
    countRef.current++;
    inputRef.current = input;
    console.log(countRef.current);
    document.getElementById("rerender").style.backgroundColor = "orange";
    domRef.current.style.backgroundColor = "green";
  }, [input]);

  console.log(domRef);

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <p>{input}</p>
      {/* <p>Render Count: {renderCount}</p> */}
      <p id="rerender">Re-Render Count: {countRef.current}</p>
      <p ref={domRef}>Prev Value: {inputRef.current}</p>
    </div>
  );
}

export default UseRefDemo;

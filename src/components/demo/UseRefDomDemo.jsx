import React, { useEffect } from "react";
import { useRef } from "react";

function UseRefDomDemo() {
  const titleRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    // document.getElementById("title").style.color = "red";
    titleRef.current.style.color = "red";
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1 ref={titleRef} id="title" className="text-4xl">
        Hello
      </h1>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default UseRefDomDemo;

import React, { useEffect, useRef } from "react";

function UseRefDomDemo() {
  const divRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      divRef.current.style.backgroundColor = "purple";
    }, 2000);
  }, []);

  return (
    <div>
      <div ref={divRef} id="mydiv">
        Hello
      </div>
    </div>
  );
}

export default UseRefDomDemo;

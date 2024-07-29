import React, { useEffect } from "react";

function UseEffectDOMDemo() {
  useEffect(() => {
    document.getElementById("mydiv").style.backgroundColor = "red";
  }, []);

  return (
    <div>
      <div id="mydiv" className="p-8">
        Hello
      </div>
    </div>
  );
}

export default UseEffectDOMDemo;

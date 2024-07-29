import React, { useEffect, useState } from "react";

function UseEffectTimerDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    // Clean Up Function
    return () => {
      clearTimeout(id);
    };
  }, [count]);

  return (
    <div className="p-8 text-4xl flex items-center justify-center">{count}</div>
  );
}

export default UseEffectTimerDemo;

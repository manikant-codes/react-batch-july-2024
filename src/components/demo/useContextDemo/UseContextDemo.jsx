import React, { createContext, useState } from "react";
import ComponentA from "./ComponentA";

export const nameCtx = createContext();

function UseContextDemo() {
  const [name, setName] = useState("Ram");
  return (
    <nameCtx.Provider value={name}>
      <ComponentA />
    </nameCtx.Provider>
  );
}

export default UseContextDemo;

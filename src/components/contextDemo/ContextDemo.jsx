import React, { createContext, useEffect, useState } from "react";
import ComponentA from "./ComponentA";
import ComponentE from "./ComponentE";

export const userCtx = createContext();

console.log("userCtx", userCtx);

function ContextDemo() {
  const [user, setUser] = useState("ram");
  return (
    <>
      <userCtx.Provider value={{ user, number: 10, city: "Surat" }}>
        <ComponentA />
      </userCtx.Provider>
      <ComponentE />
    </>
  );
}

export default ContextDemo;

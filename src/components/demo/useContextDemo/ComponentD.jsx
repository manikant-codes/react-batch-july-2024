import React, { useContext } from "react";
import { nameCtx } from "./UseContextDemo";

function ComponentD() {
  const value = useContext(nameCtx);
  return <div>Hello, {value}</div>;
}

export default ComponentD;

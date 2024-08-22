import React, { useContext } from "react";
import { userCtx } from "./ContextDemo";

function ComponentD() {
  const value = useContext(userCtx);
  return <div>Hello, {value.user}</div>;
}

export default ComponentD;

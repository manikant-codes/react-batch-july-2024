import React, { useContext } from "react";
import { userCtx } from "./ContextDemo";

function ComponentE() {
  const value = useContext(userCtx);
  console.log("from e", value);
  return <div>ComponentE</div>;
}

export default ComponentE;

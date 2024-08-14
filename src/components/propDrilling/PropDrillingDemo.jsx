import React, { useState } from "react";
import ComponentA from "./ComponentA";

function PropDrillingDemo() {
  const [user, setUser] = useState("Ram");
  return (
    <div>
      <ComponentA user={user} />
    </div>
  );
}

export default PropDrillingDemo;

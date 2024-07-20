import React from "react";
import Student from "./Student";

function App() {
  return (
    <div>
      <Student name="John Doe" age={32} address={{ city: "New York" }} />
      <Student name="Jenny Wilson" age={28} address={{ city: "Houston" }} />
      <Student name="Marry Miller" age={42} />
    </div>
  );
}

export default App;

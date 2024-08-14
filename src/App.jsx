import React from "react";
import Student from "./Student";
import UseStateDemo from "./components/demo/UseStateDemo";
import MyForm from "./components/form/MyForm";
import EffectsDemo from "./components/effects/EffectsDemo";
import PropDrillingDemo from "./components/propDrilling/PropDrillingDemo";
import EffectsBasics from "./components/effects/EffectsBasics";

function App() {
  return (
    <div>
      {/* <UseStateDemo name="Ram" age={15} /> */}
      {/* <MyForm /> */}
      {/* <EffectsDemo /> */}
      {/* <PropDrillingDemo /> */}
      <EffectsBasics />
    </div>
  );
}

export default App;

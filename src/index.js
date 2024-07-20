import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const props = {
//   name: "Deep",
// };

// props.name;

const root = ReactDOM.createRoot(document.getElementById("my-element"));

// const h1 = React.createElement(
//   "h1",
//   { style: { backgroundColor: "red" } },
//   "Hello"
// );
// root.render(h1);
// OR
// root.render(<h1>Hello</h1>);

// function sayHello(name, age, city) {
//   return <h1>{name}</h1>;
// }

// function SayHello(props) {
//   console.log("props: ", props);
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.address.city}</h1>
//     </div>
//   );
// }

// root.render(sayHello("Deep"));
// root.render(<SayHello name="Deep" age={19} address={{ city: "Surat" }} />);

root.render(<App />);

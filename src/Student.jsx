import React from "react";

function Student(props) {
  console.log("props", props);

  let element;
  if (props.address && props.address.city) {
    element = <h1>{props.address.city}</h1>;
  } else {
    element = <h1>N/A</h1>;
  }

  return (
    <div
      style={{
        padding: "16px",
        margin: "16px",
        backgroundColor: "#f5c3bf",
      }}
    >
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      {/* <h1>{ props.address && (props.address.city ? props.address.city : "N/A")}</h1> */}
      {element}
    </div>
  );
}

export default Student;

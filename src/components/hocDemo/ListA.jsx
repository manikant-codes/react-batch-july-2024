import React from "react";

const data = ["Apple", "Mango", "Cherry"];

function ListA(props) {
  return (
    <div>
      <h1 className="text-xl">My List A</h1>
      <hr />
      {data.map((value, index) => {
        return (
          <p key={index}>
            {index + 1}. {value}
          </p>
        );
      })}
      <hr />
    </div>
  );
}

export default ListA;

import React from "react";

const data = ["Pepsi", "Sprite", "Maza"];

function ListB() {
  return (
    <div>
      {data.map((value, index) => {
        return (
          <p key={index}>
            {index + 1}. {value}
          </p>
        );
      })}
    </div>
  );
}

export default ListB;

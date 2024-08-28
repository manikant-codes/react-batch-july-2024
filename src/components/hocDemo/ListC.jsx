import React from "react";

const data = ["Spinach", "Brinjal", "Cauliflower"];

function ListC() {
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

export default ListC;

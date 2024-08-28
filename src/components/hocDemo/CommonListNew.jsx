import React from "react";

function CommonListNew({ list, title }) {
  return (
    <div>
      <h1 className="text-xl bg-purple-400">{title}</h1>
      <hr />
      {list.map((value, index) => {
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

export default CommonListNew;

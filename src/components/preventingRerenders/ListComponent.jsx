import React, { memo, useState } from "react";

function ListComponent({ list, addTask }) {
  console.log("Rendered");

  return (
    <div className="flex flex-col gap-4 bg-purple-200 p-4">
      <ul className="flex flex-col gap-4 bg-purple-200 rounded">
        {list.map((value, index) => {
          return (
            <li key={index}>
              {value} {index + 1}
            </li>
          );
        })}
      </ul>
      <button
        onClick={addTask}
        className="bg-purple-700 w-fit px-4 py-2 rounded text-white"
      >
        Add New
      </button>
    </div>
  );
}

export default memo(ListComponent);

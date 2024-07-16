import React from "react";

const tabs = [
  { id: 1, name: "All" },
  { id: 2, name: "App" },
  { id: 3, name: "Card" },
  { id: 4, name: "Web" },
];

function Tabs() {
  return (
    <div>
      <ul className="flex gap-4 justify-center">
        {tabs.map((value) => {
          return (
            <li
              key={value.id}
              className="cursor-pointer bg-indigo-300 hover:bg-indigo-500 hover:text-white py-2 px-4 rounded-[32px]"
            >
              {value.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tabs;

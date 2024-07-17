import React from "react";

const tabs = [
  { id: 1, name: "All" },
  { id: 2, name: "App" },
  { id: 3, name: "Card" },
  { id: 4, name: "Web" },
];

function Tabs(props) {
  return (
    <div>
      <ul className="flex gap-4 justify-center">
        {tabs.map((tab) => {
          return (
            <li
              key={tab.id}
              className={`cursor-pointer ${
                props.activeTab === tab.id
                  ? "bg-indigo-500 text-white"
                  : "bg-indigo-300 text-black"
              }  hover:bg-indigo-500 hover:text-white py-2 px-4 rounded-[32px]`}
              onClick={function () {
                props.handleTabClick(tab.id);
              }}
            >
              {tab.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tabs;

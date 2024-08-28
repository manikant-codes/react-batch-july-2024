import React from "react";
import listHOC from "./listHOC";
import CommonList from "./CommonList";
import CommonListNew from "./CommonListNew";

const dataA = ["Apple", "Mango", "Cherry"];
const dataB = ["Pepsi", "Sprite", "Maza"];
const dataC = ["Spinach", "Brinjal", "Cauliflower"];

const ListA = listHOC(CommonList, dataA, "List A");
const ListB = listHOC(CommonListNew, dataB, "List B");
const ListC = listHOC(CommonList, dataC, "List C");

function HOCDemo() {
  return (
    <div>
      {/* <ListA /> */}
      <CommonList list={dataA} title="List A" />
      <ListB />
      <ListC />
    </div>
  );
}

export default HOCDemo;

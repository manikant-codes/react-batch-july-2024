import React from "react";
import AccordianItem from "./AccordianItem";

const data = [
  {
    id: 1,
    que: "Lorem ipsum dolor sit amet.",
    ans: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, eos illo deleniti corporis velit quibusdam?",
  },
  {
    id: 2,
    que: "Lorem ipsum dolor sit amet.",
    ans: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, eos illo deleniti corporis velit quibusdam?",
  },
  {
    id: 3,
    que: "Lorem ipsum dolor sit amet.",
    ans: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, eos illo deleniti corporis velit quibusdam?",
  },
  {
    id: 4,
    que: "Lorem ipsum dolor sit amet.",
    ans: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, eos illo deleniti corporis velit quibusdam?",
  },
];

function Accordion() {
  return (
    <div className="flex flex-col gap-2">
      {data.map((faq) => {
        return <AccordianItem faq={faq} />;
      })}
    </div>
  );
}

export default Accordion;

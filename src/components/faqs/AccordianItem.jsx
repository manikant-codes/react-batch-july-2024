import {
  faChevronCircleDown,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function AccordianItem(props) {
  const [isOpen, setIsOpen] = useState(false);
  //   OR
  //   const isOpen = arr[0];
  //   const setIsOpen = arr[1];

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="bg-indigo-100 p-4 rounded-lg border border-indigo-300">
      <div className="flex justify-between">
        <p>
          <span>{props.faq.id}</span> <span>{props.faq.que}</span>
        </p>
        <button onClick={toggleOpen}>
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronCircleUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronCircleDown} />
          )}
        </button>
      </div>
      {isOpen && <p>{props.faq.ans}</p>}
    </div>
  );
}

export default AccordianItem;

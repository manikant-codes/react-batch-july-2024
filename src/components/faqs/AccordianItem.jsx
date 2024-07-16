import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function AccordianItem(props) {
  const Arr = useState();
  const isopen = Arr[0];
  const setIsopen = Arr[1];

  function toggleopen() {
    setIsopen(!isopen);
  }
  return (
    <div className="bg-indigo-100 p-4 rounded-lg border border-indigo-300">
      <div className="flex justify-between">
        <p>
          <span>{props.faq.id}</span> <span>{props.faq.que}</span>
        </p>
        <button onClick={toggleopen}>
          {isopen ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
      </div>

      {isopen && <p>{props.faq.ans}</p>}
    </div>
  );
}

export default AccordianItem;

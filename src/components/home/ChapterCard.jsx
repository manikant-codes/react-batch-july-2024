import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

function ChapterCard(props) {
  const navigate = useNavigate();
  function goToChapter() {
    navigate(`/chapter/${props.number}`);
  }
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
      onClick={goToChapter}
    >
      <p className="text-[#f57903] text-base font-bold">
        CHAPTER {props.number}
      </p>
      <p className="text-xl font-bold">{props.name}</p>
      <p className="text-slate-500 my-3">{props.summary}</p>
      <p>
        <FontAwesomeIcon icon={faList} className="mr-4" /> {props.verses} Verses
      </p>
    </div>
  );
}

export default ChapterCard;

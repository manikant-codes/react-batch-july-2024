import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ChapterCard(props) {
  const { chapterNo, title, desc, verseCount } = props;
  return (
    <div className="bg-amber-50 border border-amber-300 p-4 rounded-lg">
      <p className="text-[#f57903] font-bold">Chapter {chapterNo}</p>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-slate-700 mt-2 mb-4 line-clamp-6">{desc}</p>
      <p className="flex items-center gap-2">
        <FontAwesomeIcon icon={faBars} />
        <span>{verseCount} Verses</span>
      </p>
    </div>
  );
}

export default ChapterCard;

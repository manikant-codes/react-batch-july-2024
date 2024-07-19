import React from "react";
import ChapterCard from "./ChapterCard";

function Chapters(props) {
  return (
    <div className="p-8 bg-[#fff5dd]">
      <h2 className="text-4xl font-bold">Chapters</h2>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {props.chapters.map((value) => {
          return (
            <ChapterCard
              number={value.chapter_number}
              name={value.name_meaning}
              summary={value.chapter_summary}
              verses={value.verses_count}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Chapters;

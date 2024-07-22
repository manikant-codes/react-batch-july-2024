import React, { useState } from "react";
import { getSingleChapter } from "../../services/apiServices";
import { useParams } from "react-router-dom";

function ChapterSummary() {
  const [chapter, setChapter] = useState(null);
  const params = useParams();
  console.log(params);

  if (!chapter) {
    getSingleChapter(params.id).then((data) => {
      setChapter(data);
    });
  }

  if (!chapter) return null;

  return (
    <div className="flex flex-col">
      <p className="text-lg font-semibold text-[#f57903] text-center">
        CHAPTER {chapter.chapter_number}
      </p>
      <h3 className="mt-2 mb-8 text-3xl font-bold text-center">
        {chapter.name_translated}
      </h3>
      <p className="max-w-4xl text-lg mx-auto">{chapter.chapter_summary}</p>
    </div>
  );
}

export default ChapterSummary;

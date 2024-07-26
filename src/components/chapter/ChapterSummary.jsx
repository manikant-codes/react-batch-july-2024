import React, { useEffect, useState } from "react";
import { getSingleChapter } from "../../services/apiServices";
import { useParams } from "react-router-dom";
import Loading from "../common/Loading";

function ChapterSummary() {
  const [chapter, setChapter] = useState(null);
  const params = useParams();

  useEffect(() => {
    getSingleChapter(params.id).then((data) => {
      setChapter(data);
    });
  }, [params.id]);

  if (!chapter)
    return (
      <>
        <Loading />
      </>
    );

  return (
    <div className="max-w-4xl flex flex-col mx-auto">
      <p className="text-lg font-semibold text-[#f57903] text-center">
        CHAPTER {chapter.chapter_number}
      </p>
      <h3 className="mt-2 mb-8 text-3xl font-bold text-center">
        {chapter.name_translated}
      </h3>
      <p className="text-lg mx-auto">{chapter.chapter_summary}</p>
    </div>
  );
}

export default ChapterSummary;

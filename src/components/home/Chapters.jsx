import React, { useState } from "react";
import ChapterCard from "./ChapterCard";
import { getAllChapters } from "../../services/apiServices";

function Chapters() {
  const [chapters, setChapters] = useState(null);

  if (!chapters) {
    const promise = getAllChapters();
    promise.then((data) => {
      setChapters(data);
    });
  }

  if (!chapters) return null;

  return (
    <div>
      <h2 className="text-3xl font-bold">Chapters</h2>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {chapters.map((chapter) => {
          return (
            <ChapterCard
              chapterNo={chapter.chapter_number}
              title={chapter.name_translated}
              desc={chapter.chapter_summary}
              verseCount={chapter.verses_count}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Chapters;

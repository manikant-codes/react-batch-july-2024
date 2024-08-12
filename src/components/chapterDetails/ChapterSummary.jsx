import React, { useState } from "react";
import { getSingleChapter } from "../../services/apiServices";
import { useParams } from "react-router-dom";

function ChapterSummary() {
  const [chapter, setChapter] = useState(null);
  const params = useParams();

  if (!chapter) {
    getSingleChapter(params.id).then((data) => {
      setChapter(data);
    });
  }

  if (!chapter) return null;

  return (
    <div>
      <section class="relative mx-auto max-w-5xl px-4 py-24 text-center font-inter sm:px-6">
        <h3 class="font-medium uppercase text-my-orange text-paragraph">
          Chapter {chapter.chapter_number}
        </h3>
        <h1 class="my-8 font-extrabold dark:text-white text-4xl">
          {chapter.name_translated}
        </h1>
        <p class="mt-3 text-left dark:text-white text-paragraph leading-loose">
          {chapter.chapter_summary}
        </p>
      </section>
    </div>
  );
}

export default ChapterSummary;

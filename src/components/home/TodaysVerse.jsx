import React, { useEffect, useState } from "react";
import { verseCount } from "../../data/data";
import { getParticularVerse } from "../../services/apiServices";

function TodaysVerse() {
  const [verse, setVerse] = useState(null);

  function getRandomVerseId() {
    const chapterId = Math.floor(Math.random() * 18) + 1;
    const verseId = Math.floor(Math.random() * verseCount[chapterId]) + 1;
    return [chapterId, verseId];
  }

  const [chapterId, verseId] = getRandomVerseId();

  useEffect(() => {
    getParticularVerse(chapterId, verseId).then((data) => {
      setVerse(data);
    });
  }, []);

  if (!verse) return null;

  const englishTranslation = verse.translations.find((v) => {
    return v.language === "english";
  });

  return (
    <div className="my-8">
      <div class="rounded-xl bg-white px-12 pb-8 pt-5 text-gray-400 shadow-lg dark:bg-dark-100">
        <h2 class="divider line one-line mb-4 px-4 font-bold text-my-orange">
          Verse of the day - BG {verse.chapter_number}.{verse.verse_number}
        </h2>
        <p class="text-lg">{englishTranslation.description}</p>
        <button class="mt-4 text-sm font-bold uppercase text-black hover:text-gray-700 focus:outline-none dark:text-white dark:hover:text-gray-400">
          <a href={`/chapter/${chapterId}/verse/${verseId}`}>See more</a>
        </button>
      </div>
    </div>
  );
}

export default TodaysVerse;

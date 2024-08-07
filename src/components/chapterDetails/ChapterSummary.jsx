import React, { useState } from "react";
import { getSingleChapter } from "../../services/apiServices";
import { useParams } from "react-router-dom";

function ChapterSummary() {
  const [chapter, setChapter] = useState(null);
  const params = useParams();

  if (!chapter) {
    getSingleChapter(params.id).then((data) => {
      setChapter(data);
      console.log("data", data);
    });
  }

  return (
    <div>
      <section class="relative mx-auto max-w-5xl px-4 py-24 text-center font-inter sm:px-6">
        <h3 class="font-medium uppercase text-my-orange text-paragraph">
          Chapter 1
        </h3>
        <h1 class="my-8 font-extrabold dark:text-white text-4xl">
          Arjuna Visada Yoga
        </h1>
        <p class="mt-3 text-left dark:text-white text-paragraph leading-loose">
          The first chapter of the Bhagavad Gita - "Arjuna Vishada Yoga"
          introduces the setup, the setting, the characters and the
          circumstances that led to the epic battle of Mahabharata, fought
          between the Pandavas and the Kauravas. It outlines the reasons that
          led to the revelation of the of Bhagavad Gita. As both armies stand
          ready for the battle, the mighty warrior Arjuna, on observing the
          warriors on both sides becomes increasingly sad and depressed due to
          the fear of losing his relatives and friends and the consequent sins
          attributed to killing his own relatives. So, he surrenders to Lord
          Krishna, seeking a solution. Thus, follows the wisdom of the Bhagavad
          Gita.
        </p>
      </section>
    </div>
  );
}

export default ChapterSummary;

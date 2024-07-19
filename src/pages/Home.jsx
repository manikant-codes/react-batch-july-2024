import React, { useState } from "react";
import Hero from "../components/home/Hero";
import VerseOfTheDay from "../components/home/VerseOfTheDay";
import Chapters from "../components/home/Chapters";
import { getAllChapters } from "../services/apiServices";

function Home() {
  const [chapters, setChapters] = useState(null);

  if (!chapters) {
    const data = getAllChapters().then((data) => {
      setChapters(data);
    });
  }

  if (!chapters) return null;

  return (
    <>
      <Hero url="https://bhagavadgita.io/_next/image?url=%2Fbanner2.png&w=1080&q=75" />
      <VerseOfTheDay />
      <Chapters chapters={chapters} />
    </>
  );
}

export default Home;

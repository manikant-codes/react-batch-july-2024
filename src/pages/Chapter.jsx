import React from "react";
import ChapterSummary from "../components/chapter/ChapterSummary";
import Verses from "../components/chapter/Verses";

function Chapter() {
  return (
    <div className="p-8">
      <ChapterSummary />
      <Verses />
    </div>
  );
}

export default Chapter;

import React from "react";

function VerseOfTheDay() {
  return (
    <div className="p-8">
      <div className="bg-white shadow-md rounded-lg p-8 flex flex-col gap-4">
        <p className="text-xl font-bold text-[rgb(245,121,3)]">
          Verse of the day - BG 4.36
        </p>
        <p className="text-lg">
          Even if thou art the most sinful of all sinners, yet thou shalt surely
          cross over all sins by the raft of knowledge.
        </p>
        <button className="w-fit font-bold">See More</button>
      </div>
    </div>
  );
}

export default VerseOfTheDay;

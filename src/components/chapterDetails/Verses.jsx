import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getAllVerses } from "../../services/apiServices";

function Verses() {
  const [verses, setVerses] = useState(null);
  const params = useParams();

  if (!verses) {
    getAllVerses(params.id).then((data) => {
      setVerses(data);
      console.log("data", data);
    });
  }

  if (!verses) return null;

  return (
    <div>
      {verses.map((value) => {
        return (
          <div class="mx-auto max-w-5xl px-4 font-inter sm:px-6">
            <a href="/chapter/1/verse/1">
              <div class="flex w-full flex-col justify-between rounded-lg px-6 py-2 hover:cursor-pointer hover:bg-box-bg dark:hover:bg-dark-100 lg:flex-row lg:py-5">
                <div class="font-medium uppercase text-my-orange lg:w-1/5 leading-loose">
                  Verse {value.verse_number}
                </div>
                <div class="flex-1 text-gray-900 dark:text-gray-50 sm:col-span-4 sm:mt-0 leading-loose">
                  {value.translations[0].description}
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Verses;

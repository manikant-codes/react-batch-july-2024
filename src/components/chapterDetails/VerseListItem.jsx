import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function VerseListItem({ value }) {
  const navigate = useNavigate();
  const params = useParams();

  const englishTranslation = value.translations.find((value, index, array) => {
    if (value.language === "english") {
      return true;
    }
    return false;
  });

  function goToVerseDetails() {
    navigate(`/chapter/${params.id}/verse/${value.verse_number}`);
  }

  return (
    <div
      class="mx-auto max-w-5xl px-4 font-inter sm:px-6"
      onClick={goToVerseDetails}
    >
      <div class="flex w-full flex-col justify-between rounded-lg px-6 py-2 hover:cursor-pointer hover:bg-box-bg dark:hover:bg-dark-100 lg:flex-row lg:py-5">
        <div class="font-medium uppercase text-my-orange lg:w-1/5 leading-loose">
          Verse {value.verse_number}
        </div>
        <div class="flex-1 text-gray-900 dark:text-gray-50 sm:col-span-4 sm:mt-0 leading-loose">
          {englishTranslation.description}
        </div>
      </div>
    </div>
  );
}

export default VerseListItem;

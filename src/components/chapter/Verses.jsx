import React, { useState } from "react";
import { getAllVerses } from "../../services/apiServices";
import { useNavigate, useParams } from "react-router-dom";

function Verses() {
  const [verses, setVerses] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  if (!verses) {
    getAllVerses(params.id).then((data) => {
      setVerses(data);
    });
  }

  function goToVerseDetails(verseId) {
    navigate(`/chapter/${params.id}/verse/${verseId}`);
  }

  if (!verses) return null;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mt-8 py-4 border-t border-b">
        <p className="text-xl font-bold">{verses.length} Versers</p>
      </div>
      <div>
        <ul className="flex flex-col gap-4 my-8">
          {verses.map((verse) => {
            const englishTranslation = verse.translations.find((value) => {
              return value.language === "english";
            });
            return (
              <li
                className="flex items-center gap-8 border-b py-4 cursor-pointer"
                onClick={() => {
                  goToVerseDetails(verse.id);
                }}
              >
                <p className="text-[#f57903] shrink-0">
                  VERSE {verse.verse_number}
                </p>
                <p>{englishTranslation.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Verses;

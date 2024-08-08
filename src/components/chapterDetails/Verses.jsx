import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getAllVerses } from "../../services/apiServices";
import VerseListItem from "./VerseListItem";

function Verses() {
  const [verses, setVerses] = useState(null);
  const params = useParams();

  if (!verses) {
    getAllVerses(params.id).then((data) => {
      setVerses(data);
    });
  }

  if (!verses) return null;

  return (
    <div>
      {verses.map((value) => {
        return <VerseListItem value={value} />;
      })}
    </div>
  );
}

export default Verses;

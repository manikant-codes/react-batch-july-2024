export function getAllChapters() {
  const promise = fetch(
    "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "fa01877758msh83537b5a81e1c29p16d732jsnab8ca9c33787",
        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    // .then((data) => {
    //   return data;
    // })
    .catch((error) => {
      console.log("Error: ", error);
    });

  return promise;
}

export function getSingleChapter(id) {
  return fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "fa01877758msh83537b5a81e1c29p16d732jsnab8ca9c33787",
      "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

export function getAllVerses(chapterId) {
  return fetch(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterId}/verses/`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "fa01877758msh83537b5a81e1c29p16d732jsnab8ca9c33787",
        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

export function getSingleVerse(chapterId, verseId) {
  return fetch(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterId}/verses/${verseId}/`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "fa01877758msh83537b5a81e1c29p16d732jsnab8ca9c33787",
        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

export function getAllChapters() {
  return fetch(
    "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18",
    {
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
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

export function getSingleChapter(chapterId) {
  return fetch(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterId}/`,
    {
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
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

export function getAllVerses(chapterId) {
  return fetch(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterId}/verses/`,
    {
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
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

export function getParticularVerse(chapterId, verseId) {
  return fetch(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterId}/verses/${verseId}/`,
    {
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

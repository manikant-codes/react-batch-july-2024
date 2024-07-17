export function getAllChapters() {
  fetch("https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "fa01877758msh83537b5a81e1c29p16d732jsnab8ca9c33787",
      "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
    },
  })
    .then((response) => {
      response
        .json()
        .then((data) => {
          console.log("data", data);
        })
        .catch(() => {});
    })
    .catch(() => {});
}

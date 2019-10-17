const functions = require("firebase-functions");

const json = [
  {
    title: "Titanic",
    year: 1997,
    rating: 4.5,
    tags: ["Drama", "Romance"],
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the " +
      "luxurious, ill-fated R.M.S. Titanic.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg"
  }
];

exports.movies = functions.https.onRequest((request, response) => {
  response.send(json);
});

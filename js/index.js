import { BASE_URL } from "./api/config.js";
import { getTrending, getTrendingMovie, getSearchPeople } from "./api/trendingGetters.js";






getTrendingMovie();
getSearchPeople();
getTrending();








/*

const trendingData = getTrending().then(data => {
  data.results.forEach(movie => {
      console.log("ID: " + movie.id);
      console.log("Poster_path: " + movie.poster_path);
      console.log("Title: " + movie.title);
      console.log("Vote_average: " + movie.vote_average);
      console.log("Media_type: " + movie.media_type );
      console.log("Release_date: " + movie.release_date + "\n");
  });
});


console.log(trendingData);


*/



getTrending()
  .then((data) => {
    data.results.forEach((element) => {
      switch (element.media_type) {
        case "movie":
          console.log("\n FILM: \n");
          let titolo = element.title;
          console.log("titolo: " + titolo);

          let release_date = element.release_date;
          console.log("release date:" + release_date);
          break;
        case "tv":
          console.log("\n SERIE TV: \n");
          let nome = element.name;
          console.log("nome: " + nome);

          let firstAirDate = element.first_air_date;
          console.log(firstAirDate);
          break;
      }
      let id = element.id;
      console.log("id:" + id);

      let poster_path = element.poster_path;
      console.log("poster path:" + poster_path);

      let media_type = element.media_type;
      console.log("media type: " + media_type);


    });
  });


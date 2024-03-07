import { getTrending, getTrendingMovie, getSearchPeople } from "./api/trendingGetters.js";
import {baseUrl} from "./api/config.js";

getTrending(baseUrl);
getTrendingMovie(baseUrl);
getSearchPeople(baseUrl);


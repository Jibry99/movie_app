import { getTrending, getTrendingMovie } from "./api/trendingGetters.js";
import {baseUrl} from "./api/config.js";

getTrending(baseUrl);
getTrendingMovie(baseUrl);


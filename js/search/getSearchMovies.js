import { BASE_SEARCH_URL } from "./config.js";
import {OPTS} from "../api/config.js"



export const getSearchMovies = async (query) => {

        const response = await fetch(`${BASE_SEARCH_URL}${query}`, OPTS);
    
        const data = await response.json();
    
        return data;
}

getSearchMovies("star");
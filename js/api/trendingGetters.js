import { BASE_URL, OPTS } from  "./config.js";

const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
const url2 = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';



export const getTrending = async () => {

    const response = await fetch(BASE_URL + 'trending/all/day?language=en-US', OPTS);

    const data = await response.json();

    return data;
}


/** getTrendingMovies 
 *
 * @param baseUrl
 * @return film  di tendenza
 
getTrending();
*/ 

export const getTrendingMovie = async () => {

    const response = await fetch(BASE_URL + 'trending/movie/day?language=en-US', OPTS);

    const data = await response.json();

    return data;
}


export const getSearchPeople = async () => {

    const response = await fetch(BASE_URL + 'search/person'+ '?query=Jason Statham', OPTS);

    const data = await response.json();

    return data;
}


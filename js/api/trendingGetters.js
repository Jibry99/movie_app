const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
const url2 = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';


const opts = {
    headers: {
        "Content-type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjVhYmJjNDY3ZWY2MGQ0OTRiMjYzZmVmYTQ3MGE5YSIsInN1YiI6IjY1ZTdhM2YyNTFmOTlhMDE2MmZiYzJlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EsFoOSQrXGooVUQiQq4j02cYOcDKkWGu8fXqQcA9PI0"
    },
}

export const getTrending = async (baseUrl) => {

    const response = await fetch(baseUrl + 'trending/all/day?language=en-US', opts);

    const data = await response.json();

    return data;
}


/** getTrendingMovies 
 *
 * @param baseUrl
 * @return film  di tendenza
 
getTrending();
*/ 

export const getTrendingMovie = async (baseUrl) => {

    const response = await fetch(baseUrl + 'trending/movie/day?language=en-US', opts);

    const data = await response.json();

    return data;
}


export const getSearchPeople = async (baseUrl) => {

    const response = await fetch(baseUrl + 'search/person'+ '?query=Jason Statham', opts);

    const data = await response.json();

    return data;
}


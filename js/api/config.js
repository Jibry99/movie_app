//import dotenv from 'dotenv';

export const BASE_URL = 'https://api.themoviedb.org/3/';

//dotenv.config();






export const OPTS = {
    method: 'GET',
    headers: {
        "Content-type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjVhYmJjNDY3ZWY2MGQ0OTRiMjYzZmVmYTQ3MGE5YSIsInN1YiI6IjY1ZTdhM2YyNTFmOTlhMDE2MmZiYzJlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EsFoOSQrXGooVUQiQq4j02cYOcDKkWGu8fXqQcA9PI0`
    },
};
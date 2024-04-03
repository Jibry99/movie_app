/**
 * handleSearch deve:
 * 1. Recuperare il tag input grazie all'id
 * 2. deve recuperare il contenuto del tag input
 * 3. deve chiamare la funzione getSerachMovies passando il valore dell'input alla funzione come parametro
 * 4. @return deve restituire il risultato della chiamata getSearchMovies
 */

import { getSearchMovies } from "./getSearchMovies.js" 

export const handleSearch = async () => {

//1.
    const queryInput = document.getElementById("query-input");
//2.
    const queryInputValue = queryInput.value;
//3.
    const result = await getSearchMovies(queryInputValue);

    return result;
}
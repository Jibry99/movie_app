/**
 * createTrendingmovieslist
 * la funzione prenderà in ingresso un array di film (movies) per ogni movie aggiungerà al dom un nuovo nodo che sarà un tag li contenente il titolo del movie
 * @param prendere l'array di film come parametro 
 * @return 
 * 
 * stampare non solo movies ma anche gli altri media
 * che sia indipedente dall'id
 */


export const createTrendingMoviesList = (movies, divId) => {
    const cardContainer = document.getElementById(divId);
    cardContainer.classList.add("row"); // Aggiungi la classe "row" per allineare le card

    movies.results.forEach((element) => {
        const card = document.createElement('div');
        card.classList.add("col-md-2", "mb-5","mx-3", "custom-card-height"); // Aggiungi le classi Bootstrap per le colonne e il margine inferiore

        const textContainer = document.createElement('div');
        textContainer.classList.add("card-body"); // Aggiungi la classe "card-body" per il contenitore del testo

        const image = document.createElement('img');
        image.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
        image.alt = 'poster';
        image.classList.add("card-img-top"); // Aggiungi la classe "card-img-top" per l'immagine

        const title = document.createElement('h5');
        title.classList.add("card-title"); // Aggiungi la classe "card-title" per il titolo
        title.innerText = element.title;

        const description = document.createElement('p');
        description.classList.add("card-text"); // Aggiungi la classe "card-text" per la descrizione
        description.innerText = element.overview;

        const date = document.createElement('p');
        date.classList.add("card-text"); // Aggiungi la classe "card-text" per la data di rilascio
        date.innerHTML = element.release_date;

        textContainer.appendChild(title);
        textContainer.appendChild(description);
        textContainer.appendChild(date);

        card.appendChild(image);
        card.appendChild(textContainer);
        card.classList.add("card"); // Aggiungi la classe "card" per la card stessa
        
        card.style.width = "20rem"; // Imposta la larghezza della card

        cardContainer.appendChild(card);
    });
};


export const createTrendingSeriesList = (movies, divId) => {
    const cardContainer = document.getElementById(divId);
    cardContainer.classList.add("row"); // Aggiungi la classe "row" per allineare le card

    movies.results.forEach((element) => {
        const card = document.createElement('div');
        card.classList.add("col-md-2", "mb-5","mx-3", "custom-card-height"); // Aggiungi le classi Bootstrap per le colonne e il margine inferiore

        const textContainer = document.createElement('div');
        textContainer.classList.add("card-body"); // Aggiungi la classe "card-body" per il contenitore del testo

        const image = document.createElement('img');
        image.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
        image.alt = 'poster';
        image.classList.add("card-img-top"); // Aggiungi la classe "card-img-top" per l'immagine

        const name = document.createElement('h5');
        name.classList.add("card-title"); // Aggiungi la classe "card-title" per il titolo
        name.innerText = element.name;

        const description = document.createElement('p');
        description.classList.add("card-text"); // Aggiungi la classe "card-text" per la descrizione
        description.innerText = element.overview;

        const date = document.createElement('p');
        date.classList.add("card-text"); // Aggiungi la classe "card-text" per la data di rilascio
        date.innerHTML = element.first_air_date;

        textContainer.appendChild(name);
        textContainer.appendChild(description);
        textContainer.appendChild(date);

        card.appendChild(image);
        card.appendChild(textContainer);
        card.classList.add("card"); // Aggiungi la classe "card" per la card stessa

        card.style.width = "20rem"; // Imposta la larghezza della card

        cardContainer.appendChild(card);
    });
};


export const createTrendingMoviesList2 = (movies, divId) => {
    const cardContainer = document.getElementById(divId);
    cardContainer.classList.add("row"); // Aggiungi la classe "row" per allineare le card

    movies.results.forEach((element) => {
        const card = document.createElement('div');
        card.classList.add("col-md-2", "mb-5", "mx-3", "custom-card-height"); // Aggiungi le classi Bootstrap per le colonne e il margine inferiore

        const textContainer = document.createElement('div');
        textContainer.classList.add("card-body"); // Aggiungi la classe "card-body" per il contenitore del testo

        const image = document.createElement('img');
        image.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
        image.alt = 'poster';
        image.classList.add("card-img-top"); // Aggiungi la classe "card-img-top" per l'immagine

        const title = document.createElement('h5');
        title.classList.add("card-title"); // Aggiungi la classe "card-title" per il titolo
        title.innerText = element.title;

        const description = document.createElement('p');
        description.classList.add("card-text"); // Aggiungi la classe "card-text" per la descrizione
        description.innerText = element.overview;

        const date = document.createElement('p');
        date.classList.add("card-text"); // Aggiungi la classe "card-text" per la data di rilascio
        date.innerHTML = element.release_date;

        textContainer.appendChild(title);
        textContainer.appendChild(description);
        textContainer.appendChild(date);

        card.appendChild(image);
        card.appendChild(textContainer);
        card.classList.add("card"); // Aggiungi la classe "card" per la card stessa
        
        card.style.width = "20rem"; // Imposta la larghezza della card

        // Aggiungi un pulsante per espandere la descrizione
        const toggleButton = document.createElement('button');
        toggleButton.classList.add("btn", "btn-primary", "mt-2");
        toggleButton.innerText = "Mostra descrizione";
        card.appendChild(toggleButton);

        // Aggiungi un'area per la descrizione a tendina
        const dropdown = document.createElement('div');
        dropdown.classList.add("dropdown");
        dropdown.style.display = "none"; // Inizialmente nascondi la descrizione a tendina
        const dropdownContent = document.createElement('div');
        dropdownContent.classList.add("dropdown-content");
        dropdown.appendChild(dropdownContent);
        card.appendChild(dropdown);

        // Aggiungi l'evento di click al pulsante per mostrare/nascondere la descrizione a tendina
        toggleButton.addEventListener('click', () => {
            if (dropdown.style.display === "none") {
                dropdown.style.display = "block";
                toggleButton.innerText = "Nascondi descrizione";
            } else {
                dropdown.style.display = "none";
                toggleButton.innerText = "Mostra descrizione";
            }
        });

        cardContainer.appendChild(card);
    });
};







/** 
 * Vecchio creatore di card FILM basato su codice senza bootstrap
 * 
 * 
export const createTrendingMoviesList = (movies, divId) => {

    const cardContainer = document.getElementById(divId);

    cardContainer.classList.add("horizontalScroll");

    movies.results.forEach((element) => {

        const card= document.createElement('div');


        const textContainer= document.createElement('div');


        const image= document.createElement('img');
            image.src =`https://image.tmdb.org/t/p/w500${element.poster_path}`;
            image.alt = 'poster';

        const title= document.createElement('h1');
            title.innerText = element.title;

        const description= document.createElement('p');
            description.innerText= element.overview;

            const date = document.createElement('p');
            date.innerHTML= element.release_date;
        
        textContainer.appendChild(title);

        textContainer.appendChild(description);
        
        textContainer.appendChild(date)

        card.appendChild(textContainer);

        card.appendChild(image);
        card.classList.add("movieCard");

        cardContainer.appendChild(card);
    });
};

*/

/**
 * Vecchio creatore di card SERIE basato su codice senza bootstrap
 * 
 * 
export const createTrendingSeriesList = (movies, divId) => {

    const cardContainer = document.getElementById(divId);

    cardContainer.classList.add("horizontalScroll");

    movies.results.forEach((element) => {

        const card= document.createElement('div');


        const textContainer= document.createElement('div');


        const image= document.createElement('img');
            image.src =`https://image.tmdb.org/t/p/w500${element.poster_path}`;
            image.alt = 'poster';

        const name= document.createElement('h1');
            name.innerText = element.name;

        const description= document.createElement('p');
            description.innerText= element.overview;
        
        textContainer.appendChild(name);

        textContainer.appendChild(description);

        card.appendChild(textContainer);

        card.appendChild(image);
        card.classList.add("movieCard");

        cardContainer.appendChild(card);
    });
};

 */

/**
 * Primissimo creatore di risultati pescati dal database di film e serie
 * con il metodo forEach attinge dall'originale array restituito dalla chiamata Data.Result.film/serie
 * 
export const createTrendingList = (movies, listId) => {

    const list = document.getElementById(listId);

    movies.results.forEach((element) => {
        const listItem = document.createElement("li");
        switch (movies.results.media_type) {
            case 'tv':
                listItem.innerHTML =element.name;
                list.appendChild(listItem);
                break;
            case 'movie':
                listItem.textContent =element.title;
                list.appendChild(listItem);
                break;
                
        }

        
    });
};
 */
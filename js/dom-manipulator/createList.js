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






const apiKey = '977ed025515af5100a62a22770595d94';
const dataUrl = 'https://api.themoviedb.org/3';
const imageUrl = 'https://image.tmdb.org/t/p/w500';

async function fetchTrendingMovies() {
    const url = `${dataUrl}/trending/movie/day?api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Помилка мережі: ' + response.status);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Помилка отримання даних:", error);
    }
}

async function fetchMovieDetails(movieId){
    const url = `${dataUrl}/movie/${movieId}?api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Помилка мережі: ' + response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Помилка отримання даних:", error);
    }
}

async function displayTrendingMovies(){
    const movies = await fetchTrendingMovies();
    const trendMovies = document.querySelector('.trend-movies');
    const movieList = document.createElement('ul');
    trendMovies.appendChild(movieList);
    movies.forEach(movie => {
        const liMovie = document.createElement('li');
        liMovie.style.fontSize = '20px';
        liMovie.style.lineHeight = '30px';
        liMovie.style.listStyleType = 'none';
        liMovie.innerHTML = `${movie.title}`;
        liMovie.addEventListener('click', () => displayMovieDetails(movie.id));
        movieList.appendChild(liMovie);
    });
};

async function displayMovieDetails(movieId){
    const details = await fetchMovieDetails(movieId);
    const trendMoviesContainer = document.querySelector('.trend-movies-container');
    const detailsMovie = document.createElement('p');
    detailsMovie.style.width = '300px';
    detailsMovie.style.border = '1px solid lightblue';
    detailsMovie.style.padding = '10px';
    detailsMovie.style.fontSize = '16px';
    trendMoviesContainer.appendChild(detailsMovie);
    detailsMovie.innerHTML = `<img src="${imageUrl}${details.poster_path}" alt="${details.title}" style="width: 200px;"><br>
    <h3><strong>Назва:</strong> ${details.title}<br></h3>
    <p><strong>Опис:</strong> ${details.overview}<br></p>
    <strong>Дата випуску:</strong> ${details.release_date}<br>
    <strong>Рейтинг: </strong>${details.vote_average}<br>
    <strong>Тривалість:</strong> ${details.runtime} хвилин`;
}

displayTrendingMovies();





export{fetchTrendingMovies, fetchMovieDetails};
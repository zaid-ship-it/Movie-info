const apiKey = 'e7fb5387aa3d81a1520b8146b3983fc3'; // Your approved API key

// Function to fetch data based on query
async function searchMovieOrGame(query) {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Function to fetch trending movies
async function fetchTrendingMovies() {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results.slice(0, 20);
    } catch (error) {
        console.error('Error fetching trending movies:', error);
        return [];
    }
}

// Function to fetch movies by genre
async function fetchMoviesByGenre(genreId) {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results.slice(0, 20);
    } catch (error) {
        console.error(`Error fetching movies by genre: ${genreId}`, error);
        return [];
    }
}

// Function to fetch movie or game details by ID
async function fetchDetailsById(id, type) {
    const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching details:', error);
        return null;
    }
}

import React from 'react';
import { useState, useEffect } from 'react';


import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard'


// 15ba7908
// const movie1 = {
//     "Title": "Shrek",
//     "Year": "2001",
//     "imdbID": "tt0126029",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// }
const API_URL = "http://omdbapi.com?apikey=15ba7908"
const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [tooltip, setTooltip] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(`searching for ${title}`);
        console.log(data.Search);
        setMovies(data.Search);
        setTooltip('No movies found. Please try again!')

    }

    useEffect(() => {
        //searchMovies('shrek');
        setTooltip('Search for movies!')
    }, []);

    return (
        <div className="app">
            <h1>Peter's Movie Emporium</h1>
            <div className="search">
                <input
                    placeholder="Search for movies!"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            searchMovies(searchTerm)
                        }
                    }}
                />
                <button
                    className='button'
                    onClick={() => searchMovies(searchTerm)}
                >
                    <img src={SearchIcon} alt="search" />
                </button>
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>{tooltip}</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default App;
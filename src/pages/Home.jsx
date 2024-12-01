import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { movies } from '../pages/moviesData';
import NavBar from '../components/NavBar';

const Home = () => {
  return (
    <div>
      < NavBar />
      <h1>Home Page</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <MovieCard movie={movie} />
            <Link to={`/movie/${movie.id}`}>View Info</Link> {/* Add a link to movie details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

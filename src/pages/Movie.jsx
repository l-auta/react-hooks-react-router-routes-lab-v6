import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../pages/moviesData';
import NavBar from '../components/NavBar';

const Movie = () => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div>
      < NavBar />
      <h1>{movie.title}</h1>
      <p>Duration: {movie.duration} minutes</p>
      <h3>Genres:</h3>
      <div>
        {movie.genres.map((genre, idx) => (
          <span key={idx} className="genre">
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Movie;

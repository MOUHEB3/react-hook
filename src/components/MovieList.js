import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img src={movie.posterURL} alt={movie.title} className="movie-card-image" />
            <div className="movie-card-content">
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <div className="rating">Rating: {movie.rating}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

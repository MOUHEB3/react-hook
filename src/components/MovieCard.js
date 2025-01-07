import React from 'react';
import { Link } from 'react-router-dom'; // Add the Link component from react-router-dom

const MovieCard = ({ title, description, posterURL, rating, movieURL }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} className="movie-card-image" />
      <div className="movie-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="rating">Rating: {rating}</p>
        {/* Add a link to the movie URL */}
        <a href={movieURL} target="_blank" rel="noopener noreferrer" className="movie-url">
          Watch Now
        </a>
      </div>
    </div>
  );
};

export default MovieCard;

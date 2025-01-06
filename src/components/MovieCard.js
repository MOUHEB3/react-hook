import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} className="movie-card-image" />
      <div className="movie-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="rating">⭐ {rating}</span>
      </div>
    </div>
  );
};

export default MovieCard;

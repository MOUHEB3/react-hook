import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  const extractVideoId = (url) => {
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com(?:\/(?:[^/\n\s]+\/\S+|(?:v|e(?:mbed)?)\/(\S+))|\/(\S+))|youtu\.be\/(\S+))/;
    const match = url.match(regExp);
    return match ? match[1] : '';
  };

  const trailerEmbedUrl = movie.trailerLink ? `https://www.youtube.com/embed/${extractVideoId(movie.trailerLink)}` : null;

  return (
    <div className="movie-description">
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      {trailerEmbedUrl && (
        <iframe
          title={`Trailer for ${movie.title}`}
          src={trailerEmbedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      <button className="back-button" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default MovieDescription;

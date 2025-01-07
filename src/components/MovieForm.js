import React, { useState } from 'react';

const MovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');
  const [movieURL, setMovieURL] = useState(''); // New state for movie URL

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && posterURL && rating && movieURL) {
      addMovie({ title, description, posterURL, rating: parseFloat(rating), movieURL }); // Add movie URL to the movie object
      setTitle('');
      setDescription('');
      setPosterURL('');
      setRating('');
      setMovieURL(''); // Reset the movie URL input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="movie-input"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="movie-input"
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        className="movie-input"
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="movie-input"
      />
      <input
        type="text"
        placeholder="Movie URL"
        value={movieURL}
        onChange={(e) => setMovieURL(e.target.value)} // Handle movie URL input
        className="movie-input"
      />
      <button type="submit" className="submit-button">Add Movie</button>
    </form>
  );
};

export default MovieForm;

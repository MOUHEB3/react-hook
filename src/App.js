import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import Filter from './components/Filter';
import MovieDescription from './components/MovieDescription';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'The Dark Knight',
      description: 'Batman faces the Joker in Gotham City.',
      posterURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA',
      rating: 9,
      trailerLink: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
    },
    {
      id: 2,
      title: 'The Matrix',
      description: 'Neo discovers the truth about the Matrix.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWXVvfvZR3oe7PCMM0exwV0dObOTKvLfSM-bjvKpQ1VegKXuCtq6aBrxqbIgUNxMbfavy',
      rating: 8.7,
      trailerLink: 'https://www.youtube.com/watch?v=vKQi3bBA1y8',
    },
    {
      id: 3,
      title: 'Interstellar',
      description: 'A team of astronauts travels through a wormhole to save humanity.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX',
      rating: 8.6,
      trailerLink: 'https://www.youtube.com/watch?v=0vxOhd4q4Xo',
    },
    {
      id: 4,
      title: 'Inception',
      description: 'A thief enters the dreams of others to steal secrets.',
      posterURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw',
      rating: 8.8,
      trailerLink: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      (movie.title.toLowerCase().includes(filterTitle.toLowerCase()) || !filterTitle) &&
      (movie.rating >= filterRating || !filterRating)
    );
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <h1 className="app-title">Movie App</h1>
              <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
              <MovieList movies={filteredMovies} />
              <MovieForm addMovie={addMovie} />
            </div>
          }
        />
        <Route
          path="/movie/:id"
          element={<MovieDescription movies={movies} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

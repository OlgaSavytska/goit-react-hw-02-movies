import React from 'react';
import MovieCard from './components/MovieCard/MovieCard';
import movie from './components/movies';

function App() {
  return <MovieCard movie={movie} />;
}

export default App;

import React from 'react';

import m from './movies';
import MovieGrid from './MovieGrid/MovieGrid';


const App = () => {
  return <MovieGrid m={m} />;
}

export default App;

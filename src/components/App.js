import React from 'react';
import m from './movies';
import MovieGrid from './MovieGrid/MovieGrid';
import SeachBar from './SeachBar/SeachBar';


const App = () => {
  return (
    <>
      <SeachBar />
      <MovieGrid m={m} />
    </>
  )
}

export default App;

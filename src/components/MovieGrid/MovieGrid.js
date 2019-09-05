import React from 'react';
import styled02 from './MovieGrid.module.css'

import MovieCard from '../MovieCard/MovieCard';

const MovieGrid = ({ m }) => {
  return (
    <ul className={styled02.contentUl}>
      {m.map(m => (
        <MovieCard key={m.id} m={m} />
      ))}
    </ul>
  )
}


export default MovieGrid;

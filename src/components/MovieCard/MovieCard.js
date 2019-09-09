import React from 'react';
import PropTypes from 'prop-types';
import style01 from './MovieCard.module.css';

const MovieCard = ({ posterUrl, title, overview }) => {
  return (
    <div className={style01.movie_card}>
      <img alt="imager" src={posterUrl} />
      <div className={style01.content}>
        <h2 className={style01.title}>{title}</h2>
        <p className={style01.descr}>{overview}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieCard;

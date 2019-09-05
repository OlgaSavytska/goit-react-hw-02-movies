import React from 'react';
import PropTypes from 'prop-types';
import style01 from './MovieCard.module.css';

const MovieCard = ({ m }) => {
  const { id, posterUrl, title, overview } = m;
  return (
    <div key={id} className={style01.movieCard} >
      <img className={style01.img} alt="imager" src={posterUrl} />
      <h2 className={style01.title}>{title}</h2>
      <p className={style01.overview}>{overview}</p>
    </div>
  )
}


MovieCard.defaultProps = {
  alt: 'image',
  m: []
};

MovieCard.propTypes = {
  m: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      posterUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }).isRequired)
    .isRequired,
}


export default MovieCard;

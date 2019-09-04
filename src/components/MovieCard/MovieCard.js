import React from 'react';
import PropTypes from 'prop-types';
import style01 from './MovieCard.module.css';

const MovieCard = ({ movie, alt, id, posterUrl, title, overview }) => (
  <div key={id} className={style01.movieCard} >
    <img className={style01.img} alt={alt}>{posterUrl}</img>
    <div className={style01.content}>
      <h2 className={style01.title}>{title}</h2>
      <p className={style01.descr}>{overview}</p>
    </div>
  </div>
)

MovieCard.defaultProps = {
  alt: 'image',
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    descr: PropTypes.string.isRequired,
  }).isRequired,
}


export default MovieCard;

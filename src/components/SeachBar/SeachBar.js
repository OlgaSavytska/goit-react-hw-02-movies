import React from 'react';
import PropTypes from 'prop-types';
import style04 from './SeachBar.module.css';

const SeachBar = ({ value, onChange }) => {
  return (
    <input
      value={value}
      type="text"
      placeholder="search"
      className={style04.input}
      onChange={onChange}
    />
  );
};

SeachBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SeachBar;

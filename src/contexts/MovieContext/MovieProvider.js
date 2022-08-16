import { MovieContext } from './MovieContext';
import PropTypes from 'prop-types';
import { useState } from 'react';

const propTypes = {
  children: PropTypes.node.isRequired,
};

export const MovieProvider = ({ children }) => {
  const [movieDescription, setMovieDescription] = useState(null);
  const value = { movieDescription, setMovieDescription };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

MovieProvider.propTypes = propTypes;

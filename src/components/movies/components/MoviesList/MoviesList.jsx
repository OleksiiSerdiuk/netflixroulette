import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import './moviesList.scss';
import { movieTypes } from '../../../../helpers/typesData';

const MoviesList = ({ moviesList }) => {
  if (!moviesList) {
    return;
  }

  const renderMovie = (movie) => {
    return (
      <li key={movie.id}>
        <MovieCard movie={movie} />
      </li>
    );
  };

  return (
    <ul className='movies-list'>
      {moviesList.map((movie) => renderMovie(movie))}
    </ul>
  );
};

const propTypes = {
  moviesList: PropTypes.arrayOf(movieTypes),
};

const defaultProps = {
  movies: [],
};

MoviesList.propTypes = propTypes;
MoviesList.defaultProps = defaultProps;

export default MoviesList;

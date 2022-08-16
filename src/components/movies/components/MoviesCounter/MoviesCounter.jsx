import PropTypes from 'prop-types';
import './moviesCounter.scss';

const MoviesCounter = ({ count }) => {
  return (
    <div className='movies-counter'>
      <span className='movies-counter__count'>{count || '?'} </span>
      <span className='movies-counter__text'>movies found</span>
    </div>
  );
};

const propTypes = {
  count: PropTypes.number,
};

const defaultProps = {
  count: 39,
};

MoviesCounter.propTypes = propTypes;
MoviesCounter.defaultProps = defaultProps;

export default MoviesCounter;

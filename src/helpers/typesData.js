import PropTypes from 'prop-types';

export const movieTypes = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
  release_date: PropTypes.string,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  budget: PropTypes.number,
  revenue: PropTypes.number,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
});

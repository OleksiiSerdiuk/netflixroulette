import './movies.scss';
import MoviesFilter from './components/MoviesFilter/MoviesFilter';
import MoviesCounter from './components/MoviesCounter/MoviesCounter';
import MoviesList from './components/MoviesList/MoviesList';
import MoviesSorter from './components/MoviesSorter/MoviesSorter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../store/movieSlice';

const Movies = () => {
  const { movies, isLoading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchMovies());
  }, [dispatch]);

  const numberOfMovies = movies && movies.length;

  return (
    <div className='section-movies'>
      <div className='container'>
        <div className='section-movies__filter'>
          <MoviesFilter />
          <MoviesSorter />
        </div>
        <MoviesCounter count={numberOfMovies} />
        {isLoading ? 'Loading...' : <MoviesList moviesList={movies} />}
      </div>
    </div>
  );
};

export default Movies;

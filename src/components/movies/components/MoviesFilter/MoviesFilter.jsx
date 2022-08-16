import './moviesFilter.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setFilter, fetchMovies } from '../../../../store/movieSlice';
import { useSearchParams } from 'react-router-dom';

const MoviesFilter = () => {
  const dispatch = useDispatch();
  const { filters, searchField } = useSelector((state) => state.movies);
  const [activeGenre, setActiveGenre] = useState('all');
  const [genre, setGenre] = useSearchParams();

  const handlerFilterItem = (category) => {
    setActiveGenre(category);
    dispatch(setFilter(category));
    dispatch(fetchMovies());
    genre.set('genre', category);
    setGenre(genre);
  };

  useEffect(() => {
    if (genre.get('genre') && genre.get('genre') !== activeGenre) {
      setActiveGenre(genre.get('genre'));
      dispatch(setFilter(genre.get('genre')));
    }
  }, []);

  return (
    <div className='movie-categories'>
      {filters.map((category, index) => {
        return (
          <button
            key={index}
            onClick={() => handlerFilterItem(category.toLowerCase())}
            className={`movie-categories__item ${
              activeGenre === category ? 'active' : ''
            }`}
            type={'submit'}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default MoviesFilter;

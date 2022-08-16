import './movieCard.scss';
import { parseDate, joinArrayBySeparator } from '../../../../helpers/helpers';
import { useState, useContext } from 'react';
import { ModalContext } from '../../../../contexts';
import ToggleImg from './../../../../images/toggle.svg';
import { mockMenu } from '../../../../helpers/mockData';
import { MODAL_TYPES_MAP } from '../../../../helpers/modalTypes';
import { movieTypes } from '../../../../helpers/typesData';
import { MovieContext } from '../../../../contexts';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, release_date, genres } = movie;
  const { openModal } = useContext(ModalContext);
  const { setMovieDescription } = useContext(MovieContext);

  const [isShowMenu, setIsShowMenu] = useState(false);

  const movieReleaseDate = parseDate(release_date) || 'empty';
  const movieGenres = joinArrayBySeparator(genres) || 'empty';

  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const handlerMenu = (menuItemId) => {
    const isEdit = menuItemId === MODAL_TYPES_MAP.EDIT;
    const modalType = isEdit ? MODAL_TYPES_MAP.EDIT : MODAL_TYPES_MAP.DELETE;
    const payload = isEdit ? movie : movie.id;

    toggleMenu();
    openModal({ modalType, payload });
  };

  const showMovie = (movie) => {
    setMovieDescription(movie);
  };

  return (
    <div className='movie-card' id={id}>
      <div className='movie-card__settings'>
        <div
          className={`movie-card__icon ${isShowMenu && 'movie-card__icon'}`}
          onClick={toggleMenu}
          aria-hidden='true'
        >
          {isShowMenu ? (
            <span className='icon-close' />
          ) : (
            <img src={ToggleImg} alt='Toggle' />
          )}
        </div>

        {isShowMenu && (
          <ul className='movie-card__menu'>
            {mockMenu.map(({ id, title }) => {
              return (
                <li key={id} onClick={() => handlerMenu(id)} aria-hidden='true'>
                  {title}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <Link to={`/movie/:${id}`} type='button' onClick={() => showMovie(movie)}>
        <div className='movie-card__img-wrapper'>
          <img className='movie-card__img' src={poster_path} alt={title} />
        </div>
      </Link>

      <div className='movie-card__body'>
        <div className='movie-card__header'>
          <h2 className='movie-card__title'>{title}</h2>
          <span className='movie-card__date'>{movieReleaseDate}</span>
        </div>
        <p className='movie-card__genres'>{movieGenres}</p>
      </div>
    </div>
  );
};

const propTypes = {
  movie: movieTypes,
};

const defaultProps = {
  movie: {},
};

MovieCard.propTypes = propTypes;
MovieCard.defaultProps = defaultProps;

export default MovieCard;

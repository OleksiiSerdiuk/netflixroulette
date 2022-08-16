import SearchIcon from '../../../../../../images/searchIcon.svg';
import Button from '../../../../../common/Button';
import './movieDetailHeader.scss';
import { MovieContext } from '../../../../../../contexts';
import { useContext } from 'react';
import { Logo } from '../../../../../Logo/Logo';
import { useNavigate } from 'react-router-dom';

const MovieDetailHeader = () => {
  const { setMovieDescription } = useContext(MovieContext);
  const navigate = useNavigate();

  const handlerReturnToFindMovie = () => {
    setMovieDescription(null);
    navigate(`/search`);
  };

  return (
    <div className='movie-detail-header'>
      <Logo />
      <Button
        btnClass='btn-default btn--search-icon'
        btnText={<img src={SearchIcon} alt='search' />}
        click={handlerReturnToFindMovie}
        type={'submit'}
      />
    </div>
  );
};

export default MovieDetailHeader;

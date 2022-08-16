import { Logo } from '../Logo/Logo';
import FindMovies from './components/FindMovies/FindMovies';
import Button from '../common/Button';
import './header.scss';
import { ModalContext } from '../../contexts';
import { MODAL_TYPES_MAP } from '../../helpers/modalTypes';
import { useContext } from 'react';

const Header = () => {
  const { openModal } = useContext(ModalContext);

  const handlerAddMovie = () => {
    openModal({ modalType: MODAL_TYPES_MAP.ADD });
  };

  return (
    <header className='header'>
      <div className='container header__container'>
        <div className='header__top-content'>
          <Logo className='header__logo' />
          <Button
            btnClass='btn-add-movie'
            btnText={'+ ADD MOVIE'}
            click={handlerAddMovie}
          />
        </div>
        <div className='header__find-movie'>
          <h1 className='header__title'>Find Your Movie</h1>
          <FindMovies />
        </div>
      </div>
    </header>
  );
};

export default Header;

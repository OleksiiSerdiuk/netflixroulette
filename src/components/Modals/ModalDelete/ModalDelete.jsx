import Button from '../../common/Button';
import './modalDelete.scss';
import { fetchMovies, removeMovie } from '../../../store/movieSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ModalContext } from '../../../contexts';
import { useContext } from 'react';

const propTypes = {
  movieId: PropTypes.number,
};

const defaultProps = {
  movieId: null,
};

const ModalDelete = ({ movieId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useContext(ModalContext);

  const handlerRemoveMovie = () => {
    dispatch(removeMovie(movieId));
    closeModal();
    dispatch(fetchMovies());
  };

  return (
    <div className='section-modal-delete'>
      <p className='section-modal-delete__text'>
        Are you sure you want to delete this movie?
      </p>
      <Button
        btnClass='btn-outline btn-outline-corral btn-align-right'
        btnText='Confirm'
        click={handlerRemoveMovie}
        type={'submit'}
      />
    </div>
  );
};

ModalDelete.propTypes = propTypes;
ModalDelete.defaultProps = defaultProps;

export default ModalDelete;

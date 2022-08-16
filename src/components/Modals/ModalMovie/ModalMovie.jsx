import './modalMovie.scss';
import Button from '../../common/Button/Button';
import { movieTypes } from '../../../helpers/typesData';
import { genreList, validateURL } from '../../../helpers/mockData';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  createMovie,
  fetchMovies,
  updateMovie,
} from '../../../store/movieSlice';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { ModalContext } from '../../../contexts';
import FormikControl from '../../Formik/FormikControl';

const propTypes = {
  movie: movieTypes,
};

const defaultProps = {
  movie: {},
};

const validationSchema = Yup.object().shape({
  title: Yup.string().min(2).required('Required'),
  poster_path: Yup.string()
    .matches(validateURL, 'Enter correct url!')
    .required('Please enter website'),
  vote_average: Yup.number().required('Required'),
  runtime: Yup.number().required('Required'),
  overview: Yup.string().max(225).required('Required'),
});

const ModalMovie = ({ movie, type }) => {
  const dispatch = useDispatch();
  const { closeModal } = useContext(ModalContext);

  const initialValue = {
    title: movie?.title || '',
    poster_path: movie?.poster_path || '',
    vote_average: movie?.vote_average || '',
    release_date: movie?.release_date || new Date(),
    genres: movie?.genres || [],
    runtime: movie?.runtime || '',
    overview: movie?.overview || '',
  };

  const currentDataMovie = {
    title: movie?.title || '',
    poster_path: movie?.poster_path || '',
    vote_average: movie?.vote_average || '',
    release_date: movie?.release_date || new Date(),
    genres: movie?.genres || [],
    runtime: movie?.runtime || '',
    overview: movie?.overview || '',
    id: movie?.id,
  };

  return (
    <Formik
      initialValues={type === 'edit' ? currentDataMovie : initialValue}
      onSubmit={(values, { setSubmitting }) => {
        type === 'edit'
          ? dispatch(updateMovie(values))
          : dispatch(createMovie(values));
        setSubmitting(false);
        closeModal();
        dispatch(fetchMovies());
      }}
      validationSchema={validationSchema}
    >
      {(props) => {
        const {
          values,
          isSubmitting,
          handleChange,
          setFieldValue,
          handleBlur,
          handleSubmit,
          resetForm,
        } = props;
        return (
          <>
            <form className='section-modal-movie' onSubmit={handleSubmit}>
              <div className='section-modal-movie-fields'>
                <FormikControl
                  control='input'
                  name='title'
                  type='text'
                  label='Title'
                  placeholder='title'
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <FormikControl
                  control='datepicker'
                  label='Release Date'
                  name='release_date'
                />

                <FormikControl
                  control='input'
                  name='poster_path'
                  type='text'
                  label='Movie url'
                  placeholder='https://'
                  value={values.poster_path}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <FormikControl
                  control='input'
                  name='vote_average'
                  type='number'
                  label='Rating'
                  placeholder='7.8'
                  value={values.vote_average}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <FormikControl
                  control='select'
                  name='genres'
                  label='Genre'
                  value={values.genres}
                  list={genreList}
                  change={(e) => setFieldValue('genres', [e])}
                />

                <FormikControl
                  control='input'
                  name='runtime'
                  type='number'
                  label='Runtime'
                  placeholder='minutes'
                  value={values.runtime}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <FormikControl
                  id='overview'
                  control='textarea'
                  label='Overview'
                  name='overview'
                  value={values.overview}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className='section-modal-movie-btns'>
                <Button
                  btnClass='btn-outline btn-outline-corral btn-reset'
                  btnText='Reset'
                  type={'reset'}
                  click={resetForm}
                />
                <Button
                  btnClass='btn-outline btn-outline-corral btn-submit'
                  btnText='Submit'
                  type={'submit'}
                  disabled={isSubmitting}
                />
              </div>
            </form>
          </>
        );
      }}
    </Formik>
  );
};

ModalMovie.propTypes = propTypes;
ModalMovie.defaultProps = defaultProps;

export default ModalMovie;

import Button from '../../../common/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../../Formik/FormikControl';
import { fetchMovies, setSearchField } from '../../../../store/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const validationSchema = Yup.object().shape({
  search: Yup.string().min(2),
});

const FindMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filter, sortBy } = useSelector((state) => state.movies);
  let { movie } = useParams();

  const [query, setQuery] = useState(movie);

  useEffect(() => {
    if (!query) {
      navigate('/search');
      dispatch(fetchMovies());
    } else {
      setTimeout(() => {
        dispatch(setSearchField(query));
        dispatch(fetchMovies());
      });
    }
  }, [query]);

  const handleSearch = (values) => {
    setQuery(values.search);
    dispatch(setSearchField(values.search));
    navigate({
      pathname: `/search/${values.search}`,
      search: `?${createSearchParams({
        genre: filter,
        sort: sortBy,
      })}`,
    });
  };

  return (
    <Formik
      initialValues={{ search: query || '' }}
      onSubmit={(values, { setSubmitting }) => {
        handleSearch(values);
        setSubmitting(false);
      }}
      validationSchema={validationSchema}
    >
      {(props) => {
        const { values, handleChange, handleBlur, handleSubmit } = props;
        return (
          <form action='#' className='find-movie-form' onSubmit={handleSubmit}>
            <FormikControl
              control='input'
              name='search'
              type='text'
              placeholder='What do you want to watch ?'
              customClass='find-movie-form__input'
              value={values.search}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button
              btnClass='find-movie-form__btn'
              btnText='Search'
              type={'submit'}
            />
          </form>
        );
      }}
    </Formik>
  );
};

export default FindMovies;

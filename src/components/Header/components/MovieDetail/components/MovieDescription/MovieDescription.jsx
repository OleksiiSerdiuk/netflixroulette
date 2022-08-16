import moment from 'moment';
import './movieDescription.scss';
import { getTimeTitle } from '../../../../../../helpers/helpers';
import { MovieContext } from '../../../../../../contexts';
import { useContext, useEffect, useState } from 'react';
import { useLoader } from '../../../../../../helpers/hooks';

const MovieDescription = () => {
  const { movieDescription } = useContext(MovieContext);
  const [movie, setMovie] = useState(movieDescription);
  const [loading, showLoader, hideLoader] = useLoader();

  useEffect(() => {
    showLoader();
    const timeout = setTimeout(() => {
      setMovie(movieDescription);
      hideLoader();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [movieDescription]);

  const {
    poster_path,
    title,
    vote_average,
    genres,
    release_date,
    runtime,
    overview,
  } = movie;

  if (!movie) {
    return null;
  }

  return (
    <div className='movie-description'>
      <div className='movie-description__container'>
        {loading ? (
          loading
        ) : (
          <>
            <img className='movie-description__img' src={poster_path} alt='' />
            <div className='movie-description__content'>
              <div className='d-flex align-center movie-description__content-top'>
                <h1 className='movie-description__title'>{title}</h1>
                <span className='movie-description__average'>
                  {vote_average}
                </span>
              </div>
              <p className='movie-description__genres'>{genres.join(' & ')}</p>
              <div className='d-flex align-center mt-30'>
                <span className='movie-description__date'>
                  {moment(release_date).year()}
                </span>
                <span className='movie-description__runtime'>
                  {getTimeTitle(runtime)}
                </span>
              </div>
              <p className='movie-description__overview'>{overview}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDescription;

import { MovieDescription } from './components/MovieDescription';
import { MovieDetailHeader } from './components/MovieDetailHeader';
import './movieDetail.scss';

const MovieDetail = () => {
  return (
    <section className='movie-detail'>
      <div className='container'>
        <MovieDetailHeader />
        <MovieDescription />
      </div>
    </section>
  );
};

export default MovieDetail;

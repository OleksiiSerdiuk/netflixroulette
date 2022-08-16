import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Movies from './components/movies/Movies';
import MovieDetail from './components/Header/components/MovieDetail/MovieDetail';
import { MovieContext } from './contexts';
import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

const App = () => {
  const { movieDescription } = useContext(MovieContext);

  const Main = () => {
    return (
      <>
        {!movieDescription ? <Header /> : <MovieDetail />}
        <Movies />
        <Footer />
      </>
    );
  };

  return (
    <Routes>
      <Route exact path='/' element={<Navigate to='/search' replace />} />
      <Route path='/search' element={<Main />}>
        <Route path=':movie' element={<Main />} />
      </Route>
      <Route
        path='/movie/:id'
        element={
          movieDescription ? <Main /> : <Navigate to='/search' replace />
        }
      />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;

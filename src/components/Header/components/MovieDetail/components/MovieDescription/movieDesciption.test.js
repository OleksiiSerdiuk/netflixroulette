import { render, screen } from '@testing-library/react';
import MovieDescription from './MovieDescription';
import { MovieContext } from '../../../../../../contexts';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { mockMovie } from '../../../../../../helpers/mockData';

const renderMovie = (movie) => {
  return render(
    <MovieContext.Provider
      value={{
        movieDescription: movie,
        setMovieDescription: () => {},
      }}
    >
      <MovieDescription />
    </MovieContext.Provider>
  );
};

describe('Movie Description', () => {
  jest.useFakeTimers();

  test('check description movie', async () => {
    renderMovie(mockMovie);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
    await act(() => jest.runAllTimers());
    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.vote_average)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.overview)).toBeInTheDocument();
  });
});

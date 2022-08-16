import { render, screen } from '@testing-library/react';
import MovieCard from './MovieCard';
import { mockMovie } from '../../../../helpers/mockData';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe('movie card', () => {
  test('renders movie card snapshot', () => {
    const { asFragment, container } = render(
      <BrowserRouter>
        <MovieCard movie={mockMovie} />
      </BrowserRouter>
    );
    expect(asFragment(<MovieCard movie={mockMovie} />)).toMatchSnapshot();
    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
    const getImgTag = container
      .querySelector('a')
      .querySelector('img')
      .getAttribute('src');
    expect(getImgTag).toBe(mockMovie.poster_path);
  });
});

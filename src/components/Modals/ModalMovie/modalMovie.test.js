import { render, screen } from '@testing-library/react';
import ModalMovie from './ModalMovie';
import { mockMovie } from '../../../helpers/mockData';
import { Provider } from 'react-redux';
import store from '../../../store';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe('modal movie', () => {
  test('renders modal movie', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalMovie movie={mockMovie} type={'edit'} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByLabelText('Title')).toHaveValue(mockMovie.title);
    expect(screen.getByLabelText('Movie url')).toHaveValue(
      mockMovie.poster_path
    );
    expect(screen.getByLabelText('Rating')).toHaveValue(mockMovie.vote_average);
    expect(screen.getByLabelText('Runtime')).toHaveValue(mockMovie.runtime);
  });
});

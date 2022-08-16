import { render, screen } from '@testing-library/react';
import MoviesFilter from './MoviesFilter';
import { Provider } from 'react-redux';
import store from '../../../../store';
import { BrowserRouter } from 'react-router-dom';

describe('movies filter test', () => {
  test('should handle change filters', async () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <MoviesFilter />
        </BrowserRouter>
      </Provider>
    );

    const items = await screen.findAllByRole('button');
    const getActiveBtn = items
      .map((i) => i.className)
      .filter((x) => x.includes('active')).length;
    expect(items).toHaveLength(5);
    expect(getActiveBtn).toEqual(1);
  });
});

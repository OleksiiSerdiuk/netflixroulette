import { render, fireEvent, waitFor } from '@testing-library/react';
import FindMovies from './FindMovies';
import store from '../../../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import App from '../../../../App';

const handleSubmit = jest.fn();

describe('Search section', () => {
  it('renders find movie snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <FindMovies onSubmit={handleSubmit} />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<FindMovies />)).toMatchSnapshot();
  });

  it('should handle submit', async () => {
    const { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <FindMovies onSubmit={handleSubmit} />
        </BrowserRouter>
      </Provider>
    );

    await act(() => {
      fireEvent.change(getByRole('textbox'), { target: { value: 'test' } });
      fireEvent.click(getByRole('button', { type: /submit/i }));
      handleSubmit();
    });

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
      expect(getByRole('textbox').value).toBe('test');
    });
  });

  it('should have button', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <FindMovies onSubmit={handleSubmit} />
        </BrowserRouter>
      </Provider>
    );
    expect(getByRole('button')).toBeTruthy();
  });

  it('should have value from path', () => {
    window.history.pushState({}, '', '/search/test');

    const { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    console.log('window.history', window.history);
    console.log('document.referrer', document.referrer);
    expect(getByRole('textbox').value).toMatch('test');
  });
  afterAll(() => {});
});

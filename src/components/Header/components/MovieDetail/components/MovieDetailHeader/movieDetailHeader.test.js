import { fireEvent, render, waitFor } from '@testing-library/react';
import MovieDetailHeader from './MovieDetailHeader';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

const handleSubmit = jest.fn();

describe('movie detail header', () => {
  it('renders movie detail header snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <MovieDetailHeader />
      </BrowserRouter>
    );
    expect(asFragment(<MovieDetailHeader />)).toMatchSnapshot();
  });

  it('should handle submit', async () => {
    const { getByRole } = render(
      <BrowserRouter>
        <MovieDetailHeader />
      </BrowserRouter>
    );

    await act(() => {
      fireEvent.click(getByRole('button', { type: /submit/i }));
      handleSubmit();
    });
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});

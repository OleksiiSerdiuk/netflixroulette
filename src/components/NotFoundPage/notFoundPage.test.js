import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

test('Shows the not found page message for a wrong movie page', () => {
  const history = createMemoryHistory();
  history.push('/movie-not-found');

  const { asFragment } = render(
    <Router location={history.location} navigator={history}>
      <NotFoundPage />
    </Router>
  );

  expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  expect(asFragment(<NotFoundPage />)).toMatchSnapshot();
});

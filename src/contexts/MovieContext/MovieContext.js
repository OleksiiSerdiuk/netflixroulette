import { createContext } from 'react';

export const MovieContext = createContext({
  movieDescription: null,
  setMovieDescription: () => {},
});

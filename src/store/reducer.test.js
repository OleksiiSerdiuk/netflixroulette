import { setFilter, setSort, fetchMovies } from './movieSlice';
import { sorterList } from '../helpers/mockData';
import store from './index';

describe('reducer movie', () => {
  it('should return the initial state', () => {
    expect(fetchMovies()).toEqual(expect.any(Function));
  });

  it('set filter for movie', () => {
    store.dispatch(setFilter('comedy'));
    const filters = store.getState().movies.filters;
    // const getAnyFilter = filters[Math.floor(Math.random() * filters.length)];
    const currentFilter = store.getState().movies.filter;
    const doArraysIntersect = (array1, array2) =>
      array1.some((item1) => array2.includes(item1));
    expect(doArraysIntersect(filters, currentFilter)).toBe(true);
  });

  it('set sort for movie', () => {
    store.dispatch(setSort('vote_average'));
    const sortBy = store.getState().movies.sortBy;
    expect(sorterList.map((i) => i.key)).toContain(sortBy);
  });
});

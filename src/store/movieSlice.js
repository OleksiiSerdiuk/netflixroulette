import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../api';

export const initialState = {
  movies: null,
  isLoading: false,
  serverError: null,
  filters: ['all', 'documentary', 'comedy', 'horror', 'crime'],
  sortBy: 'release_date',
  filter: 'all',
  searchField: '',
};

export const fetchMovies = createAsyncThunk(
  '/movies/fetchMovies',
  async (property, { rejectWithValue, getState }) => {
    const {
      movies: { sortBy, filter, searchField },
    } = getState();

    const currentFilter = filter === 'all' ? '' : filter;

    try {
      const response = await API.get(
        `/movies?sortBy=${sortBy}&sortOrder=asc&filter=${currentFilter}&limit=9&searchBy=title&search=${searchField}`
      );

      return await response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const removeMovie = createAsyncThunk(
  '/movies/removeMovies',
  async (movieId, { rejectWithValue }) => {
    try {
      await API.delete(`/movies/${movieId}`);
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const createMovie = createAsyncThunk(
  '/movies/createMovie',
  async (data, { rejectWithValue }) => {
    try {
      await API.post(`/movies`, data);
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const updateMovie = createAsyncThunk(
  '/movies/updateMovie',
  async (data, { rejectWithValue }) => {
    try {
      await API.put(`/movies`, data);
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSort: (state, action) => {
      state.sortBy = action.payload;
    },
    setSearchField: (state, action) => {
      state.searchField = action.payload;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.movies = action.payload.data;
      state.isLoading = false;
    },
    [fetchMovies.rejected]: (state, action) => {
      state.serverError = action.payload.data;
      state.isLoading = false;
    },
  },
});

export const { setFilter, setSort, setSearchField } = movieSlice.actions;

export default movieSlice.reducer;

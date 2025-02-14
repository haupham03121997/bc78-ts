import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiResponse, Movie } from '../../models';
import apiService from '../../services/apiService';

type ResponseListMovie = ApiResponse<Movie[]>;

export const fetchListMovies = createAsyncThunk('listMovies/fetchListMovies', async () => {
  try {
    const response = await apiService.get<ResponseListMovie>('/QuanLyPhim/LayDanhSachPhim?maNhom=GP01');
    return response.data.content;
  } catch (error) {
    console.error('🔥 ~ fetchListMovies ~ error:', error);
  }
});

type TState = {
  data?: Movie[];
  isLoading: boolean;
  error: any;
};

const initialState: TState = {
  data: undefined,
  isLoading: false,
  error: null,
};

const listMoviesSlice = createSlice({
  name: 'listMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListMovies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchListMovies.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        console.log('🔥 ~ fetchListMovies.fulfilled ~ action:', action);
      })
      .addCase(fetchListMovies.rejected, (state, action) => {
        state.isLoading = false;
        console.log('🔥 ~ fetchListMovies.rejected ~ action:', action);
      });
  },
});

export default listMoviesSlice.reducer;

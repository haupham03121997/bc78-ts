import { configureStore } from '@reduxjs/toolkit';
import listMovies from './slices/list-movies';
const env = import.meta.env.NODE_ENV;
const store = configureStore({
  reducer: {
    listMovies,
    // [listMoviesReducer.name]: listMoviesReducer,
  },
  // devTools: env === 'development',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

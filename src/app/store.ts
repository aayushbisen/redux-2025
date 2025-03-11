import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch, useSelector } from 'react-redux';
import { apiSlice } from '../features/api/apiSlice';
import counterReducer from '../features/counter/counterSlice';

// configureStore creates a redux store instance
export const store = configureStore({
  // reducers are used to handle state updates based on actions
  reducer: {
    // counter reducer is responsible for managing the counter state
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // middleware is a way to extend redux with custom functionality
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// setupListeners is a function that enables the automatic dispatching of lifecycle hooks for the API endpoints
// for example refetching data when the window regains focus
// and polling the server for updates
setupListeners(store.dispatch);

// AppStore type represents the type of the redux store
type AppStore = typeof store;
// AppDispatch type represents the type of the dispatch function of the store
type AppDispatch = AppStore['dispatch'];
// RootState type represents the type of the entire state of the redux store
export type RootState = ReturnType<AppStore['getState']>;

// useAppDispatch is a typed version of the useDispatch hook
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// useAppSelector is a typed version of the useSelector hook
export const useAppSelector = useSelector.withTypes<RootState>();

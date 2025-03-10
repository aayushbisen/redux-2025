import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import counterReducer from "../features/counter/counterSlice";

// configureStore creates a redux store instance
export const store = configureStore({
    // reducers are used to handle state updates based on actions
    reducer: {
        // counter reducer is responsible for managing the counter state
        counter: counterReducer
    },
});

// AppStore type represents the type of the redux store
type AppStore = typeof store;
// AppDispatch type represents the type of the dispatch function of the store
type AppDispatch = AppStore['dispatch']
// RootState type represents the type of the entire state of the redux store
export type RootState = ReturnType<AppStore['getState']>;

// useAppDispatch is a typed version of the useDispatch hook
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// useAppSelector is a typed version of the useSelector hook
export const useAppSelector = useSelector.withTypes<RootState>();
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import filtersReducer from './reducers/filters';
import cakesReducer from './reducers/cakes';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        cakes: cakesReducer,
    },
    middleware: [...getDefaultMiddleware(), thunk], // Use Redux Toolkit's getDefaultMiddleware and add thunk
});

export default store;

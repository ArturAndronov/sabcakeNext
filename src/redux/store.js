import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './reducers/filters'
import cakesReducer from './reducers/cakes'
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        cakes: cakesReducer,
    },
});

export default store;
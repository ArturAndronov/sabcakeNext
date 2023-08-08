import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import filters from './reducers/filters';
import cakes from './reducers/cakes';
import cart from './reducers/cart'
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
        filters,
        cakes,
        cart

    },
    middleware: [...getDefaultMiddleware(), thunk], // Use Redux Toolkit's getDefaultMiddleware and add thunk
});

export default store;

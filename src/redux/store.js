import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import filters from './reducers/filters';
import cakes from './reducers/cakes';
import cart from './reducers/cart';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
        filters,
        cakes,
        cart
    },
    middleware: [...getDefaultMiddleware(), thunk],
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;

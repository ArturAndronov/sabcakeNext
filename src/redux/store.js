import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers/index.js'; // Ваш корневой редьюсер

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Избегаем проверки сериализации для non-serializable действий
      }),
    devTools: process.env.NODE_ENV !== 'production',
  });

export const wrapper = createWrapper(makeStore);

export default wrapper;


// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import filters from './reducers/filters';
// import cakes from './reducers/cakes';
// import cart from './reducers/cart';
// import thunk from 'redux-thunk';

// export const store = configureStore({
//     reducer: {
//         filters,
//         cakes,
//         cart
//     },
//     middleware: [...getDefaultMiddleware(), thunk],
//     devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;
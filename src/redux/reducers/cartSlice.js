import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {},
        totalPrice: 0,
        totalCount: 0,
    },
    reducers: {
        addCakeToCart: (state, action) => {
            const newItems = {
                ...state.items,
                [action.payload.id]: state.items[action.payload.id]
                    ? [...state.items[action.payload.id], action.payload]
                    : [action.payload],
            };

            const allCakes = [].concat(...Object.values(newItems));
            const totalPrice = allCakes.reduce((sum, obj) => obj.price + sum, 0);

            state.items = newItems;
            state.totalCount = allCakes.length;
            state.totalPrice = totalPrice;
        },
    },
});

export const { addCakeToCart } = cartSlice.actions;
export default cartSlice.reducer;

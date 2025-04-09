import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import filters from './filters';
import cakes from './cakes';
import cart from './cart';

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload };
        default:
            return combineReducers({
                filters,
                cakes,
                cart,
            })(state, action);
    }
};

export default rootReducer;
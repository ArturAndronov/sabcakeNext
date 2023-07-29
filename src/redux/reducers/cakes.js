const initialState = {
   items: [],
    isLoaded: false
};
const cakes = (state = initialState, action) => {
    if (action.type === 'SET_CAKES') {
        return {
            ...state,
            items: action.payload,
        };
    }
    return state;
};

export default cakes;
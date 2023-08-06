import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
})
export const fetchCakes = (type, sortBy, category) => (dispatch) => {
    console.log(category)
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    });

    axios.get(`http://localhost:3001/cakes?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({data}) => {
            dispatch(setCakes(data))
        });
};

export const setCakes = (items) => ({
    type: 'SET_CAKES',
    payload: items,
});

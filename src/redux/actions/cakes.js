import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
})
export const fetchCakes = (sortBy, category) => (dispatch) => {
    console.log(category)
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    });

    axios.get('/api/cakes', {
        params: {
            category: category !== null ? category : undefined,
            _sort: sortBy.type,
            _order: sortBy.order
        }
    })
        .then(({data}) => {
            dispatch(setCakes(data))
        });

};

export const setCakes = (items) => ({
    type: 'SET_CAKES',
    payload: items,
});

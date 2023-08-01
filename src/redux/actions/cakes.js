import axios from "axios";

export const fetchCakes = () => (dispatch) => {
    axios.get('http://localhost:3001/cakes').then(({data}) => {
        dispatch(setCakes(data))
    });
};

export const setCakes = (items) => ({
    type: 'SET_CAKES',
    payload: items,
});

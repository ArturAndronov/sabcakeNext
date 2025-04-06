import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
})
export const fetchCakes = (sortBy, category) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    });

    axios.get('https://localhost:7082/api/Cakes', {
        params: {
            category: category !== null ? category : undefined,
            _sort: sortBy.type,
            _order: sortBy.order
        }
    })
    .then(({data}) => {
        dispatch(setCakes(data.cakes)); // Извлекаем массив cakes
    })
    .catch(error => {
        console.error("Ошибка при загрузке тортов:", error);
        dispatch({
            type: 'SET_LOADED',
            payload: true,
        });
    });
};

export const setCakes = (items) => ({
    type: 'SET_CAKES',
    payload: items,
});

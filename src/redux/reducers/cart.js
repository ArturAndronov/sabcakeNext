const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
};
const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CAKE_CART': {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }

            const allCakes =[].concat.apply([], Object.values(newItems)) //с помощью объед массивов узнаем кол-во элементов во всех массивах
            const totalPrice = allCakes.reduce((sum, obj) => obj.price + sum, 0); // берется массив аллкейкс,после пробегается по всем пиццам, вытаскивает пиццу и из неё вытаскивает стоимость и прибавляем к каждому прибавл значению

            return {
                ...state,
                items: newItems,
                totalCount: allCakes.length,
                totalPrice,
            };
        }

        default:
            return state;
    }
}


export default cart;
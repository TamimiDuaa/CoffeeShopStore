export const orderReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            return { ...state, orders: [...state.orders, action.payload] };
        case 'REMOVE_ORDER':
            return {
                ...state,
                orders: state.orders.filter((order) => order.id !== action.payload.id),
            };
        default:
            return state;
    }
};
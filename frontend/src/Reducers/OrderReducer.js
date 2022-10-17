export const OrderReducer = (orderpack = {}, action) => {
    switch (action.type) {
        case 'SET_ORDER':
            return action.payload;
        default:
            return orderpack;
    }
}
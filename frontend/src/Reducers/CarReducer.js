export const CarReducer = (carpack = {}, action) => {
    switch (action.type) {
        case 'SET_CAR':
            return action.payload;
        default:
            return carpack;
    }
}
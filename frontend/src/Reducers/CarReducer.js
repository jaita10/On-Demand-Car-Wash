export const CarReducer = (pack = {}, action) => {
    switch (action.type) {
        case 'SET_CAR':
            return action.payload;
        default:
            return pack;
    }
}
export const WashReducer = (pack = {}, action) => {
    switch (action.type) {
        case 'SET_WASHPACK':
            return action.payload;
        default:
            return pack;
    }
}
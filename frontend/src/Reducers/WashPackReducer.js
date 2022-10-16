export const WashReducer = (washpack = {}, action) => {
    switch (action.type) {
        case 'SET_WASHPACK':
            return action.payload;
        default:
            return washpack;
    }
}
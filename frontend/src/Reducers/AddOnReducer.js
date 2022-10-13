export const AddOnReducer = (pack = {}, action) => {
    switch (action.type) {
        case 'SET_ADDON':
            return action.payload;
        default:
            return pack;
    }
}
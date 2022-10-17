export const RefreshReducer = (refresh = true, action) => {
    switch (action.type) {
        case 'REFRESH':
            return !refresh;
        default:
            return refresh;
    }
}
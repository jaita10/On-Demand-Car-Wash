export const TotalReducer = (total = {washpackPrice: 0, addonTotal: 0}, action) => {
    switch (action.type) {
        case 'ADD_TO_ADDON_TOTAL':
            return {...total,addonTotal: total.addonTotal + action.payload};
        case 'SET_WASHPACK_PRICE':
            return {...total, washpackPrice: action.payload}
        case 'REMOVE_FROM_ADDON_TOTAL':
            return {...total,addonTotal: total.addonTotal - action.payload};
        default:
            return total;
    }
}
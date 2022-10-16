export const addToAddOnTotal = (price) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_TO_ADDON_TOTAL',
            payload: price
        })
    }
}

export const setWashPackPrice = (price) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_WASHPACK_PRICE',
            payload: price
        })
    }
}

export const removeFromAddOnTotal = (price) => {
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_FROM_ADDON_TOTAL',
            payload: price
        })
    }
}
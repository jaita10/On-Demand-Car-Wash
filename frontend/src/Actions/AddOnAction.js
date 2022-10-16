export const setAddOn = (addonpack) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_ADDON',
            payload: addonpack
        })
    }
}

export const addToCart = (addonpack) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_ADDON',
            payload: addonpack
        })
    }
}

export const removeFromCart = (addonId) => {
    return (dispatch) => {
        dispatch({
            type: 'DELETE_ADDON',
            payload: addonId
        })
    }
}
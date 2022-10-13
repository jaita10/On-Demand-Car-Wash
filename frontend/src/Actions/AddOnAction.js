export const setAddOn = (addonpack) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_ADDON',
            payload: addonpack
        })
    }
}
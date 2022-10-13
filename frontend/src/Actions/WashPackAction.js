export const setWashPack = (washpack) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_WASHPACK',
            payload: washpack
        })
    }
}
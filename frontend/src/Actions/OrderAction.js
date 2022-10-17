export const setOrder = (orderpack) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_ORDER',
            payload: orderpack
        })
    }
}
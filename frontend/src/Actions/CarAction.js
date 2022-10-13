export const setCar = (carpack) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_CAR',
            payload: carpack
        })
    }
}
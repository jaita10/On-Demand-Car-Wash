export const changeUser = (user) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_USER',
            payload: user
        })
    }
}
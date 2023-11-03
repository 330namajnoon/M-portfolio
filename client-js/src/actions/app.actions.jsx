
const setLoading = (value) => {
    return (dispatch, store) => {
        dispatch({
            type: "LOADING_TRUE",
            payload: value
        })
    }
}



export {setLoading};
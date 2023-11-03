
const initialState = {
    loading: false,
    userData: {
        id: "",
        name: ""
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LOADING":
            console.log("setLoading");
            state.loading = action.payload;
            return {...state};
        default:
            return state;
    }
}

export default reducer;
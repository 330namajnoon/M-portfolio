import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    loading: false,
}

export const reducer = createSlice({
    name: "app",
    initialState,
    reducers: {
        SET_LOADING_FALSE:(state = initialState)=> {
            state.loading = false;
        },
        
        SET_LOADING_TRUE:(state = initialState)=> {
            state.loading = true;
        }
    },
})

export const { SET_LOADING_TRUE,SET_LOADING_FALSE } = reducer.actions
export default reducer.reducer;
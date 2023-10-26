
import {reducer} from "../reducers/app.reducer"

const SET_LOADING_FALSE = (state = reducer.getInitialState())=> {
    state.loading = false;
}
const SET_LOADING_TRUE = (state = reducer.getInitialState())=> {
    state.loading = true;
}
export {SET_LOADING_FALSE,SET_LOADING_TRUE};

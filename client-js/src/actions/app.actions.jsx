
import { useContext } from "react";
import appContext, { INITIAL_STORE } from "../contexts/app.context";

const actionTypes = {
    SET_LOADING: "SET_LOADING",
    TEAM_COLOR_CHENGE: "TEAM_COLOR_CHENGE",
}


function reducer(state = INITIAL_STORE, action = {type: actionTypes.SET_LOADING, payload: null}) {
    switch (action.type) {
        case actionTypes.SET_LOADING:
            return {...state,isLoading: action.payload};
        case actionTypes.TEAM_COLOR_CHENGE:
            state.team.setColors(action.payload);
            return {...state};
        default:
            return state;
    }
}

export default reducer;
export {actionTypes};

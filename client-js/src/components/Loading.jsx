import appStore from "../stores/app.store";
import { SET_LOADING_FALSE,SET_LOADING_TRUE } from "../reducers/app.reducer";
export default function Loading() {
    return (
        <div className="loading-container">
            <h1>Loading</h1>
            <h2 onClick={()=> {
                appStore.dispatch(SET_LOADING_FALSE())
            }}>chenge</h2>
        </div>
    );
}
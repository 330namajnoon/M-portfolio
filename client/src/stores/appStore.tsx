import {createStore} from "redux"
import appReducer from "../reducers/appReducer";
import IAppState from "../interfaces/IAppState";
import IAction from "../interfaces/IAction";

const appStore:any = createStore<any,any,any,any>(appReducer);

export default appStore; 


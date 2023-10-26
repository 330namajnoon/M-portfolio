import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import appStore from "./stores/appStore";



ReactDOM.render(
    <Provider store={appStore}>
        <App/>
    </Provider>
    ,
    document.getElementById("root") as HTMLElement
);
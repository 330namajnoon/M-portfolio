import ReactDom from "react-dom"
import App from "./App"
import { Provider } from "react-redux";
import appStore from "./stores/app.store";


ReactDom.render(
    <Provider store={appStore}>
        <App/>
    </Provider>
    ,
    document.getElementById("root")
);
import { useContext } from "react";
import appContext from "../contexts/app.context";
import "./sass/loading.scss"
import { useNavigate } from "react-router-dom";

export default function Loading(props) {
    console.log(props)
    const {setLoading} = useContext(appContext);
    return (
        <div className="loading-container">
            <h1>Loading</h1>
            <h2 onClick={()=> {
                setLoading(false);
            }}>chenge</h2>
        </div>
    );
}



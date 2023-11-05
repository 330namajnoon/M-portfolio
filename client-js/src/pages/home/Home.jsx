import { useContext } from "react";
import "./sass/home.scss"
import { Link } from "react-router-dom"
import appContext from "../../contexts/app.context";
import appReducer, { actionTypes } from "../../actions/app.actions";
import TeamColorChenge from "../../components/TeamColorChenge";
export default function Home() {
    const {appStore, setAppStore} = useContext(appContext);
    const colors = appStore.team.getTeamColors().colors;
    return (
        <div style={{backgroundColor: colors.c1}} className="home-container">
            <header>
                <TeamColorChenge colorNames={["t1","t2"]} />
            </header>
        </div>
    );
}
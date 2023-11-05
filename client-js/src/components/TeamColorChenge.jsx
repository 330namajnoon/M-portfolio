import "./sass/teamColorChenge.scss"
import { useContext, useState } from "react";
import appContext from "../contexts/app.context"
import appReducer, { actionTypes } from "../actions/app.actions";

export default function TeamColorChenge({ colorNames }) {
    const { appStore, setAppStore } = useContext(appContext);
    const { colors } = appStore.team.getTeamColors();
    let [colorNum, setColorsNum] = useState(0);

    function chengeColor() {
        setAppStore(appReducer(appStore, { type: actionTypes.TEAM_COLOR_CHENGE, payload: colorNames[colorNum === 0 ? 1 : 0] }));
        setColorsNum(colorNum === 0 ? 1 : 0);
    }
    return (
        <div onClick={chengeColor} style={{
            justifyContent: colorNum === 1 ? "flex-start" : "flex-end",
            backgroundColor: colors.c3,
            border: `solid 1.5px ${colors.c5}`,
            boxShadow: `1px 1px 3px 1px ${colors.c3},inset 1px 1px 5px ${colors.c6}85`
        }}
            className="teamColorChenge-container">
            <div style={{
                backgroundColor: colors.c2,
                border: `solid 1.5px ${colors.c5}`,
                boxShadow: `1px 1px 3px 1px ${colors.c3},inset 1px 2px 10px ${colors.c1}60`
            }}></div>
        </div>
    );
}
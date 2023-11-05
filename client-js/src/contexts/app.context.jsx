import { createContext } from "react";
import Team from "../assets/Team";

const INITIAL_STORE = {
    isLoading: false,
    team: new Team(),
}

const appContext = createContext(INITIAL_STORE);

export default appContext;
export {INITIAL_STORE};
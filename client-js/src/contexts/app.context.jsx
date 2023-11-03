import { createContext } from "react";

const appContext = createContext({
    setLoading: () => {},
});

export default appContext;
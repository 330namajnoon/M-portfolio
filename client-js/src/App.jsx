import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom"
import Home from "./pages/home";
import Login from "./pages/login";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
import AppContext from "./contexts/app.context"
import axios from "axios"
import SignUp from "./pages/signup/SignUp";
import Team from "./assets/Team";

export default function App(props) {
    const [appStore,setAppStore] = useState({
        isLoading: false,
        team: new Team(),
    })
    console.log(appStore.team.getTeamColors())
    return (
        <>
            <AppContext.Provider value={{appStore,setAppStore}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <Route index path="home" element={<Home />} />
                            <Route path="login" element={<Login />} />
                            <Route element={<SignUp />} />
                        </Route>
                    </Routes>
                    {appStore.isLoading ?
                        <Loading /> : null
                    }
                </BrowserRouter>
            </AppContext.Provider>
        </>
    );
}



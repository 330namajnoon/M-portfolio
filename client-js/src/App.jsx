import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/login";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
import AppContext from "./contexts/app.context"
import axios from "axios"
import SignUp from "./pages/signup/SignUp";

export default function App(props) {
    const [loading, setLoading] = useState(false);
    
    
    return (
        <>
            <AppContext.Provider value={{ setLoading }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <Route element={<Home />} />
                            <Route element={<Login />} />
                            <Route index element={<SignUp />} />
                        </Route>
                    </Routes>
                    {loading ?
                        <Loading /> : null
                    }
                </BrowserRouter>
            </AppContext.Provider>
        </>
    );
}



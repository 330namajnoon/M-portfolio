import { BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";
import { useEffect } from "react";

export default function App(props) {
    const { loading } = useSelector((state)=> state.appReducer);
    
    async function login() {

    }

    useEffect(()=> {
        const userData = localStorage.getItem("userData");
        if (userData) {
            
        }
    }, []);

    return (
        <>
            { loading &&
                <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <Route index element={<Home />} />
                            <Route path="login" element={<Login />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
                ||
                <Loading  />
            }
        </>
    );
}
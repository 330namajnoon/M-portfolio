import "./sass/login.scss"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../confog";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        login().then((res) => {
            console.log(res);
        }).catch((err) => {
            console.error(err);
        })
    }, []);
    
    function login() {
        return new Promise((resolve, reject) => {
            let userData = JSON.parse(localStorage.getItem("userData"));
            const formData = new FormData();
            if (!userData) {}
                userData = { email, password };
            formData.append("email", email);
            formData.append("password", password);
            console.log(userData);
            axios.post(`${config.URL}/login`, formData).then((res) => {
                if (!res.data.error) {
                    resolve(res.data);
                    navigate("home");
                } else {
                    reject(res.data.error);
                }
            }).catch((error) => {
                reject(error);
            })
        })
    }
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form  >
                <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" name="email" placeholder="Email:" />
                <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="text" name="password" placeholder="Password:" />
                <input onClick={async (e) => {
                    const res = await login().catch((err) => { console.error(err) });
                    console.log(res);
                }} type="button" value="Login" />
            </form>
        </div>
    )
}
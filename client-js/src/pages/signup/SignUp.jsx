import axios from "axios";
import "./sass/signup.scss"
import { config } from "../../confog";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

export default function SignUp() {
    const navigate = useNavigate();

    const [emal, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");

    const form = useRef(null);

    function formIsValid(data = [""]) {
        let l = 0;
        data.forEach(e => {
            if (e !== "") l++;
        });
        if (l === data.length) {
            
            
        }
        return (l === data.length);
    }

    function signup(email, password) {
        console.log(form.current.checkValidity());
        document.createElement("form").checkValidity()
        // return new Promise((resolve, reject) => {
        //     const formData = new FormData();
        //     formData.append("email", email);
        //     formData.append("password", password);
        //     axios.post(`${config.URL}/signup`, formData).then(res => {
        //         if (!res.data.error) {
        //             console.log(res.data);
        //             //navigate("login");
        //         } else {
        //             reject(res.data);
        //         }
        //     }).catch(error => {
        //         reject(error);

        //     })
        // })
    }
    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form ref={form}>
                <input required onChange={(e) => {setEmail(e.target.value)}} value={emal} type="email" placeholder="Email:" />
                <input onChange={(e) => {setPassword(e.target.value)}} value={password} type="password" placeholder="Password:" />
                <input onChange={(e) => {setConPassword(e.target.value)}} value={conPassword} type="password" placeholder="Continuar password:" />
                <input className="signup-button" onClick={(e) => {
                    if (!formIsValid([emal,password,conPassword])) {
                        signup(emal,password).then(res => {

                        }).catch(error => {
                            console.log(error);
                        })
                    }
                }} type="button" value="Go" />
            </form>
        </div>
    );
}
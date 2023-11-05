const { Server } = require("../Server");
const fs = require("fs");

const INITIAL_USER_DATA = {
    NAME: "",
    LAST_NAME_1: "",
    LAST_NAME_2: "",
    EMAIL:"",
    TITLE: "",
    DESCRIPTION:"",
    CV_URL:"",
    PLATFORMS: [
        {
            NAME:"",
            ICON:"",
            URL:""
        }
    ],
    ABOUT_ME:"",
    SKILLS:[
        {name:"", value: 0},
    ],
    ACADEMIC_DATA: [
        {
            INFORMATION: "",
            TITLE: "",
            SKILLS: [""]
        }
    ],
    EXPERIENCES: [
        {
            INFORMATION: "",
            TITLE: "",
            SKILLS: [""]   
        }
    ],
    LANGUAGES: [
        {
            LANGUAGE: "",
            LEVEL: "",
        }
    ],
    PROJECTS: [
        {
            NAME:"",
            IMAGE:"",
            TITLE:"",
            DESCRIPTION:"",
            URLS:[
                {
                    TYPE: "",
                    NAME:"",
                    DESCRIPTIN: "",
                    URL: ""
                },
                {
                    TYPE: "",
                    NAME:"",
                    DESCRIPTIN: "",
                    URL: ""
                }
            ],
            MEDIA: [
                {
                    TYPE:"",
                    URL: "",
                    DESCRIPTION: ""
                }
            ]
        }
    ]
}


function Get_Users(req, res) {
    fs.readFile("./database/users.json", (err, data) => {
        if (err) {
            res.send({ error: err });
            return;
        }
        const users = JSON.parse(data.toString());
        const user = users.find(u => u.id == req.query.id);
        if (user) {
            res.send({ error: null, data: user });
            console.log("sdjbvsldj")

            return;
        } else {
            res.send({ error: "este usuario no existe" });
        }
    })
}

function POST_users(req, res) {

}

function POST_login(req, res) {
    const { email, password } = req.body;
    fs.readFile("./database/users.json", (error, data) => {
        if (error) {
            res.send({ error })
            return;
        }
        const users = JSON.parse(data.toString());
        const user = users.find(u => u.email && u.password);
        if (user) {
            res.send({ data: user });
        } else {
            res.send({ error: true });
        }
    })
   
}

function POST_signUp(req, res) {
    fs.readFile("./database/users.json", (error, data) => {
        if (error) {
            res.send({ error })
            return;
        }
        const users = JSON.parse(data.toString());
        let email_exist = users.find((u) => u.email === req.body.email);
        if (email_exist) {
            res.send({error: "este email ya existe"});
            return;
        }
        let id = "";
        while (id === "") {
            let chars = "abcdefghijklnmopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUVWXYZ123456789";
            for (let index = 0; index < 10; index++) {
                id += chars.charAt(Math.floor(Math.random()*60));
            }
            console.log(id);
            let u = users.find((u) => u.id === id);
            if (u) {
                id = "";
            }
        }
        let user = {
            id,
            email: req.body.email,
            password: req.body.password,
            userData: INITIAL_USER_DATA,
            colors: [["#F3DB06","#8F8F8F","#3F3F3F","#FFFFFF","#000000"]],
            font: ""
        }
        user.userData.EMAIL = user.email;
        users.push(user);
        fs.writeFile("./database/users.json",JSON.stringify(users), (error) => {
            if (error) {
                res.send({ error })
                return;
            }
            res.send({ data: user });
        })
    })
}

module.exports = { Get_Users, POST_users, POST_login,POST_signUp };
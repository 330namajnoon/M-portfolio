const {Server} = require("../Server");
const fs = require("fs");

function Get_Users(req, res) {
    fs.readFile("./database/users.json",(err, data) => {
        if (err) {
            res.send({error: err});
            return;
        }
        const users = JSON.parse(data.toString());
        const user = users.find(u => u.id == req.query.id);
        if (user) {
            res.send({error: null,data: user});
            return;
        }else {
            res.send({error: "este usuario no existe"});
        }
    })
}

function POST_users(req, res) {
    res.send({server:JSON.stringify(Server)});
}

module.exports = {Get_Users, POST_users};
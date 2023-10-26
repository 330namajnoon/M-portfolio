const {Server} = require("../Server");

function Get_Users(req, res) {
    console.log("hhh")
    res.send({name:"sina"});
}

function POST_users(req, res) {
    res.send({name:"sina"});
}

module.exports = {Get_Users, POST_users};
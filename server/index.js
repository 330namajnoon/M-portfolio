const {Server} = require("./Server.js");
const {Get_Users, POST_users} = require("./Controls/users.control.js");
const server = new Server(4000, "./database");
server.start();
server.setControls(
    [
        [
            "GET",
            "/user",
            Get_Users,
            null
        ]
    ]
)
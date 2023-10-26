const {Server} = require("./Server.js");
const {Get_Users, POST_users} = require("./Controls/users.control.js");
const server = new Server();
server.start();
server.setControls(
    [
        [
            "POST",
            "/users",
            POST_users,
            null
        ]
    ]
)
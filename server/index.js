const {Server} = require("./Server.js");
const {Get_Users, POST_users, POST_login, POST_signUp} = require("./Controls/users.control.js");
const server = new Server(4000, "./database");
server.start();
server.setControls(
    [
        [
            "POST",
            "/login",
            POST_login,
            null
        ],
        [
            "POST",
            "/signup",
            POST_signUp,
            null
        ],
        [
            "GET",
            "/user",
            Get_Users,
            null
        ]
    ]
)
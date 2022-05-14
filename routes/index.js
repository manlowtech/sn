const UsersCont = require("../controllers/UsersController")
const Posts = require("../controllers/postsContoller")
const auth = require("../middlewares/auth")
module.exports = (app)=>{
    // posts routes
    app.post("/create/:user_id",auth,Posts.create)

    // user registration
    app.post('/users/register', UsersCont.create);
    app.post('/users/login', UsersCont.login);
    app.post("/users/welcome",auth,UsersCont.welcome);
}
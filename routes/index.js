const UsersCont = require("../controllers/UsersController")
const Posts = require("../controllers/postsContoller")
const auth = require("../middlewares/auth")
const LikeCont = require("../controllers/likesCont")
module.exports = (app)=>{ //testing phase
    //Likes routes
    //1.post
    app.post("/post/like_dislike",auth,LikeCont.updatePostLikes)
    app.get("/post/total_liles",auth,LikeCont.getLikes)
    //2. comment routes
    app.post("/comment/like_dislike",auth,LikeCont.updateCommentLikes)
    //3. hooks
    app.post("/hook/like_dislike",auth,LikeCont.updateHookLikes)

    //posts routes
    app.post("/create/:user_id",auth,Posts.create)
    app.get('/post/:post_id',auth,Posts.findOnePost)
    app.get("/posts/:user_id",auth,Posts.findAllPosts)
    app.put("/post/:post_id",auth,Posts.updatePost)
    app.delete("/post/:post_id",auth,Posts.deletePost)

    // user registration
    app.post('/users/register', UsersCont.create);
    app.post('/users/login', UsersCont.login);
    app.post("/users/delete_account",auth,UsersCont.welcome); // to be done
}
const Posts = require('../models').Posts;
const LikeCont = require("../models").likes
//const multer = require('multer');
const path = require('path');
/*
===============POLARITY LEVELS===================
-1to-0.5 ====>very -ve
-0.5to 0 =====>-ve
0 ===============>neutral
0-0.5========>positive
0.5to1==================>very +ve
*/
module.exports = {
    create(req, res) {
        const {post_content,user_id} = req.body
        const postPolarity = (post_content)=>{
            return 0
        }
        const mediaUrl =(uid,media_name)=>{
            if(media_name){
                return `/media/posts/${uid}/${media_name}`
            }
            return "nothing"
        }
        return Posts
            .create({ //===================TESTED=============DONE=========================
                user_id:req.params.user_id,
                post_content: req.body.post_content,
                polarity: postPolarity(post_content),
                media_url:mediaUrl(req.params.user_id,req.body.media_name)
            }).then(t => {
                return LikeCont.create({ // initialize like count to zero
                    post_id:t["id"],
                    like_count:0,
                }).then(init=>res.status(200).json({like_count:init,init_success:true,posts:t}))
                .catch(err=>res.json({err:err,init_success:false}))
                res.status(200).json({post_success:true,posts:t,like_count:init})
            })
            .catch(err => res.status(400).send(err));
    },
    findAllPosts(req, res) { //=============TETESD=====STATE,TBDONE==============DONE====
        return Posts
            .findAll({
                where: {
                    //username: req.body.username,
                    user_id:req.params.user_id
                }
            }).then(data => res.status(200).json({ success: true, posts: data, }))
            .catch(err => res.status(400).json({ err: err }));
    },
    homePagePosts(req, res) {//=============TO USE SOME ALGORITHM
        return Posts
            .findAll({
                where: {
                    post_type: "page", // tobe updated
                }
            }).then(data => res.status(200).json({ success: true, pages: data, }))
            .catch(err => res.status(400).json({ err: err }));
    },
    findOnePost(req, res) { //=============DONE====================
        return Posts
            .findOne({
                where: {
                    id: req.params.post_id,
                }
            }).then(post => res.status(200).json({ success: true, post: post }))
            .catch(err => console.log(err));
    },
    updatePost(req, res) {
        return Posts.update(req.body, { // to update for empty cells check
            where: {
                id: req.params.post_id,
                user_id:req.body.user_id
            }
        }).then(result => res.status(200).json({ success: true, post: result }))
            .catch(err => console.log(err));
    },
    deletePost(req,res){
        return 0
    }
}
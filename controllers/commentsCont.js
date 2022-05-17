const Comment = require("../models").post_comments

const Posts = require('../models').Posts;
const LikeCont = require("../models").likes
//const multer = require('multer');
const path = require('path');
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
            return 
        }
        return Posts
            .create({
                title: req.body.title,
                user_id:user_id,
                post_content: req.body.post_content,
                polarity: postPolarity(post_content),
                post_category: req.body.category,
                media_url:mediaUrl(req.body.user_id,req.body.media_name)
            }).then(t => {
                LikeCont.create({ // initialize like count to zero
                    post_id:t[0].id,
                    like_count:0,
                }).then(init=>res.status(200).json({like_count:init,init_success:true}))
                .catch(err=>res.json({err:err,init_success:false}))
                res.status(200).json({post_success:true,posts:t,like_count:init})
            })
            .catch(err => res.status(400).send(err));
    },
    findAllPosts(req, res) {
        return Posts
            .findAll({
                where: {
                    //username: req.body.username,
                    user_id:req.params.user_id
                }
            }).then(data => res.status(200).json({ success: true, posts: data, }))
            .catch(err => res.status(400).json({ err: err }));
    },
    homePagePosts(req, res) {
        return Posts
            .findAll({
                where: {
                    post_type: "page", // tobe updated
                }
            }).then(data => res.status(200).json({ success: true, pages: data, }))
            .catch(err => res.status(400).json({ err: err }));
    },
    findOnePost(req, res) {
        return Posts
            .findOne({
                where: {
                    id: req.params.post_id,
                }
            }).then(post => res.status(200).json({ success: true, post: post }))
            .catch(err => console.log(err));
    },
    updatePost(req, res) {
        return Posts.update(req.body, { // to update for empty cells
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
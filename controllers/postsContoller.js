const Posts = require('../models').Posts;
const multer = require('multer');
const path = require('path');
module.exports = {
    create(req, res) {
        return Posts
            .create({
                title: req.body.title,
                post_content: req.body.post_content,
                polarity: 0,
                post_category: req.body.category,
            }).then(t => res.status(200).send(t))
            .catch(err => res.status(400).send(err));
    },
    findAll(req, res) {
        return Posts
            .findAll({
                where: {
                    id: req.body.post_id,
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
        return Posts.update(req.body, {
            where: {
                id: req.params.post_id,
            }
        }).then(result => res.status(200).json({ success: true, post: result }))
            .catch(err => console.log(err));
    },
}
const Likes = require("../models/").likes
const {countTotalLikes} = require("../utils/likes/totalLikes")
module.exports ={
    updatePostLikes(req,res){
        const {like_type,post_id,action} = req.body
        Likes.findOne({
            where:{
                like_type:like_type,
                post_id:post_id
            }
        }).then(data=>{
            if(action == 'like'){
                return Likes.update({
                    like_count:like_count+1
                },{
                    where:{
                        like_type:like_type,
                        post_id:post_id
                    }
                }).then(result=>{
                    res.status(200).json({likeSuccess:true,likes:result})
                }).catch(err=>res.json({likeSuccess:false,err:err}))
            } //end if
            if(action=='dislike'){
                return Likes.update({
                    like_count:like_count-1
                },{
                    where:{
                        like_type:like_type,
                        post_id:post_id
                    }
                }).then(result=>{
                    res.status(200).json({disLikeSuccess:true,likes:result})
                }).catch(err=>res.json({disLikeSuccess:false,err:err}))
            }//end if
            
        }).catch(err=>console.log(err))
    },updateCommentLikes(req,res){
        const {like_type,comment_id,action} = req.body
        Likes.findOne({
            where:{
                like_type:like_type,
                comment_id:comment_id
            }
        }).then(data=>{
            if(action == 'like'){
                return Likes.update({
                    like_count:like_count+1
                },{
                    where:{
                        like_type:like_type,
                        comment_id:comment_id
                    }
                }).then(result=>{
                    res.status(200).json({likeSuccess:true,likes:result})
                }).catch(err=>res.json({likeSuccess:false,err:err}))
            } //end if
            if(action=='dislike'){
                return Likes.update({
                    like_count:like_count-1
                },{
                    where:{
                        like_type:like_type,
                        comment_id:comment_id
                    }
                }).then(result=>{
                    res.status(200).json({disLikeSuccess:true,likes:result})
                }).catch(err=>res.json({disLikeSuccess:false,err:err}))
            }//end if
        }).catch(err=>console.log(err))
    },updateHookLikes(req,res){
        const {like_type,hook_id,action} = req.body
        Likes.findOne({
            where:{
                like_type:like_type,
                hook_id:hook_id
            }
        }).then(data=>{
            if(action == 'like'){
                return Likes.update({
                    like_count:like_count+1
                },{
                    where:{
                        like_type:like_type,
                        hook_id:hook_id
                    }
                }).then(result=>{
                    res.status(200).json({likeSuccess:true,likes:result})
                }).catch(err=>res.json({likeSuccess:false,err:err}))
            } //end if
            if(action=='dislike'){
                return Likes.update({
                    like_count:like_count-1
                },{
                    where:{
                        like_type:like_type,
                        hook_id:hook_id
                    }
                }).then(result=>{
                    res.status(200).json({disLikeSuccess:true,likes:result})
                }).catch(err=>res.json({disLikeSuccess:false,err:err}))
            }//end if
        }).catch(err=>console.log(err))
    },
    getLikes(req,res){ // get total likescount
        const {post_id} = req.body
        countTotalLikes("post",post_id)
    }
}
const Likes = require("../../models").Likes

const countTotalLikes =(type,id)=>{
    if(type =="post"){
        return Likes.findOne({
            where:{
                post_id:id
            }
        }).then(data=>res.status(200).json({likecountsuccess:true,likecount:data}))
        .catch(err=>console.log(err))
    } //end if
    if(type =="comment"){
        return Likes.findOne({
            where:{
                comment_id:id
            }
        }).then(data=>res.status(200).json({likecountsuccess:true,likecount:data}))
        .catch(err=>console.log(err))
    } //end if
    if(type =="hook"){
        return Likes.findOne({
            where:{
                hook_id:id
            }
        }).then(data=>res.status(200).json({likecountsuccess:true,likecount:data}))
        .catch(err=>console.log(err))
    } //end if
}
module.exports = countTotalLikes
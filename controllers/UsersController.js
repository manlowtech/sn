const user = require("../models").Users;
const jwt = require("jsonwebtoken")
module.exports ={
    create(req,res){
        /*const users = user.findAll({
            where:{
                username:req.body.username
            }
        })
        if(users.length>0){
            return res.json({success:false})
        } */
        console.log("body",req.body)
        return user.create({
            username:req.body.username,
            password:req.body.password,
            //role:req.body.role,
            email:req.body.email
            
        }).then(t=>{
            res.status(200).json({created:true,t})
        })
        .catch(err=>console.log(err))
    }, //end create
    
    login(req, res) {
        return user
            .findAll({
                where: {
                    username: req.body.username,
                    password:req.body.password
                }
            }).then(data => {
                console.log("users",data[0].id)
                
                if(data){
                    const token = jwt.sign({
                        user_id:data[0].id
                    },"token-key",{expiresIn:"2h"})
                    console.log("token ====",token)
                    res.status(200).json({ success: true, users: data,token:token})
                }
                
            })
            .catch(err => res.status(400).json({ err: err}));
    },
    welcome(req,res){
        res.json({msg:"welcome"})
    }
}
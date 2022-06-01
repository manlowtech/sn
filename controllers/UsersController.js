const user = require("../models").Users;
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
module.exports ={
    create(req,res){
        const ueracc = user.findOne({where:{
            username:req.body.username
        }})
        if(useracc){
            return res.json({user_alredy_exist:true})
        }else{
            return user.create({
                username:req.body.username,
                password: await bcrypt.hash(req.body.password,10),
                //role:req.body.role,
                email:req.body.email
                
            }).then(t=>{
                res.status(200).json({created:true,t})
            })
            .catch(err=>console.log(err))
        }
        
    }, //end create
    
    login(req, res) {
        const ueracc = user.findOne({where:{
            username:req.body.username
        }})
        if(useracc && await bcrypt.compare(req.body.password,user["password"])){
            const token = jwt.sign({
                user_id:data[0].id
            },"token-key",{expiresIn:"2h"})
            console.log("token ====",token)
            res.status(200).json({ success: true, users: data,token:token})
        }else{
            res.json({login_status:false})
        }
    },
    welcome(req,res){
        res.json({msg:"welcome"})
    }
}
const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
    const token = req.body.token
    //req.headers["x-access-token"] 
    if(!token){
        return res.status(403).json({success:false,validtoken:false})
    }
    try{
        const decoded = jwt.verify(token,"token-key")
        req.user = decoded
    }catch(err){
        return res.status(401).json({validtoken:false,err})
    }
    return next()
}
module.exports = auth;
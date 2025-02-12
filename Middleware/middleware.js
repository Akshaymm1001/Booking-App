const jwt =require('jsonwebtoken')
const secretKey ='mySecretKey'

module.exports.VerifyToken = (req,res,next)=>{
    const token = req.headers['authorization']?.split(' ')[1]
    if (token){
        return res.status(403).send('token is required')
    }
    jwt.verify(token,secretKey,(err,decoded)=>{
        if(err){
            return res.status(401).send('invalid token')
        }
        req.unserId=decoded.Id;
        console.log("tokenverified");
        next()
    })
}
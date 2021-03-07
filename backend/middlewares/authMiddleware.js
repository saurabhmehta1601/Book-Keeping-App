const User = require('../models/User')
const jwt =require('jsonwebtoken')
const asyncHandler =require('express-async-handler');

const authMiddleware =  asyncHandler( async (req,res,next) =>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token=req.headers.authorization.split(" ")[1]

            const decodedUser= jwt.verify(token,process.env.JWT_SECRET_KEY)
            const user= await User.findById(decodedUser.id)
            req.user=user

            next()
        } catch (error) {
            res.status(401)

            throw new Error('Not authorized, invalid token provided')
        }
    }else{
        throw new Error('Not authrization token in headers')
    }
})

module.exports=authMiddleware
const express=require('express')
const User =require('../models/User')
const asyncHandler = require('express-async-handler')
const usersRoute=express.Router()


// Register
usersRoute.post("/register",asyncHandler( async (req,res)=>{
    
        const {name,email,password} = req.body
        const userExists =await User.findOne({email:email})

        if(userExists){
            throw new Error('User with given email already exists')
        }
        const createdUser =await User.create({name,email,password})
        res.send(createdUser)
}))

// Login
usersRoute.post('/login',asyncHandler( async (req,res) => {

    const {email,password} = req.body

    const user= await User.findOne({email:email})

    if(user && (await user.isPasswordMatch(password))){
        res.status(200)
        res.json({
            id:user.id
        })
    }else{
        res.status(401)
        throw new Error('Invalid credentials')
    }
})
)

// update user
usersRoute.put('/update',(req,res)=>{
    res.send('user update request made')
})

// delete user
usersRoute.delete('/:id',(req,res)=>{
    res.send('deleted user request made')
})


// fetch users
usersRoute.get('/',(req,res)=>{
    res.send('fetched users')
})


module.exports=usersRoute
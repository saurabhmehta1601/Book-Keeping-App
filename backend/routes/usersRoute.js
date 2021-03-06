const express=require('express')
const User =require('../models/User')
const usersRoute=express.Router()


// Register
usersRoute.post("/register",async (req,res)=>{
    try{
        const {name,email,password} =req.body
        const user =await User.create({name,email,password})
        console.log(user)
        res.send(user)
    }catch(err) {
        console.log(err) 
    }
})

// Login
usersRoute.post('/login',(req,res)=>{
    res.send('logging request made')
})

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
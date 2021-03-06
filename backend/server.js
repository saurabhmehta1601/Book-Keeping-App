require('dotenv').config()
const express =require('express')
const app= express()

// DB Connect
require('./config/dbConnect')()

// Routes
// Users Routes

// Register
app.post("/api/users/register",(req,res)=>{
res.send('register request made');
})

// Login
app.post('/api/users/login',(req,res)=>{
    res.send('logging request made')
})

// update user
app.put('/api/users/update',(req,res)=>{
    res.send('user update request made')
})

// delete user
app.delete('api/users/:id',(req,res)=>{
    res.send('deleted user request made')
})

// fetch users
app.get('/api/users',(req,res)=>{
    res.send('fetched users')
})

// Server
const PORT = process.env.PORT || 5000
app.listen(PORT , ()=>{
    console.log('process.env',process.env)
    console.log('app is running on port '+ PORT)
})
require('dotenv').config()
const express =require('express')
const app= express()
const User =require('./models/User')
// DB Connect
require('./config/dbConnect')()

// parse body data
app.use(express.json())


// Routes
// Users Routes

// Register
app.post("/api/users/register",async (req,res)=>{
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
    console.log('app is running on port '+ PORT)
})
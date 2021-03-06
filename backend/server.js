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
const usersRoute=require('./routes/usersRoute')
app.use('/api/users',usersRoute)




// Server setup
const PORT = process.env.PORT || 5000
app.listen(PORT , ()=>{
    console.log('app is running on port '+ PORT)
})
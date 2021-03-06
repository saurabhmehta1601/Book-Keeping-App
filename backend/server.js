require('dotenv').config()
const express =require('express')
const app= express()
const User =require('./models/User')
const error=require('./middlewares/errorMiddlewareHandler')
const cors=require('cors')

// DB Connect
require('./config/dbConnect')()

// parse body data
app.use(express.json())
app.use(cors())

// Routes

// User 
const usersRoute=require('./routes/usersRoute')
app.use('/api/users',usersRoute)

// Books
const booksRoute = require('./routes/bookRoutes')
app.use('/api/books',booksRoute)

// error handler middleware
app.use(error.errorMiddlewareHandler)


// Server setup
const PORT = process.env.PORT || 5000
app.listen(PORT , ()=>{
    console.log('app is running on port '+ PORT)
})
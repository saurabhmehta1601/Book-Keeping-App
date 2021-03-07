const mongoose =require('mongoose')
const bcrypt =require('bcryptjs')

// Schema
const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

// Middlewares

// hash password before saving in database
UserSchema.pre('save', async function(next){
    const salt= await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt) 
    next()
})

// we can attach methods to schema
// verify password
UserSchema.methods.isPasswordMatch =async function(enteredPassword) {
     return await bcrypt.compare(enteredPassword,this.password) 
}


const User =new mongoose.model('User',UserSchema)

module.exports = User
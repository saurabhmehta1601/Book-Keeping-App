const mongoose=require('mongoose')

const dbConnect =() => {
    mongoose.connect(process.env.MONGO_URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useFindAndModify:true,
        useCreateIndex:true,
    })
    .then( ()=> console.log('db connected') ) 
    .catch((err) =>console.log(err))
    
}


module.exports=dbConnect
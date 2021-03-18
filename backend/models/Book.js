const mongoose =require('mongoose')

const bookSchema= new mongoose.Schema({
    category:{
        type:String,
        required:[true,'Book category is required']
    },
    author:{ 
        type:String,
        required:[true,'Book author is required']
    },
    title:{
        type:String,
        required:[true,'Book title is required']
    },
    addedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required :true
    }
},{
    timestamps:true
})

const Book =new mongoose.model('Book',bookSchema)

module.exports=Book
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://sivartnap:asianfamily2287575@ecommerce.xbbo7sl.mongodb.net/").then(()=>{
    console.log('mongoose connected')
}).catch((e) => {
    console.log('failed')
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model('LogInCollection', logInSchema)

module.exports=collection
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is requires"],

    },
    email:{
        type:String,
        required:[true,"email is requires"],
        unique:[true,"unique field"],
        
    },

    password:{
        type:String,
        required:[true,"password is requires"],

    },
    mobile:{
        type:Number,
        maxLenght:12,
        minLength:10,
        unique:[true,"unique field"],
    }
    
    
    

},{collection:"userCollection",

},{timestamps:true})
const user = mongoose.model("user",userSchema)
module.exports = user
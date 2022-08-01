const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    sessionid:{
        type:String
    },
    textcount:Number
})
const textschema=new mongoose.Schema({textcount:Number,text:String})
const Text=mongoose.model('text',textschema)
const users=mongoose.model('users',userSchema)
 module.exports={Text,users}
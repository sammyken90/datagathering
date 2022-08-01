const mongoose=require("mongoose")
const dbstring='mongodb://127.0.0.1:27017/sessiondb'
const dboptions={useNewUrlParser: true ,useUnifiedTopology: true }
mongoose.connect(dbstring,dboptions,function(err,done){
    if(err){
    return console.log("error in db connection",err)
    }
    console.log("Main db connection established")
})



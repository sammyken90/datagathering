const session=require('express-session')
const express=require('express')
const mongoose=require('mongoose')
//const multer=require('multer')
// const fs=require('fs')
const bodyParser= require('body-parser')
//const { FindCursor } = require('mongodb')
const MongoStore=require('connect-mongo')(session)
const app=express()
const cors = require('cors');
//const { Console } = require('console')
//const { json } = require('body-parser')
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200}
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors(corsOptions));
app.use(express.json())
app.use(bodyParser.json())

app.use(express.urlencoded({extended:true}))
require('./db_init')
//require('./configs/session.config')
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'text')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })
   
//   var text = multer({ storage: storage })



// const userSchema=new mongoose.Schema({
//     sessionid:{
//         type:String
//     },
//     textcount:Number
// })
// const textschema=new mongoose.Schema({textcount:Number,text:String})
// let Text=mongoose.model('text',textschema)
// let audio = mongoose.model( 'audio', new mongoose.Schema({textcount:Number},{audiopath:String},{isConfirmed:Boolean}));

//  let users=mongoose.model('users',userSchema)
const dbstring='mongodb://127.0.0.1:27017/sessiondb'
const dboptions={useNewUrlParser: true ,useUnifiedTopology: true }
const connection = mongoose.createConnection(dbstring,dboptions,function(err,done){
    if(err){
    return console.log("error in db connection",err)
    }
    console.log("session db connection established")
})
const sessions=new MongoStore({
    mongooseConnection:connection,
    collection:'session1'})

    app.use(session({
        secret:'some secret',
        resave:false,
        saveUninitialized:true,
        store:sessions,
        cookie:{
            maxAge:10000*60*60*24
        }}))


const routing=require('./Routes/routes')


app.get('/',routing)
app.get('/gettext', routing)
app.post('/uploadjson', routing)
        
            



//console.log(y)
//res.json(user.textcount)

   
        
         

        
        app.listen(process.env.PORT||4000,()=>{
            console.log('server started!')
        })
        
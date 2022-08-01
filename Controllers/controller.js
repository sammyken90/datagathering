const fs=require('fs')
const express=require('express')
const app =express()

//lp=landing page

const y=require('../Models/model.js')
//app.use(y.t)
z=require('../configs/multer.config')
const getlp=(req,res)=>{
    console.log('inside get')
    
}
const gettextlp=(req,res)=>{
    console.log("inside gettext")
    
    const user= new y.users
let x = Math.floor((Math.random() * 10) + 1);
user.sessionid=req.sessionID
user.textcount=x
user.save().then((obj)=>{
    
})
y.Text.findOne({textcount:user.textcount},function(err,obj) {


res.send(obj.toObject().text)

}); 

 }

 const uploadjsonlp=app.post('/uploadjson',(z.t).single('file'),function(req,res){
    
    y.Text.deleteMany({},(res)=>{
        console.log(res)
    })
    
 fs.readFile(req.file.path,(err,res)=>{
   console.log((JSON.parse(res)))
y.Text.insertMany(JSON.parse(res))
 });
    


})

module.exports={getlp,gettextlp,uploadjsonlp}
const express = require('express')
const app=express()
const multer=require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'text')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var t = multer({ storage: storage })
  app.use(express.static('public'))
  

  module.exports={t}
  
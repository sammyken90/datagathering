// 3rd Party Modules
const express = require('express');
const Router=express();

// Local Modules
const myController = require('../Controllers/controller');

// Initialization


Router.get('/',myController.getlp)
Router.get('/gettext',myController.gettextlp)
Router.post('/uploadjson',myController.uploadjsonlp)

module.exports=Router
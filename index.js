const express = require('express');
const app =express();
const {port}= require('./config');
const apiRouter= require('./routes/api');
const bodyParser= require('body-parser');

//routes
app.use('/api/', apiRouter)

//parsery 
//Content-type:aplication:json
app.use(bodyParser.json());


//db
require('./backend/db/mongoose')


//server
app.listen(port,function(req,res){
    console.log('serwer słucha... http://localhost:3000')
});
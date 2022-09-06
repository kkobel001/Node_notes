const express = require('express');
const app =express();
const {port}= require('./config');
const apiRouter= require('./routes/api');

app.use('/api', apiRouter)


//server
app.listen(port,function(req,res){
    console.log('serwer słucha... http://localhost:3000')
});
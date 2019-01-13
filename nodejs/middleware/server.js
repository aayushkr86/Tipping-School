var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;
var app =express();
const path = require('path');


app.use(express.static('public'))

app.get('/',function(req,res,next){
    res.sendFile(__dirname+'/index.html');
});

app.listen(port,hostname,function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});
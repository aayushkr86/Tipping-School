var express = require('express');
var app = express();


app.get('/',function(req,res){
    res.send('this is the homepage');
});

app.get('/contact',function(req,res){
    res.send('this is the Contact Page');
});

app.listen(3000);
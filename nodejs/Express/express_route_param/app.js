var express = require('express');
var app = express();


app.get('/',function(req,res){
    res.send('this is the homepage');
});

app.get('/contact',function(req,res){
    res.send('this is the Contact Page');
});

app.get('/profile/:id',function(req,res){          // or name
    res.send('You requested to see a profile with the id of ' + req.params.id);
});

app.listen(3000);
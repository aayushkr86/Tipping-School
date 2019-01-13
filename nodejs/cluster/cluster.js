var cluster = require('cluster');
var express = require('express');
var app =express();


if(cluster.isMaster){
    var numWorkers = require('os').cpus().length;
   console.log('Master cluster setting up '+numWorkers+' workers...');

   for(var i=0;i<numWorkers;i++){
       cluster.fork();
   }
   cluster.on('online',function(worker){
       console.log('Worker '+worker.process.pid+' is online');
   });
   cluster.on('exit',function(worker,code,signal){
       console.log('worker '+worker.process.pid+' died with code:'+code+'signal');
       console.log('starting a new worker');
       cluster.fork();      
   });
}else{
    
    app.all('/*',function(req,res){
        res.send('process '+process.pid+' says hello!').end()
    });
    var server = app.listen(3000,function(){
     console.log('Process '+process.pid+' is listening to all incoming request');
    });
}
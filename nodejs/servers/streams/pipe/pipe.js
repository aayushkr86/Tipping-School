var http=require('http');
var fs = require('fs');
 
var server = http.createServer(function(req,res){
console.log('request was made at:' + req.url);//address of browser
res.writeHead(200,{'Content-Type':'text/plain'});//header status,content type i.e text/html
    
var myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8');//readfile
myReadStream.pipe(res);//moves to browser
});

server.listen(3000,'127.0.0.1');//port,address
console.log('serever now runnining at port 3000');

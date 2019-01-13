var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});  //header stauts,content type
    res.end('Hey ninjas');
});

server.listen(3000,'127.0.0.1');    //port no,IP address
console.log('yo daws,now the server is running to port 3000');


var http = require('http');

http.createServer(function(request, response){

    response.writeHead(200, {'Content-Type':'txt/html'});
    response.end("Welcome Back Alien");

}).listen(8083);
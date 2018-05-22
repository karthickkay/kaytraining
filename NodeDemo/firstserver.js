var httpVariable = require('http')

httpVariable.createServer(function(request, response){
   response.writeHead(200, {'Content-Type':'text/html'})
   response.write("Hello from node server  6065!!!!")
   response.end();

}).listen(6065)
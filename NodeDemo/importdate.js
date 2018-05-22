var httpVariable = require('http')
var currentdate = require('./datelibrary')

var myserver = 

httpVariable.createServer(function(request, response){
   response.writeHead(200, {'Content-Type':'text/html'})
   response.write("Hello from node server  again6065!!!!")
   response.write("<br>")
   var cd = currentdate.myDate()
   response.write(cd)
   response.end();

}).listen(6065)
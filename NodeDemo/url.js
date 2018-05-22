var http= require('http')

var server = http.createServer(serverFunction)
function serverFunction(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("I am working with URL")
    res.write("<br>")
    res.write(req.url)
    res.end()
}
server.listen(6065)
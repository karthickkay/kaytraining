var http = require('http')
var url = require('url')
var os = require('os')
var server = http.createServer(queryParamserver).listen(6065)

function queryParamserver(req, res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("I am working with URL query parameter")
    var myquery = url.parse(req.url, true).query

    var queryText1 = myquery.name1
    var queryText2 = myquery.loc

    var myquery1 = url.parse(req.url, true)

    // var queryText3 = myquery.path
    console.log(os.hostname)
    // console.log(myquery1.pathname)
    res.write("<br>")
    res.write(queryText1 + " " +queryText2)
    res.end()
}
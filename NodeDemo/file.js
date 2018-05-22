var http = require('http')
var file = require('fs')

var server = http.createServer(fileServer).listen(6065)

function fileServer(req, res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("I am working with fs module!!!")

    file.readFile('india.html', function(err,data){
        if(err){
            console.log("Error reading file:" + err)
        }
        res.write("<br>")
        res.write(data)

        file.writeFile("bharat.html",data, function(err){
            console.log(err)
        })

        res.end()
    })



    
}

// function fileReadStatusFunction(err, data){

// }
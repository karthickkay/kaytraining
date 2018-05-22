var mysqldb = require('mysql')

var connection = mysqldb.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    port : '3307',
})

connection.connect(function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Connected to the mySQL server")
        
    }
})

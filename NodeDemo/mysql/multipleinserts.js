var mysqldb = require('mysql')

var connection = mysqldb.createConnection({
host:'localhost',
user:'root',
password:'',
database:'fromnode1',
port : '3307'
})

connection.connect(function(err){
if(err)
{
throw err
}
else{
console.log("Connected to Mysql server");
// var sql = "Create table friends (name varchar(32),id int, location varchar(32))";
var sql = 'insert into friends (id, name, location) values ?'
var records = [
    [2, 'mohan','ajmer'],
    [3, 'mohan2','ajmer2'],
    [4, 'mohan3','ajmer2'],
    [5, 'mohan4','ajmer2'],
    [6, 'mohan5','ajmer2'],
]

connection.query(sql,[records], function(err,suc){
if(err)
{
throw err;
}
else{
console.log("many rows created");
}
})
}
})  

var client = require("mongodb")

dbUrl = "mongodb://localhost:27017"

client.connect(dbUrl, function(err, db){
if(err){
throw err
}
console.log("Database db instance Created")

var database = db.db("nodemongo")
database.createCollection("tutorial", function(err,res){
    if (err){
        throw error
    }
    console.log("collection created")
    db.close();
})

}) 

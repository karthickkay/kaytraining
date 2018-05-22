var client = require("mongodb")

dbUrl = "mongodb://localhost:27017/"

client.connect(dbUrl, function(err, db){
if(err){
throw err
}
console.log("Database db connected")

var database = db.db("nodemongo")

var jsonobj = {"gender": "male", "name":"karthick", "location":"Chennai"}
database
.collection("tutorial")
.insertOne(jsonobj, function(err,res){
    if (err){
        throw error
    }
    console.log("One Doc created")
    db.close();
})

}) 

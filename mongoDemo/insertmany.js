var client = require("mongodb")

dbUrl = "mongodb://localhost:27017/"

client.connect(dbUrl, function(err, db){
if(err){
throw err
}
console.log("Database db connected")

var database = db.db("nodemongo")

var jsonobj = [
{"gender": "male", "name":"karthick", "location":"Chennai"},
{"gender": "female", "name":"Ram", "location":"delhi"},
{"gender": "male", "name":"Raj", "location":"Chennai"},
{"gender": "female", "name":"arjun", "location":"surat"},
{"gender": "male", "name":"krish", "location":"kochi"}
]
database
.collection("tutorial")
.insertMany(jsonobj, function(err,res){
    if (err){
        throw error
    }
    console.log("Many Docs created")
    db.close();
})

}) 

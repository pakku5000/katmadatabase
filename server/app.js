const express = require ("express");
const cors = require("cors");
const mongoClient = require("mongodb").MongoClient;
const   assert = require('assert');
const{ MongoClient, Db, ObjectId } =require('mongodb');

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false}));



let connectionString = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.4.2"
let database = "katmaDB"


app.get("/users",(req, res)=>{
    db.collection("users").find().toArray((error, response)=>{
        res.json(response)
    })
})

app.post("/users", (req, res) => {
    db.collection("users").insertOne(req.body);
    console.log(JSON.stringify(req.body) + "was inserted");
})

app.get("/machines",(req, res)=>{
    db.collection("machines").find().toArray((error, response)=>{
        res.json(response)
    })
})

app.post("/machines", (req, res) => {
    db.collection("machines").insertOne(req.body);
    console.log(JSON.stringify(req.body) + "was inserted");
})

app.get("/operators",(req, res)=>{
    db.collection("operators").find().toArray((error, response)=>{
        res.json(response)
    })
})

app.post("/operators", (req, res) => {
    db.collection("operators").insertOne(req.body);
    console.log(JSON.stringify(req.body) + "was inserted");
})

app.listen(9000, () => {
    mongoClient.connect(connectionString, {useNewUrlParser: true}, (err, client) => {
        assert.equal(null, err);

        db = client.db(database)
        console.log("Connected!")
        
        db.command( { collMod: "machines",
validator: {
    $jsonSchema: {
        bsonType: "object",
        required: ["_id"],
        additionalProperties: false,
        properties: {
            _id : {
                bsonType: "objectId",
            },
            operatorId: {
                bsonType: "string",
            },
            date: {
                bsonType: "date",
            },
            name: {
                bsonType: "string",
            },
            telephone: {
                bsonType: "int",
            },
            email: {                  
                bsonType: "string",  
            }, 
            useCount: {
                bsonType: "int",  
            },
            capacity: {
                bsonType: "int", 
            },
            ROI: {
                bsonType: "int", 
            },
         }
    }
}
} )
        
    }
    )
})





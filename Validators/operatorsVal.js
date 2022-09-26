//copy paste in app.js under console.log("Connected!") to modify/run validation

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


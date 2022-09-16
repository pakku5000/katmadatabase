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
            machineId: {
                bsonType: "string",
            },
            date: {
                bsonType: "date",
            },
            chemicalLevel: {
                bsonType: "int",
            },
            waterLevel: {
                bsonType: "int",
            },
            operator: {                  
                bsonType: "object",  //{name : String, telephone : number, email: String, ...}
            }, 
            location: {
                bsonType: "object",  //{city : String, street: String, houseNumber: Number, PLZ : Number, longitude : Number, latitude : Number, ...}
            },
            operational: {
                bsonType: "bool", 
            },
            maintenanceList: {
                bsonType: "object", //List of maintenances
            },
            userList: {
                bsonType: "object",  // List of userId's that used the machine
            },
         }
    }
}
} )
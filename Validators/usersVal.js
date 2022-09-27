//copy paste in app.js under console.log("Connected!") to modify/run validation

db.command( { collMod: "users",
validator: {
    $jsonSchema: {
        bsonType: "object",
        required: ["_id"],
        additionalProperties: false,
        properties: {
            _id : {
                bsonType: "objectId",
            },
            userId: {
                bsonType: "string",
            },
            email: {
                bsonType: "string",
            },
            date: {
                bsonType: "date",
            },
            randomInt: {
                bsonType: "int",
            },
            text: {
                bsonType: "string",
            },
            licensePlate: {
                bsonType: "string",
            },
            container: {
                bsonType: "object",  // {storage: Number, model: string}
            },
            cleaningCertificate: {
                bsonType: "object", // {date : Date, certificate : String, ...}
            },
            validUntil: {
                bsonType: "date", 
            },
         }
    }
}
} )
/*
const diro = {storage: "Number", model: "string"}
console.log(typeof diro)
*/
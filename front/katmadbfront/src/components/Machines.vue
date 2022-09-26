<template>
    <div>
        <form>
            <label for="machineId">Machine Id:</label><br>
            <input type="text" id="machineId" name="machineId" required v-model= "machineId"><br>
            <label for="location">Location:</label><br> 
            <label for="city">City:</label><br>
            <input type="text" id="city" name="city" required v-model= "city"><br>
            <label for="postcode">Postcode:</label><br>
            <input type="text" id="postcode" name="postcode" required v-model= "postcode"><br>
            <label for="longitude">Longitude:</label><br>
            <input type="text" id="longitude" name="longitude" required v-model= "longitude"><br>
            <label for="latitude">Latitude:</label><br>
            <input type="text" id="latitude" name="latitude" required v-model= "latitude"><br>
            <button v-on:click="add">Submit to Database</button>
        </form>
        <p>Machine Id : {{machineId}}</p>
        <p>city : {{city}}</p>
    </div>
    </template>
    
    <script>
        import axios from "axios"
        export default{
            name: "Machines",
            data() {
                return {
                    machineId: "",
                    city: "",
                    postcode: "",
                    longitude: "",
                    latitude: "",
                }
            },
            methods: {
                add() {
                    axios.post("http://localhost:9000/machines",  {
                        machineId: this.machineId, 
                        location: {
                            city: this.city, 
                            postcode: this.postcode, 
                            longitude: this.longitude, 
                            latitude: this.latitude,
                        }
                    }
                    ).then(response => {
                                console.log(response);
                    }
                    ).catch(error => {
                                console.error(error);
                            }
                    );
                },
            }
    
        
        }
    </script>
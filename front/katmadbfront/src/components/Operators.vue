<template>
    <div>
        <form>
            <label for="operatorId">Operator Id:</label><br>
            <input type="text" id="operatorId" name="operatorId" required v-model= "operatorId"><br>
            <label for="contact">Contact:</label><br>
            <label for="telephone">Telephone:</label><br>
            <input type="text" id="tel" name="telephone" required v-model= "telephone"><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required v-model= "email"><br>
            <button v-on:click="add">Submit to Database</button>
        </form>
        <p>Operator Id : {{operatorId}}</p>
        <p>Telephone : {{telephone}}</p>
        <!--<p>userData : {{this.userData}}</p>-->
    </div>
    </template>
    
    <script>
        import axios from "axios"
        export default{
            name: "Operators",
            data() {
                return {
                    operatorId: "",
                    telephone: "",
                    email: ""
                   //userData: {"userId": this.userId, "LicensePlate": this.licensePlate},
                }
            },
            methods: {
                add() {
                    axios.post("http://localhost:9000/operators",  {
                        operatorId: this.operatorId, 
                        telephone: this.telephone, 
                        email: this.email
                    }
                            ).then(response => {
                                console.log(response);
                            })
                            .catch(error => {
                                console.error(error);
                            });
                },
            }
    
        
        }
    </script>
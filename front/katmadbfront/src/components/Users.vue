<template>
<div>
    <form>
        <label for="userId">User Id:</label><br>
        <input type="text" id="userId" name="userId" required v-model= "userId"><br>
        <label for="licensePlate">License Plate:</label><br>
        <input type="text" id="licensePlate" name="licensePlate" required v-model= "licensePlate"><br>
        <button v-on:click="add">Submit to Database</button>
    </form>
    <p>User Id : {{userId}}</p>
    <p>License Plate : {{licensePlate}}</p>
    <!--<p>userData : {{this.userData}}</p>-->
</div>
</template>

<script>
    import axios from "axios"
    export default{
        name: "Users",
        data() {
            return {
                userId: "",
                licensePlate: "DE",
               //userData: {"userId": this.userId, "LicensePlate": this.licensePlate},
            }
        },
        methods: {
            add() {
                axios.post("http://localhost:9000/users",  {userId: this.userId, licensePlate: this.licensePlate})
                        .then(response => {
                            console.log(response);
                        })
                        .catch(error => {
                            console.error(error);
                        });
            },
        }

    
    }
</script>
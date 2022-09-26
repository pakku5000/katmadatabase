import axios from "axios"

<template>
  <div id="app">
    <h1>{{title}}</h1>  
    
    <router-link to="/users" custom v-slot="{ navigate }">
      <button @click="navigate" @keypress.enter="navigate" role="link">Users</button>
    </router-link>

    <router-link to="/machines" custom v-slot="{ navigate }">
      <button @click="navigate" @keypress.enter="navigate" role="link">Machines</button>
    </router-link>

    <router-link to="/operators" custom v-slot="{ navigate }">
      <button @click="navigate" @keypress.enter="navigate" role="link">Operators</button>
    </router-link>
    
  <router-view/> 
  </div>
</template>

<script>
import Users from "./components/Users.vue"
import Machines from "./components/Machines.vue"
import Operators from "./components/Operators.vue"

export default {
  name: 'App',
  components: {Users, Machines, Operators},
  data() {
    return {
      title: "KatmaDB",
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

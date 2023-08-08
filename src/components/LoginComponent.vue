<template>
    <div>
        <h1>Login!</h1>
        
        <input type="text" placeholder="enter email" v-model="email">
        <input type="password" placeholder="enter password" v-model="password">
        <button @click="handleLogin">Login</button>
        <p>New User?</p>
        <p :style="{'cursor':'pointer'}" @click="$emit('register')">Register Here!</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LoginComponent',
    data() {
        return {
            
            email:'',
            password:'',
        }

    },
    methods:{
        handleLogin(){
            console.warn(this.email, this.password);
            axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            ).then((result)=>{
                if(result.data[0]){
                console.log(result);
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'Home'})}
            })
            

            // http://localhost:3000/user?email=segfsdf&password=sdvgdsfvsd
        }
    },
    emits:['register']
}
</script>

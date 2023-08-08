<template>
    <div>
        <h1>Sig up!</h1>
        <input type="text" placeholder="enter name" v-model="name">
        <input type="text" placeholder="enter email" v-model="email">
        <input type="password" placeholder="enter password" v-model="password">
        <button @click="handleSignup">Login</button>
        <p>Already registered?</p>
        <p :style="{'cursor':'pointer'}" @click="$emit('login')">Login Here!</p>
    </div>
</template>

<script>
import axios from'axios';
export default {
    name: 'SignupComponent',
    data() {
        return {
            name: '',
            email:'',
            password:'',
        }

    },
    
    methods:{
        handleSignup(){
            // console.warn("Sign up user with email ", this.name, this.email);
            axios.post("http://localhost:3000/user",{
                email:this.email,
                name:this.name,
                password:this.password
            }).then((result)=>{
                console.log(result);
                localStorage.setItem("user-info",JSON.stringify(result.data))
            })
        }
    },
    emits:['login']
}
</script>

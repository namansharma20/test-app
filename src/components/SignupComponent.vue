<template>
    <div class="main">
        <div class="register">
            <h1>Sign up!</h1>
            <input type="text" placeholder="enter name" v-model="name">
            
            <input type="text" placeholder="enter email" v-model="email">
            <input type="password" placeholder="enter password" v-model="password">
            <button @click="handleSignup">Login</button>
        </div>
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
                
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'Home'})
            })
        }
    },
    emits:['login']
}
</script>
<style>
.main{
    border: 1px solid black;
    margin: 20px 500px;
    border-radius: 10px;
}
.register{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.register input{
    width:250px;
    padding: 10px;
    margin: 10px;
}
.register button{
    width:250px;
    padding:10px;
    margin:10px
}
</style>
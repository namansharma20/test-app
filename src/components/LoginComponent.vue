<template>
    <div class="main">

        <div class="login">
            <h1>Login!</h1>
            
            <input type="text" placeholder="enter email" v-model="email">
            <input type="password" placeholder="enter password" v-model="password">
            <button @click="handleLogin">Login</button>
        </div>
        <div class="register">
            
            <p>New User?</p>
            <button class="register" :style="{'cursor':'pointer'}" @click="$emit('register')">Click Here!</button>
        </div>
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
            
            axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            ).then((result)=>{
                if(result.data[0]){
                
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'Home'})}
            })
            

            // http://localhost:3000/user?email=segfsdf&password=sdvgdsfvsd
        }
    },
    emits:['register']
}
</script>

<style scoped>
.login{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.login input{
    width:250px;
    padding: 10px;
    margin: 10px;
}
.login button{
    width:250px;
    padding:10px;
    margin:10px
}
.register{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.register p{
    font-size: 15px;
    color: black;
    margin-top: 20px;
}
.register button{
    width:100px;
    margin:10px;
    font-size: 12px;
}
.main{
    border: 1px solid black;
    margin: 20px 500px;
    border-radius: 10px;
}
</style>

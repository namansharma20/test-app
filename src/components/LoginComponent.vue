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
        }
    },
    emits:['register']
}
</script>

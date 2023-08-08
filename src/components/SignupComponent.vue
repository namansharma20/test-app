<template>
    <div>
        <h1>Sig up!</h1>
        <input type="text" placeholder="enter name" v-bind="name">
        <input type="text" placeholder="enter email" v-bind="email">
        <input type="password" placeholder="enter password" v-bind="password">
        <button @click="handleSignup">Login</button>
        <p>Already registered?</p>
        <p :style="{'cursor':'pointer'}" @click="$emit('login')">Login Here!</p>
    </div>
</template>

<script>
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
            console.warn(`Sign up user ${this.name} with email ${this.email}`)
        }
    },
    emits:['login']
}
</script>

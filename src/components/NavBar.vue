<template>
    <div class="nav">
        <router-link to="/" >Home</router-link>
        <router-link to="add" >Add Restaurant</router-link>
        <router-link to="update" >Update Restaurant</router-link>
        <a href="" v-on:click="logout">Logout</a>
    </div>
</template>

<script>
    export default {
        name:'NavBar',
        methods:{
            logout(){
                localStorage.clear();
                this.$router.push({name:'Signup'})
            },
        }
    }
</script>

<style scoped>
.nav{
    background: black;
    
    padding: 15px;
    margin: 0;
    text-align: center;
    
}
.nav a{
    color:orange;
    text-decoration: none;
    margin: 50px;
    
}
.nav a:hover{
    text-decoration: underline;
    font-weight: bold;
}


</style>
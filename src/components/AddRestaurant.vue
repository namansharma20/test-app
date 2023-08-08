<template>
    <NavBar/>
    <div><h1>

        Welcome to add restaurant app
    </h1>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';

    export default {
    name: 'AddRestaurant',
    components: { NavBar },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
    },
}
</script>

<style scoped>

</style>
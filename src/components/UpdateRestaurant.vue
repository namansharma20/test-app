<template>
    <NavBar/>
    <div><h1>

        Welcome to Update restaurant app
    </h1>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';

    export default {
    name: 'UpdateRestaurant',
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
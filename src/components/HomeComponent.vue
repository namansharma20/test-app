<template>
    <div>
        Hello Welcome to Home Component
    </div>
</template>

<script>
export default {
    name: 'HomeComponent',
    mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>

<style scoped></style>
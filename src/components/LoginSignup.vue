<script setup>
import LoginComponent from './LoginComponent.vue';
import SignupComponent from './SignupComponent.vue';
import { ref, onMounted } from 'vue';
// export default {
//     name: 'LoginSignup',
//     data() {
//         return {
//             login: true,
//         }
//     },
//     components: {
//     LoginComponent,
//     SignupComponent
// },
// mounted(){
//     let user = localStorage.getItem('user-info')
//     if(user){
//         this.$router.push({name:'Home'})
//     }
// }

// }
let login=ref(true)

onMounted(()=>{
    let user = localStorage.getItem('user-info')
    if(user){
        this.$router.push({name:'Home'})
    }
})

</script>
<template>
    <LoginComponent v-if="login" @register="login=false"/>
    <SignupComponent v-else @login="login=true"/>
</template>


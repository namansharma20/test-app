<template>
    <LoginComponent v-if="login" @register="login=false"/>
    <SignupComponent v-else @login="login=true"/>
</template>
<script>
import LoginComponent from './LoginComponent.vue';
import SignupComponent from './SignupComponent.vue';

export default {
    name: 'LoginSignup',
    data() {
        return {
            login: true,
        }
    },
    components: {
    LoginComponent,
    SignupComponent
},

}
</script>


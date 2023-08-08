import HomeComponent from "../components/HomeComponent.vue";
import LoginSignup from "../components/LoginSignup.vue";
import { createRouter , createWebHistory } from "vue-router";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'Home',
            component:HomeComponent,
            path:"/"
        },
        {
            name:'SignUp',
            component:LoginSignup,
            path:"/login"
        },
    ]
})

export default router;
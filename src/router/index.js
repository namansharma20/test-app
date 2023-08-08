import HomeComponent from "../components/HomeComponent.vue";
import LoginSignup from "../components/LoginSignup.vue";
import AddRestaurant from "../components/AddRestaurant.vue";
import UpdateRestaurant from "../components/UpdateRestaurant.vue";
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
        {
            name:'Add',
            component:AddRestaurant,
            path:"/add"
        },
        {
            name:'Update',
            component:UpdateRestaurant,
            path:"/update"
        },
    ]
})

export default router;
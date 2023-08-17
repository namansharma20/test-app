<script setup>
import { onMounted,ref } from 'vue';
import NavBar from './NavBar.vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

let router = useRouter()
let input = ref({
    name:'',
    address:'',
    phone:''
})

onMounted(()=>{
    let user = localStorage.getItem('user-info');
    if (!user) {
        router.push({ name: 'SignUp' });
    }
})
function add(){
    axios.post("http://localhost:3000/restaurant",input.value).then((result)=>{
        console.log(result);
        alert("Restaurant successfully added");
    })
    router.push({ name: 'Home' });
}

//     export default {
//     name: 'AddRestaurant',
//     components: { NavBar },
//     mounted() {
//         let user = localStorage.getItem('user-info');
//         if (!user) {
//             this.$router.push({ name: 'SignUp' });
//         }
//     },
//     data(){
//         return{
//             input:{
//                 name:'',
//                 address:'',
//                 phone:''
//             },
//         }
//     },
//     methods:{
//         add(){
//             axios.post("http://localhost:3000/restaurant",this.input).then((result)=>{
//                 console.log(result);
//                 alert("Restaurant successfully added");
//             })
//             this.$router.push({ name: 'Home' });
//         }
//     }
// }
</script>

<template>
    <NavBar/>
    <div class="form">
        <input type="text" placeholder="name" v-model="input.name"/>
        <input type="text" placeholder="address" v-model="input.address"/>
        <input type="text" placeholder="phone" v-model="input.phone"/>
        <button @click="add">Add</button>
    </div>
</template>

<style scoped>
.form input{
    display: block;
    width: 250px;
    height: 25px;
    padding: 5px;
    color: black;
    text-align: center;
    margin-bottom: 20px;
}
.form{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
}
.form button{
    width: 264px;
    padding: 6px 0;
    color: white;
    background-color: skyblue;
    border: 1px solid cadetblue;
}
</style>
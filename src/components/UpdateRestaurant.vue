<script setup>
import NavBar from './NavBar.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

let input = ref({
    name:'',
    address:'',
    phone:''
})
let router = useRouter()
let route = useRoute()
onMounted(async()=>{
    let user = localStorage.getItem('user-info');
    
    
        if (!user) {
            router.push({ name: 'SignUp' });
        }
   
        let result = await axios.get("http://localhost:3000/restaurant?id="+route.params.id)
       
        input.value=result.data[0]
    
})
function update(){
            axios.put("http://localhost:3000/restaurant/"+route.params.id,input.value).then(()=>{
                router.push({ name: 'Home' });
            })
            
        }


//     export default {
//     name: 'UpdateRestaurant',
//     data(){
//         return{
//             input:{
//                 name:'',
//                 address:'',
//                 phone:''
//             },
//         }
//     },
//     components: { NavBar },
//     async mounted() {
//         let user = localStorage.getItem('user-info');
//         if (!user) {
//             this.$router.push({ name: 'SignUp' });
//         }
   
//         let result = await axios.get("http://localhost:3000/restaurant?id="+this.$route.params.id)
       
//         this.input=result.data[0]
//     },
//     methods:{
//         update(){
//             axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,this.input).then(()=>{
//                 this.$router.push({ name: 'Home' });
//             })
            
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
        <button @click="update">Update</button>
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
<template>
    <NavBar />
    <div>
        <h1>Hello Welcome to Restaurant Listing Page</h1>
        <br><br><br>
    </div>
    <table border="1px">
        <tr class="tr">
        <td >ID</td>
        <td>Name</td>
        <td>Address</td>
        <td>Phone</td>
        <td>Actions</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.phone }}</td>
            <td><router-link :to="'/update/'+item.id" >Update</router-link>
            <button @click="handleDelete(item.id)">Delete</button></td>
        </tr>
    </table>
</template>

<script>
import NavBar from './NavBar.vue';
import axios from 'axios';
export default {
    name: 'HomeComponent',
    data() {
        return {
            restaurants: [],
        }
    },
    methods:{
        handleDelete(id){
            console.log(id)
            axios.delete("http://localhost:3000/restaurant/"+id).then(()=>{
                this.reload()
            })
            
        },
        async reload(){
            let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
        let result = await axios.get("http://localhost:3000/restaurant")
       
        this.restaurants = result.data;
        }
    },
    mounted() {
        this.reload()
    },
    components: { NavBar }
}
</script>

<style scoped>
td{
    width:150px;
    color: black;
    height: 40px;
}
.tr{
    font-weight: bold;
}

</style>
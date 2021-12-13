<template>
  <div>

<!--    <p>{{ id }}</p>-->
    <p>{{ nameProject }}</p>
    <p>{{ status }}</p>


    <!-- route by using button call the route in function-->
    <!--      <base-button  @click="moreInfo" class="button-33" role="button"> More Info</base-button>-->
    <base-button class="moreInfo">
      <!-- route by name-->
      <router-link :to="{ name: 'TodoList'}"> More Info </router-link>
    </base-button>
    <!-- route by path-->
    <!--        <router-link to="/projects"> More Info</router-link>-->
    <!--      <h2>{{ url_data}}</h2>-->
  </div>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton";
export default {
  components: { BaseButton },
  props: ["id", "nameProject" , "status"],
  // methods:{
  //   moreInfo(){
  //     this.$router.push('/projects')
  //   }
  // },
  // data(){
  //   return{
  //      url_data: [],
  //   }
  // },
  // created(){
  //   this.url_data = this.$route.params.id;
  // },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 35vw;
  background-color: rgb(255, 243, 229);
  color: #000000;
  border: none;
  margin: 1rem 0;
  padding: 2rem;
}
p {
  font: inherit;
  display: flex;
  flex-direction: row;
  text-align: left;
}
.moreInfo {
  margin-right: 2rem;
}

</style>

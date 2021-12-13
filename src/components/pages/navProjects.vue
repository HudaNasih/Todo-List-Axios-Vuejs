<template>
  <div class="container">

    <div class="container-project">
       <base-border-card>
         <img src="../../../public/Todo.jpg" alt="TodoApp"/>
       </base-border-card>

      <!--    on click   call route using function -->
      <!--       <base-button @click="todoApp"> ToDo APP</base-button>-->
      <router-link :to="{ name:'TodoList'}">
        <base-button> ToDo APP</base-button>
      </router-link>
      </div>

    <div class="container-project">
      <base-border-card>
        <img src="../../../public/weather.jpg" alt="WeatherApp"/>
      </base-border-card>

      <router-link :to="{ name:'TodoList'}">
        <base-button> Weather APP</base-button>
      </router-link>
    </div>

  </div>
</template>

<script>
import BaseBorderCard from "@/components/UI/BaseBorderCard";
import BaseButton from "@/components/UI/BaseButton";
export default {
  components:{
    BaseButton,
    BaseBorderCard,
  },
  methods: {
    // todoApp(){
    //   this.$router.push('/projects/TodoList')
    // }
  },
}
</script>
<style scoped>
 img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  object-fit: contain;
}
 .container{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
 }
 .container-project{
   display: flex;
   align-content: center;
   align-items: center;
   flex-direction: column;
   justify-content: center;
 }
</style>

<template>
  <div class="cards-list">
      <div class="card">
<!--        <div class="card_image"> <img src="../../../public/Todo.jpg" alt="TodoApp"/> </div>-->
    <!--    <div class="card_title title-white">-->
    <!--      <p>Card Title</p>-->
    <!--    </div>-->
          <slot></slot>
       </div>
  </div>
</template>

<script>
export default {
  name: "BaseBorderCard"
}
</script>

<style scoped>
.cards-list {
  z-index: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
@media all and (max-width: 500px) {
  .cards-list {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}
.card {
  margin: 30px auto;
  width: 300px;
  height: 300px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
}

/*.card .card_image {*/
/*  width: inherit;*/
/*  height: inherit;*/
/*  border-radius: 40px;*/
/*}*/

/*.card .card_image img {*/
/*  width: inherit;*/
/*  height: inherit;*/
/*  border-radius: 40px;*/
/*  object-fit: cover;*/
/*}*/

/*.card .card_title {*/
/*  text-align: center;*/
/*  border-radius: 0px 0px 40px 40px;*/
/*  font-family: sans-serif;*/
/*  font-weight: bold;*/
/*  font-size: 30px;*/
/*  margin-top: -80px;*/
/*  height: 40px;*/
/*}*/

/*.card:hover {*/
/*  transform: scale(0.9, 0.9);*/
/*  box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25),*/
/*  -5px -5px 30px 15px rgba(0,0,0,0.22);*/
/*}*/

/*.title-white {*/
/*  color: white;*/
/*}*/

</style>
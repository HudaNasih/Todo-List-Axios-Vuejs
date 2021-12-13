<template>
  <div class="d-flex flex-column">
  <h2> Project On list</h2>
  <ul>
    <nav-home-content
        v-for="task in tasks"
        :key="task.id"
        :status="task.status"
        :name-project="task.name"
    ></nav-home-content>
  </ul>
  </div>
</template>

<script>
import NavHomeContent from "./navHomeContent.vue";
export default {
  inject: ['tasks'],
  components: {
    NavHomeContent,
  },
};
</script>

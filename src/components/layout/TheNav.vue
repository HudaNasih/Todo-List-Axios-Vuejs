<template>
  <base-border>
    <nav>
      <ul>
        <li>
<!--          <button @click="setActivePage('home-tab')">Home</button>-->
          <router-link to="/home">Home</router-link>
        </li>
        <li>
<!--          <button @click="setActivePage('about-tab')">About</button>-->
          <router-link to="/about">About</router-link>
        </li>
        <li>
<!--          <button @click="setActivePage('project-tab')">Projects</button>-->
          <router-link to="/projects">Projects</router-link>
        </li>
      </ul>
      <the-header></the-header>
    </nav>
  </base-border>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import BaseBorder  from '../UI/BaseBorder.vue'
export default {
  components: {
    TheHeader,
    BaseBorder,
  },
  // emits: ["active-tabs"],
  // methods: {
  //   setActivePage(page) {
  //     this.$emit("active-tabs", page);
  //     console.log(page);
  //   },
  // },
};
</script>

<style scoped>
nav {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

li {
  margin: 0 2rem;
}

a{
  text-decoration: none;
  font-size: 20px;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: #000;
  padding: 0.5rem 1rem;
  display: inline-block;
}

/* a.active => linkActiveClass="active" */

a:hover,
a:active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
  text-decoration: none;
}
</style>

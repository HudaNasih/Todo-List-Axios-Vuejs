<template>
  <div id="app">
<!--    <the-nav @active-tabs="setActivePage"></the-nav>-->
    <the-nav></the-nav>
  </div>
  <main>
<!--    <component :is="activePage"> </component>-->
<!--    <h2>User {{ $route.params.id }}</h2>-->
    <router-view ></router-view>
  </main>

<!--  <footer>-->
<!--    <router-view :to="{ name:'footer'}"></router-view>-->
<!--  </footer>-->
<!--  <nav-home v-if="activePage === 'home-tab'"></nav-home>-->
<!--  <nav-about v-if="activePage === 'about-tab'"></nav-about>-->
<!--  <nav-projects v-if="activePage === 'project-tab'"></nav-projects>-->
</template>

<script>
import TheNav from "@/components/layout/TheNav.vue";
// import NavHome from "@/components/pages/navHome.vue";
// import NavAbout from "@/components/pages/navAbout.vue";
// import NavProjects from "@/components/pages/navProjects";


export default {
  components: {
    TheNav,

  },
  data() {
    return {
      // activePage: "home-tab",
      tasks:[
        {
          name: 'Steal time to Learn',
          status: 'to-do',
        },
        {
          name: 'Eat 1 kilo baklava free',
          status: 'in-progress',
        },
      ]
    };
  },
  provide() {
    return {
      tasks:this.tasks,
    };
  },
  // methods: {
    // setActivePage(page) {
    //   this.activePage = page;
    //   console.log("page", page);
    // },
  // },
};
</script>

<style>
body {
  overflow-x: hidden;
  background-color: #100300;
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /*color: #2c3e50;*/
  /* margin-top: 60px; */
}
</style>

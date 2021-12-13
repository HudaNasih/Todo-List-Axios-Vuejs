import { createApp } from "vue";
import App from "./App.vue";

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css';
// import '@fortawesome/fontawesome-free/js/all';

//router
import { createRouter , createWebHistory } from "vue-router"

import BaseBorder from "@/components/UI/BaseBorder.vue";
import BaseButton from "@/components/UI/BaseButton";
import BaseBorderCard from "@/components/UI/BaseBorderCard";
import NavHome from "@/components/pages/navHome.vue";
import NavAbout from "@/components/pages/navAbout"
import NavProjects from "@/components/pages/navProjects";
import TodoList from "@/components/project/TodoList";
// import NavHomeContent from "@/components/pages/navHomeContent.vue";

const app = createApp(App);
let router;
router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/home'},
        {name: 'home', path: '/home', component: NavHome},
        {name: 'about', path: '/about', component: NavAbout},
        {name: 'projects', path: '/projects', component: NavProjects },
        {name:'TodoList', path: '/projects/TodoList', component: TodoList},
        // {path: '/home/:id?', component: NavHomeContent},
    ],
    linkActiveClass: 'active',

});
app.component("base-border", BaseBorder);
app.component("base-button",BaseButton);
app.component("base-border-card", BaseBorderCard)

app.use(router)
app.mount("#app");

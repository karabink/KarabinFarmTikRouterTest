import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "../components/home";
import About from "@/components/about_us";
import Services from "../components/services";
import Contacts from "../components/contacts";
import Shop from "../components/shop";

Vue.use(VueRouter)

//Структура роутів
const routes = [
    { path: "/", name:'home', component: Home},
    { path: "/about_us", name:'about_us', component: About},
    { path: "/services", name:'services', component: Services},
    { path: "/contacts", name:'contacts', component: Contacts},
    { path: "/shop", name:'shop', component: Shop}
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
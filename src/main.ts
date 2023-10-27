import './main.css'
import App from './App.vue'
import {ViteSSG} from "vite-ssg";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
    // the root component
    App,
    // vue-router options
    { routes: [
            { path: '/', component: HomeView },
            { path: '/about', component: AboutView },
        ] },
    // function to have custom setups
    ({ app, router, routes, isClient, initialState }) => {
        // install plugins etc.
    },
)


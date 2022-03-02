import {createWebHistory, createRouter} from "vue-router";
import Form from "@/pages/Form";
import Preview from "@/pages/Preview";

const routes = [
    {name: "form", path: '/', component: Form, props: true},
    {name: "preview", path: '/preview', component: Preview, props: true},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
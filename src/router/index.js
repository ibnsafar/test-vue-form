import {createWebHistory, createRouter} from "vue-router";
import Form from "@/pages/Form";
import Preview from "@/pages/Preview";

const routes = [
    {
        path: "/",
        name: "Форма",
        component: Form,
    },
    {
        path: "/preview",
        name: "Превью",
        component: Preview,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
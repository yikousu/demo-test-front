import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import Demo1 from "@/views/Demo1.vue";
import CameraDemo from "@/views/CameraDemo.vue";
import PiniaDemo from "@/views/PiniaDemo.vue";
import ElementsPlusDemo from "@/views/ElementsPlusDemo.vue";
import AxiosDemo from "@/views/AxiosDemo.vue";

const routes = [
    {
        path: "/home",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/demo1",
        name: "Demo1",
        component: Demo1,
    },
    {
        path: "/cameraDemo",
        name: "CameraDemo",
        component: CameraDemo,
    },
    {
        path: "/piniaDemo",
        name: "PiniaDemo",
        component: PiniaDemo,
    },
    {
        path: "/elementsPlusDemo",
        name: "ElementsPlusDemo",
        component: ElementsPlusDemo,
    },
    {
        path: "/axiosDemo",
        name: "AxiosDemo",
        component: AxiosDemo,
    },
    {
        path: "/",
        redirect: "/home",
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;

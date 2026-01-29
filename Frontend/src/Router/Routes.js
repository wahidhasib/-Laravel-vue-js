import HomeView from "@/Pages/HomeView.vue";
import ProductsComponent from "@/Pages/ProductsComponent.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: HomeView, name: 'home' },
        { path: '/products', component: ProductsComponent, name: 'products' },
    ]
});

export default router;
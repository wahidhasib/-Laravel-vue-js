import HomeView from "@/Pages/HomeView.vue";
import ProductDetails from "@/Pages/ProductDetails.vue";
import ProductsView from "@/Pages/ProductsView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: HomeView, name: 'home' },
        { path: '/products', component: ProductsView, name: 'products' },
        { path: '/products/:id', component: ProductDetails, name: 'productDetails' },
    ]
});

export default router;
import AboutView from "@/Pages/AboutView.vue";
import BlogDetails from "@/Pages/BlogDetails.vue";
import BlogView from "@/Pages/BlogView.vue";
import CartView from "@/Pages/CartView.vue";
import ContactView from "@/Pages/ContactView.vue";
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
        { path: '/about-us', component: AboutView, name: 'about' },
        { path: '/contact-us', component: ContactView, name: 'contact' },
        { path: '/blogs', component: BlogView, name: 'blogs' },
        { path: '/blogs/:id', component: BlogDetails, name: 'blogDetails' },
        { path: '/cart', component: CartView, name: 'cart' },
    ]
});

export default router;
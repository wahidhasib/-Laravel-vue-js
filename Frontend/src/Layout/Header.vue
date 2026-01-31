<template>
    <header class="max-w-7xl mx-auto my-3 px-4">
    <div class="flex items-center justify-between gap-6">

        <!-- Logo -->
        <div class="logo flex-shrink-0">
            <a href="/">
                <img
                    src="/Images/Logo.png"
                    alt="Logo"
                    class="h-10 w-auto object-contain"
                    loading="lazy"
                />
            </a>
        </div>

        <!-- Search -->
        <form
            class="hidden md:flex w-full max-w-md h-11 border border-gray-300 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-primary"
        >
            <input
                type="text"
                placeholder="Search products..."
                class="w-full h-full px-4 text-gray-700 outline-none"
            />
            <button
                type="submit"
                class="px-5 bg-primary hover:bg-primary-dark text-white flex items-center gap-2 transition"
            >
                <i class="fa-solid fa-magnifying-glass"></i>
                <span class="hidden lg:inline">Search</span>
            </button>
        </form>

        <!-- Customer Service -->
        <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <i class="fa-solid fa-headset text-primary text-lg"></i>
            </div>
            <div class="leading-tight hidden sm:block">
                <p class="text-gray-500 text-sm">Customer Service</p>
                <h4 class="font-bold text-lg text-gray-800">(219) 555-0114</h4>
            </div>
        </div>

    </div>

    <!-- Nav items -->
    <div class="flex items-center justify-between my-2 py-3 bg-black">
        <nav class="mx-2">
            <ul class="flex gap-3">
                <li class="bg-primary">
                    <router-link to="/" class="text-gray-200 hover:text-white duration-300 font-semibold">All Categories</router-link>   
                </li>
                <li>
                    <router-link :to="{name: 'home'}" class="text-gray-200 hover:text-white duration-300 font-semibold">Home</router-link>   
                </li>
                <li>
                    <a :to="{name: 'home'}" class="text-gray-200 hover:text-white duration-300 font-semibold">Shop</a>
                </li>
                <li>
                    <router-link :to="{name: 'products'}" class="text-gray-200 hover:text-white duration-300 font-semibold">Products</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'blogs'}" class="text-gray-200 hover:text-white duration-300 font-semibold">Blog</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'about'}" class="text-gray-200 hover:text-white duration-300 font-semibold">About Us</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'contact'}" class="text-gray-200 hover:text-white duration-300 font-semibold">Contact Us</router-link>
                </li>
            </ul>
        </nav>
    </div>
</header>
</template>
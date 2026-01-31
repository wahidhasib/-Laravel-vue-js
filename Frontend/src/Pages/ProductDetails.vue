<template>
    <section class="bg-white py-5">
        <div class="md:flex gap-5 items-start justify-between max-w-7xl px-4 mx-auto">
            <div class="md:w-1/2">
                <ProductSlider></ProductSlider>
            </div>
            <!-- product details -->
            <div class="md:w-1/2">
                <h1 class="text-gray-700 font-semibold text-2xl lg:text-3xl mb-5">
                    Chinese Cabbage 
                    <span class="bg-green-100 rounded-md text-green-600 px-3 py-1 font-normal text-xs">In Stock</span>
                </h1>
                <div class="flex gap-3 items-center text-sm mb-3">
                    <div class="flex gap-1 items-center">
                        <div class="text-yellow-500">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="text-gray-500">4 Reviews</p>
                    </div>

                    <p class="font-semibold text-gray-700 text-sm">SKU: <span class="text-gray-400">SKU-2512</span></p>
                </div>

                <div class="flex gap-3 items-center">
                    <h4 class="text-lg lg:text-2xl text-primary font-semibold">$17.28</h4>
                    <span class="bg-red-50 px-3 py-1 text-xs rounded-sm font-medium text-red-700">64% Off</span>
                </div>

                <hr class="my-5 text-gray-200">

                <div class="flex gap-5 items-center justify-between flex-wrap my-4">
                    <p class="text-gray-800 text-sm font-medium">Brand: <span class="text-gray-500">Testing Brand</span></p>
                    <div class="flex gap-2 items-center">
                        <p class="text-gray-900 text-sm">Share item:</p>
                        <div class="flex gap-1 items-center">
                            <a href="#" class="h-8 w-8 flex items-center justify-center text-md rounded-full bg-primary text-white duration-300 hover:bg-primary-dark">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="#" class="h-8 w-8 flex items-center justify-center text-md rounded-full bg-primary text-white duration-300 hover:bg-primary-dark">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="#" class="h-8 w-8 flex items-center justify-center text-md rounded-full bg-primary text-white duration-300 hover:bg-primary-dark">
                                <i class="fa-brands fa-x"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <p class="text-gray-600 text-sm font-light">
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla
                    nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.
                </p>

                <hr class="my-5 text-gray-200">

                <div class="flex gap-3 items-center justify-between">
                    <form class="flex gap-1 items-center justify-between border border-gray-300 rounded-full p-1 w-1/5">
                        <button type="button" @click="quantity--"
                            class="h-8 w-8 cursor-pointer rounded-full bg-gray-200 flex justify-center items-center">-</button>
                        <input type="text" v-model="quantity" readonly class="text-center outline-none w-5" value="1">
                        <button type="button" @click="quantity++"
                            class="h-8 w-8 cursor-pointer rounded-full bg-gray-200 flex justify-center items-center">+</button>
                    </form>

                    <div class="flex gap-2 items-center w-3/4">
                        <button type="button"
                            class="w-full flex gap-2 items-center justify-center h-10 bg-primary hover:bg-primary-dark duration-300 transition-all text-white text-sm rounded-full cursor-pointer">
                            <span>Add to Cart</span> <i class="fa-solid fa-bag-shopping"></i>
                        </button>

                        <button type="button"
                            class="h-11 w-11 cursor-pointer flex items-center justify-center text-green-600 bg-primary/10 rounded-full hover:text-white hover:bg-primary duration-300">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>

                <hr class="my-5 text-gray-200">

                <div class="flex gap-5 flex-wrap items-center">
                    <p class="text-gray-800 text-sm font-medium">Category: <span class="text-gray-400">Fashion, Winter, Jacket</span></p>
                    <p class="text-gray-800 text-sm font-medium">Tags: <span class="text-gray-400">Vegetables, Healthy, Fruits</span></p>
                </div>

            </div>
        </div>

        <!-- Description Additional information & Customer feedbacks -->
        <div class="border-b-2 border-b-gray-200 mt-10">
            <div class="flex items-center justify-center max-w-7xl mx-auto">
                <button class="text-lg text-gray-400 py-1 px-3 border-b-2 border-transparent hover:border-primary duration-300 cursor-pointer hover:text-gray-800 font-semibold">Description</button>
                <button class="text-lg text-gray-400 py-1 px-3 border-b-2 border-transparent hover:border-primary duration-300 cursor-pointer hover:text-gray-800 font-semibold">Additional Information</button>
                <button class="text-lg text-gray-800 py-1 px-3 border-b-2 border-primary hover:border-primary duration-300 cursor-pointer hover:text-gray-800 font-semibold">Customer Feedback</button>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 mt-5 bg-white" id="custom-content">
            <!-- Description -->
             

            <!-- Additional information -->



            <!-- Customer Feedback -->
            <div class="flex gap-5">
                <div class="w-1/2">
                    <div class="flex gap-5 items-center justify-between px-2">
                        <div class="flex gap-3 items-center">
                            <img src="../../public/Images/user.png" class="w-12 h-12 rounded-full" alt="">
                            <div class="space-y-1">
                                <h5 class="text-gray-800">Kristin Watson</h5>
                                <ul class="flex items-center text-xs">
                                    <li>
                                        <i class="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-star"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import ProductSlider from '@/Components/ProductSlider.vue';
import { ref } from 'vue';

const quantity = ref(1);
</script>
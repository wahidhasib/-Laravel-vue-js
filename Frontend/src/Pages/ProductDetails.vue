<template>
    <section class="bg-white py-5">
        <div class="md:flex gap-5 items-start justify-between max-w-7xl px-4 mx-auto">
            <div class="md:w-1/2">
                <img src="../../public/Images/pro.jpg" class=" w-full" alt="">
            </div>
            <!-- product details -->
            <div class="md:w-1/2">
                <h1 class="text-gray-900 font-semibold text-3xl">Chinese Cabbage</h1>
                <div class="flex gap-3 items-center">
                    <div class="flex gap-1 items-center">
                        <div class="ratings">
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
                    <h4 class="text-lg font-medium text-primary">$17.28</h4>
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

                <p class="text-gray-400 text-sm">
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

    </section>
</template>

<script setup>
import { ref } from 'vue';

const quantity = ref(1);
</script>
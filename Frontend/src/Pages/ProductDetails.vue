<template>
    <section class="bg-white">
        <div class="md:flex gap-5 items-start justify-between max-w-7xl px-4 mx-auto pt-5">
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
                    <h4 class="text-lg lg:text-2xl text-primary font-semibold"><strike class="text-lg text-gray-600">$29.99</strike> $17.28</h4>
                    <span class="bg-red-50 px-3 py-1 text-xs rounded-sm font-medium text-red-700">64% Off</span>
                </div>

                <hr class="my-5 text-gray-200">

                <div class="flex gap-5 items-center justify-between flex-wrap my-4">
                    <p class="text-gray-800 text-sm font-medium">Brand: <span class="text-gray-500">Testing Brand</span>
                    </p>
                    <div class="flex gap-2 items-center">
                        <p class="text-gray-900 text-sm">Share item:</p>
                        <div class="flex gap-1 items-center">
                            <a href="#"
                                class="h-8 w-8 flex items-center justify-center text-md rounded-full bg-primary text-white duration-300 hover:bg-primary-dark">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="#"
                                class="h-8 w-8 flex items-center justify-center text-md rounded-full bg-primary text-white duration-300 hover:bg-primary-dark">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="#"
                                class="h-8 w-8 flex items-center justify-center text-md rounded-full bg-primary text-white duration-300 hover:bg-primary-dark">
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
                    <p class="text-gray-800 text-sm font-medium">Category: <span class="text-gray-400">Fashion, Winter,
                            Jacket</span></p>
                    <p class="text-gray-800 text-sm font-medium">Tags: <span class="text-gray-400">Vegetables, Healthy,
                            Fruits</span></p>
                </div>

            </div>
        </div>

        <!-- Description Additional information & Customer feedbacks -->
        <div class="border-b-2 border-b-gray-200 mt-10">
            <div class="flex items-center justify-center max-w-7xl mx-auto">
                <button @click="changeTab('description')"
                    class="text-lg text-gray-400 py-1 px-3 border-b-2 border-transparent hover:border-primary duration-300 cursor-pointer hover:text-gray-800 font-semibold" :class="{ 'border-primary text-gray-800' : tab === 'description' }">Description</button>
                <button @click="changeTab('feedback')"
                    class="text-lg text-gray-400 py-1 px-3 border-b-2 border-transparent hover:border-primary duration-300 cursor-pointer hover:text-gray-800 font-semibold" :class="{ 'border-primary text-gray-800' : tab === 'feedback' }">Customer
                    Feedback</button>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 mt-5 bg-white">
            <!-- Description -->
            <div v-if="tab === 'description'" class="flex gap-5">
                <div class="w-full">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, quos delectus quidem maxime quis corrupti maiores odio optio distinctio nisi eveniet dolores doloremque, nulla suscipit perferendis cumque laboriosam dolorum! Non!</p>
                </div>
            </div>


            <!-- Customer Feedback -->
            <div v-if="tab === 'feedback'" class="flex gap-5">
                <div class="lg:w-3/4 xl:w-1/2">
                    <div class="px-2 border-b border-b-gray-300 py-5 space-y-1">
                        <div class="flex gap-5 items-center justify-between">
                            <div class="flex gap-3 items-center">
                                <img src="../../public/Images/user.png" class="w-12 h-12 rounded-full" alt="">
                                <div class="space-y-1">
                                    <h5 class="text-gray-800">Kristin Watson</h5>
                                    <ul class="flex items-center text-yellow-500 text-xs">
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
                            <span class="text-gray-500 font-medium text-xs">25 min ago</span>
                        </div>
                        <!-- Comment -->
                        <p class="font-regular text-gray-500 text-sm first-letter:text-primary first-letter:text-2xl">
                            Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese
                            cabbage tends to "bolt" or go to seed; in long periods of heat, some kind of shade may be
                            helpful. Watch out for snails, as they will harm the plants.
                        </p>
                    </div>

                    <div class="mt-5">
                        <button type="button"
                            class="bg-primary/10 text-primary rounded-full px-5 py-2 text-md duration-300 hover:bg-primary hover:text-white cursor-pointer font-medium hover:shadow-2xl">Load
                            More</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Related Products -->
        <div class="py-10 max-w-7xl mx-auto px-4">
            <h2 class="text-2xl text-gray-800 my-5 font-semibold">Related Products</h2>
            <div class="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <ProductComponent v-for="i in 4" :key="i"></ProductComponent>
            </div>
        </div>


        <!-- Newsletter section -->
         <div class="bg-gray-5 0">
            <NewsletterComponent></NewsletterComponent>
         </div>

    </section>
</template>

<script setup>
import NewsletterComponent from '@/Components/NewsletterComponent.vue';
import ProductComponent from '@/Components/ProductComponent.vue';
import ProductSlider from '@/Components/ProductSlider.vue';
import { ref } from 'vue';

const quantity = ref(1);
const tab = ref('description');

function changeTab(activeTab) {
    tab.value = activeTab;
}

</script>
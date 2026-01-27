<script setup>
import CarouselComponent from '@/Components/CarouselComponent.vue';
import PopularProductComponent from '@/Components/PopularProductComponent.vue';
import TopCategory from '@/Components/TopCategory.vue';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Swiper styles (VERY important)
import CategoryComponent from '@/Components/CategoryComponent.vue';
import TestimonialCard from '@/Components/TestimonialCard.vue';
import WideProductComponent from '@/Components/WideProductComponent.vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ref } from 'vue';

const prevEl = ref(null)
const nextEl = ref(null)
const paginationEl = ref(null)

const onSwiperInit = (swiper) => {
    // 🔥 THIS IS THE FIX
    swiper.params.navigation.prevEl = prevEl.value
    swiper.params.navigation.nextEl = nextEl.value
    swiper.params.pagination.el = paginationEl.value

    swiper.navigation.init()
    swiper.navigation.update()

    swiper.pagination.init()
    swiper.pagination.render()
    swiper.pagination.update()
}
</script>

<template>
    <div class="flex gap-5 items-start justify-between max-w-7xl mx-auto px-4">
        <div class=" hidden lg:block w-1/4 border border-gray-300">
            <TopCategory></TopCategory>
        </div>
        <div class="w-full lg:w-3/4">
            <CarouselComponent></CarouselComponent>
        </div>
    </div>

    <!-- Categories section -->
    <section class="max-w-7xl mx-auto px-4 my-5">
        <h2 class="font-semibold text-2xl md:text-3xl mb-5">Popular Categories</h2>
        <!-- <div class="grid gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 mt-3">
        </div> -->
        <swiper :slidesPerView="1" :spaceBetween="10" :breakpoints="{
            320: { slidesPerView: 3 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 }
        }" class="mySwiper">
            <SwiperSlide v-for="i in 20" :key="i">
                <CategoryComponent></CategoryComponent>
            </SwiperSlide>
        </swiper>
    </section>

    <!-- Popular products section -->
    <section class="max-w-7xl mx-auto px-4 my-5">
        <h2 class="font-semibold text-2xl md:text-3xl">Popular Products</h2>
        <div class="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-3">
            <PopularProductComponent></PopularProductComponent>
            <PopularProductComponent></PopularProductComponent>
            <PopularProductComponent></PopularProductComponent>
            <PopularProductComponent></PopularProductComponent>
            <PopularProductComponent></PopularProductComponent>
            <PopularProductComponent></PopularProductComponent>
            <PopularProductComponent></PopularProductComponent>
            <PopularProductComponent></PopularProductComponent>
            <PopularProductComponent></PopularProductComponent>
            <PopularProductComponent></PopularProductComponent>
            <PopularProductComponent></PopularProductComponent>
        </div>
    </section>

    <!-- Testimonial section -->
    <section class="py-5 md:py-15">
        <div class="max-w-7xl mx-auto my-5 px-4">
            <!-- Header + buttons -->
            <div class="flex items-center justify-between mb-4">
                <h2 class="font-semibold text-2xl md:text-3xl">
                    Client Testimonial
                </h2>

                <div class="flex gap-2">
                    <button ref="prevEl"
                        class="px-4 py-2 border rounded-full shadow-2xl border-gray-300 hover:bg-primary-dark bg-white font-medium text-gray-800 hover:text-white cursor-pointer duration-300">
                        Prev
                    </button>
                    <button ref="nextEl"
                        class="px-4 py-2 border rounded-full shadow-2xl border-gray-300 hover:bg-primary-dark bg-white font-medium text-gray-800 hover:text-white cursor-pointer duration-300">
                        Next
                    </button>
                </div>
            </div>

            <!-- Swiper -->
            <Swiper :modules="[Navigation, Pagination, Autoplay]" :autoplay="{ delay: 3000 }" :slides-per-view="1"
                :space-between="10" :breakpoints="{
                    320: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    992: { slidesPerView: 3 }
                }" :navigation="false" @swiper="onSwiperInit">
                <SwiperSlide v-for="i in 7" :key="i">
                    <TestimonialCard />
                </SwiperSlide>
            </Swiper>

            <!-- Bottom pagination -->
            <div ref="paginationEl" class="mt-6 flex justify-center"></div>
        </div>
    </section>

    <section class="max-w-7xl grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto px-4 my-5">
        <div class="">
            <h3 class="text-lg font-semibold mb-3 ms-2">Top Selling</h3>
            <WideProductComponent v-for="i in 3" :key="i"></WideProductComponent>
        </div>
        <div class="">
            <h3 class="text-lg font-semibold mb-3 ms-2">Hot Deals</h3>
            <WideProductComponent v-for="i in 3" :key="i"></WideProductComponent>
        </div>
        <div class="">
            <h3 class="text-lg font-semibold mb-3 ms-2">Top Rated</h3>
            <WideProductComponent v-for="i in 3" :key="i"></WideProductComponent>
        </div>
        <div class="">
            <h3 class="text-lg font-semibold mb-3 ms-2">Latest</h3>
            <WideProductComponent v-for="i in 3" :key="i"></WideProductComponent>
        </div>
    </section>
</template>

<style>
/* Inactive bullets (optional) */
.swiper-pagination-bullet {
    background-color: gray;
    /* or whatever color you want for inactive bullets */
}

/* Active bullet */
.swiper-pagination-bullet-active {
    background-color: #00B207 !important;
}
</style>
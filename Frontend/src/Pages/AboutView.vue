<script setup>
import NewsletterComponent from '@/Components/NewsletterComponent.vue';
import TestimonialCard from '@/Components/TestimonialCard.vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
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
    <main class="bg-white">
        <section class="max-w-7xl mx-auto py-10 lg:py-15 px-4 lg:flex gap-5 items-center space-y-5 justify-between">
            <div class="lg:w-1/2">
                <h2 class=" text-slate-800 text-3xl font-bold lg:text-5xl mb-10">100% Trusted Organic Food Store
                </h2>
                <p class="text-slate-800 text-md">Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
                    laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas
                    aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo
                    ante, at commodo felis congue vitae.
                </p>
            </div>

            <div class="lg:w-1/2">
                <img src="../../public/Images/about.png" class="w-full rounded-2xl shadow-2xl" alt="">
            </div>
        </section>

        <section class="relative bg-[url('/Images/about1.png')] bg-cover bg-center bg-no-repeat py-16 lg:py-24">
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/40"></div>

            <div class="relative max-w-7xl mx-auto px-4">
                <div class="md:flex gap-10 items-center justify-between">

                    <!-- Image -->
                    <div class="md:w-1/2">
                        <img src="../../public/Images/about.png" class="w-full rounded-xl shadow-lg"
                            alt="Organic Food" />
                    </div>

                    <!-- Content -->
                    <div class="md:w-1/2 text-white">
                        <h2 class="text-3xl lg:text-5xl font-bold leading-tight mb-6">
                            100% Trusted <br />
                            Organic Food Store
                        </h2>

                        <p class="text-white/90 text-md leading-relaxed">
                            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
                            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
                            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
                        </p>
                    </div>

                </div>
            </div>
        </section>

        <section class="bg-gray-50">
            <div class="md:flex gap-5 items-center justify-between max-w-7xl mx-auto px-4">
                <div class="space-y-3 w-full md:w-1/2">
                    <h2 class="text-3xl lg:text-4xl font-bold leading-tight text-slate-800 mb-6">
                        100% Trusted <br>
                        Organic Food Store
                    </h2>
                    <p class="text-md text-slate-800">
                        Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus
                        eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
                        bibendum nunc eget elementum.
                    </p>
                    <ul class=" list-disc">
                        <li class="flex gap-2 text-slate-700">
                            <span
                                class="h-5 w-5 p-1 text-xs rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <i class="fa-solid fa-check"></i>
                            </span> Sed in metus pellentesque.
                        </li>
                        <li class="flex gap-2 text-slate-700">
                            <span
                                class="h-5 w-5 p-1 text-xs rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <i class="fa-solid fa-check"></i>
                            </span> Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
                        </li>
                    </ul>
                </div>

                <div class="w-full md:w-1/2">
                    <img src="../../public/Images/about2.png" class="w-full mt-10" alt="">
                </div>
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
                            class="h-10 w-10 flex items-center justify-center border rounded-full shadow-2xl border-gray-300 hover:bg-primary-dark bg-white font-medium text-gray-800 hover:text-white cursor-pointer duration-300">
                            <i class="fa-solid fa-angle-left"></i>
                        </button>
                        <button ref="nextEl"
                            class="h-10 w-10 flex items-center justify-center border rounded-full shadow-2xl border-gray-300 hover:bg-primary-dark bg-white font-medium text-gray-800 hover:text-white cursor-pointer duration-300">
                            <i class="fa-solid fa-angle-right"></i>
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


        <!-- Newsletter section -->
        <section class="bg-[#F7F7F7]">
            <NewsletterComponent></NewsletterComponent>
        </section>

    </main>
</template>
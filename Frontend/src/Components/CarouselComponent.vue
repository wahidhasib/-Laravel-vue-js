<template>
  <div class="relative">

    <!-- Custom Navigation -->
    <button
      ref="prevEl"
      class="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-white duration-300 shadow h-10 w-10 flex items-center justify-center cursor-pointer rounded-full"
    >
      <i class="fa-solid fa-angle-left"></i>
    </button>

    <button
      ref="nextEl"
      class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-white duration-300 shadow h-10 w-10 flex items-center justify-center cursor-pointer rounded-full"
    >
      <i class="fa-solid fa-angle-right"></i>
    </button>

    <!-- Swiper -->
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{ clickable: true }"
      :navigation="{
        prevEl: prevEl,
        nextEl: nextEl,
      }"
      :modules="modules"
      @swiper="onSwiper"
      class="mySwiper"
    >
      <swiper-slide v-for="i in 4" :key="i">
        <img
          src="../../public/Images/carousel.png"
          class="rounded-md w-full"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const prevEl = ref(null)
const nextEl = ref(null)

const modules = [Autoplay, Navigation, Pagination]

const onSwiper = (swiper) => {
  // 🔥 Bind custom navigation AFTER Swiper is ready
  swiper.params.navigation.prevEl = prevEl.value
  swiper.params.navigation.nextEl = nextEl.value

  swiper.navigation.init()
  swiper.navigation.update()
}
</script>
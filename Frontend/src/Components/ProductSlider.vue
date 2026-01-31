<template>
  <div class="flex max-w-3xl mx-auto">

    <!-- Thumbnails -->
    <Swiper
      direction="vertical"
      :slides-per-view="4"
      :space-between="10"
      watch-slides-progress
      class="w-20 h-[350px]"
      @swiper="setThumbsSwiper"
    >
      <SwiperSlide v-for="(img, index) in images" :key="index">
        <img
          :src="img"
          class="w-16 h-16 object-cover border-2 border-gray-200 rounded-md cursor-pointer
                 hover:border-green-500"
        />
      </SwiperSlide>
    </Swiper>

    <!-- Main Image with Zoom -->
    <Swiper
      :modules="[Zoom, Thumbs]"
      :thumbs="{ swiper: thumbsSwiper }"
      :zoom="{ maxRatio: 3 }"
      :mousewheel="true"
      class="flex-1 max-h-96 border border-gray-300 shadow rounded-lg p-4"
    >
      <SwiperSlide v-for="(img, index) in images" :key="index">
        <div class="swiper-zoom-container">
          <img
            :src="img"
            class="w-full h-full object-cover"
            alt="Product"
          />
        </div>
      </SwiperSlide>
    </Swiper>

  </div>
</template>


<script setup>
import { Thumbs, Zoom } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

import 'swiper/css'
import 'swiper/css/zoom'

const images = [
  '/Images/green-apple.png',
  '/Images/cat.png',
  '/Images/category_image.png',
  '/Images/vegetables.png',
  '/Images/blog.png',
]

const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}
</script>

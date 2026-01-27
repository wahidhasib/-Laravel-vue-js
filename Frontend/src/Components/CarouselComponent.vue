<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <img src="../../public/Images/carousel.png" class="rounded-md" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../public/Images/carousel.png" class="rounded-md" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../public/Images/carousel.png" class="rounded-md" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../public/Images/carousel.png" class="rounded-md" alt="">
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';
import 'swiper/css/pagination';

  // import required modules
  import { Autoplay, Navigation, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>

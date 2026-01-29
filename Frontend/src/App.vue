<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script setup>
import Footer from './Layout/Footer.vue';
import Header from './Layout/Header.vue';
</script>
<script setup lang="ts">
import CarouselComponent from '@/Components/CarouselComponent.vue';
import CategoryComponent from '@/Components/CategoryComponent.vue';
import PopularProductComponent from '@/Components/PopularProductComponent.vue';
import TopCategory from '@/Components/TopCategory.vue';

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

    <section class="max-w-7xl mx-auto px-4 my-5">
        <h2 class="font-semibold text-2xl md:text-3xl">Popular Categories</h2>
        <div class="grid gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 mt-3">
            <CategoryComponent></CategoryComponent>
            <CategoryComponent></CategoryComponent>
            <CategoryComponent></CategoryComponent>
            <CategoryComponent></CategoryComponent>
            <CategoryComponent></CategoryComponent>
            <CategoryComponent></CategoryComponent>
            <CategoryComponent></CategoryComponent>
            <CategoryComponent></CategoryComponent>
            <CategoryComponent></CategoryComponent>
            <CategoryComponent></CategoryComponent>
            <CategoryComponent></CategoryComponent>
            <CategoryComponent></CategoryComponent>
            <CategoryComponent></CategoryComponent>
            <CategoryComponent></CategoryComponent>
            <CategoryComponent></CategoryComponent>
            <CategoryComponent></CategoryComponent>
        </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 my-5">
        <h2 class="font-semibold text-2xl md:text-3xl">Popular Categories</h2>
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
</template>
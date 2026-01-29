<script setup lang="ts">
import CategoryFilter from '@/Components/CategoryFilter.vue';
import PopularProductComponent from '@/Components/PopularProductComponent.vue';
import PricingFilter from '@/Components/PricingFilter.vue';
import RatingComponent from '@/Components/RatingComponent.vue';
import TagFilter from '@/Components/TagFilter.vue';

</script>

<template>
    <section class="max-w-7xl mx-auto px-4 mb-5">
        <div class="md:flex gap-6">

            <!-- Sidebar -->
            <div class="w-full md:w-1/4">
                <div class="bg-white rounded-lg shadow-md p-4 sticky top-2">
                    <form class="space-y-6">

                        <!-- Categories -->
                        <CategoryFilter />

                        <hr class="border-gray-200" />

                        <!-- Price Range -->
                        <PricingFilter />

                        <hr class="border-gray-200" />

                        <!-- Rating -->
                        <RatingComponent />

                        <hr class="border-gray-200" />

                        <!-- Tags -->
                        <TagFilter />

                    </form>
                </div>
            </div>



            <!-- Products Main -->
            <div class="w-full md:w-3/4 bg-white p-5 rounded-lg shadow-md">

                <!-- Heading & Sort -->
                <div class="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-6">

                    <!-- Sort By -->
                    <div class="flex items-center gap-3 text-sm">
                        <span class="text-gray-500 font-medium">Sort By:</span>
                        <select
                            class="text-gray-700 border border-gray-300 bg-gray-50 rounded-lg py-2 px-3 outline-none">
                            <option value="">Latest</option>
                            <option value="">Price high - low</option>
                            <option value="">Price low - high</option>
                            <option value="">Top Rated</option>
                        </select>
                    </div>

                    <!-- Results Count -->
                    <h4 class="text-gray-400 text-sm md:text-right">
                        <span class="font-semibold text-gray-700">52</span> Results Found
                    </h4>
                </div>

                <!-- Products Grid -->
                <div class="grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <PopularProductComponent v-for="i in 50" :key="i" />
                </div>
            </div>


        </div>
    </section>
</template>

<template>
    <div class="group relative rounded-xl border border-gray-200 bg-white
         transition-all duration-300 hover:shadow-xl">
        <a href="#" class="block">
            <!-- Image -->
            <div class="relative overflow-hidden rounded-lg bg-gray-50">
                <img src="../../public/Images/cat.png" alt="Fresh Fruit"
                    class="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-110" />

                <!-- Cart Button -->
                <button class="absolute right-3 top-3 flex h-9 w-9 items-center justify-center
               rounded-full bg-white text-gray-700 shadow cursor-pointer
               transition-all duration-200 hover:text-red-500">
                    🛒
                </button>
            </div>

            <!-- Content -->
            <div class="mt-1 mx-3">
                <!-- Title -->
                <h2 class="text-sm font-medium text-gray-900
               transition-colors duration-200 group-hover:text-primary">
                    Fresh Fruit
                </h2>

                <!-- Rating -->
                <div class="flex items-center gap-1 text-yellow-500 text-sm">
                    ★ ★ ★ ★ ☆
                    <span class="ml-1 text-xs text-gray-400">(4.0)</span>
                </div>

                <!-- Price -->
                <p class="text-lg font-semibold text-gray-900">$12.00</p>
            </div>
        </a>
    </div>
</template>
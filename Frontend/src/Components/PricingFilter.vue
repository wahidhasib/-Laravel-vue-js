<template>
    <!-- Price Range -->
    <div class=" p-3">
        <div class="flex items-center justify-between mb-3">
            <h5 class="text-lg font-semibold text-gray-800">
                Price Range
            </h5>
            <button type="button" class="text-gray-500 hover:text-primary transition">
                <i class="fa-solid fa-angle-up"></i>
            </button>
        </div>

        <div class="border-b border-gray-200 mb-2"></div>

        <div class="space-y-3">
            <input type="range" name="price" min="0" max="1000" class="w-full accent-primary-bright" />
            <div class="flex justify-between text-sm text-gray-500">
                <span>$0 - $1500</span>
            </div>
        </div>
    </div>
</template>
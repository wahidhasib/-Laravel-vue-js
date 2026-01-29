<template>
    <div class="p-3">
        <div class="flex items-center justify-between mb-3">
            <h5 class="text-lg font-semibold text-gray-800">
                Categories
            </h5>
            <button type="button" class="text-gray-500 hover:text-primary transition">
                <i class="fa-solid fa-angle-up"></i>
            </button>
        </div>

        <div class="border-b border-gray-200 mb-2"></div>

        <div class="space-y-1">

            <label class="flex items-center justify-between cursor-pointer rounded-lg px-3 py-2
                       hover:bg-gray-100 transition">
                <div class="flex items-center gap-3">
                    <input type="radio" name="category" value="fruit"
                        class="accent-primary focus:outline-none focus:ring-0 focus:ring-offset-0" />
                    <span class="text-md text-gray-700">Fresh Fruit</span>
                </div>
                <span class="text-sm text-gray-500">(25)</span>
            </label>

            <label class="flex items-center justify-between cursor-pointer rounded-lg px-3 py-2
                       hover:bg-gray-100 transition">
                <div class="flex items-center gap-3">
                    <input type="radio" name="category" value="electronics"
                        class="accent-primary focus:outline-none focus:ring-0 focus:ring-offset-0" />
                    <span class="text-md text-gray-700">Electronics</span>
                </div>
                <span class="text-sm text-gray-500">(10)</span>
            </label>

        </div>
    </div>
</template>
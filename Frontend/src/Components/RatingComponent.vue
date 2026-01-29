<template>
    <div class="px-3">
        <div class="flex items-center justify-between mb-3">
            <h5 class="text-lg font-semibold text-gray-800">
                Rating
            </h5>
            <button type="button" class="text-gray-500 hover:text-primary transition">
                <i class="fa-solid fa-angle-up"></i>
            </button>
        </div>
        <!-- divider -->
         <div class="w-full my-3 border-b border-gray-200"></div>

         <div class="space-y-1">
            <label class="cursor-pointer accent-primary flex items-center gap-3">
                <input type="checkbox" name="rating" value="5" class="h-4 w-4">
                <span class="text-gray-600">5 star</span>
            </label>
            <label class="cursor-pointer accent-primary flex items-center gap-3">
                <input type="checkbox" name="rating" value="5" class="h-4 w-4">
                <span class="text-gray-600">4 star & avobe</span>
            </label>
            <label class="cursor-pointer accent-primary flex items-center gap-3">
                <input type="checkbox" name="rating" value="5" class="h-4 w-4">
                <span class="text-gray-600">3 star & avobe</span>
            </label>
            <label class="cursor-pointer accent-primary flex items-center gap-3">
                <input type="checkbox" name="rating" value="5" class="h-4 w-4">
                <span class="text-gray-600">2 star & avobe</span>
            </label>
            <label class="cursor-pointer accent-primary flex items-center gap-3">
                <input type="checkbox" name="rating" value="5" class="h-4 w-4">
                <span class="text-gray-600">1 star & avobe</span>
            </label>
         </div>
    </div>
</template>
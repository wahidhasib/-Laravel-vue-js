<template>
    <div class="">
        <div class="flex items-center justify-between mb-3 px-3">
            <h5 class="text-lg font-semibold text-gray-800">
                Popular Tag
            </h5>
            <button type="button" class="text-gray-500 hover:text-primary transition">
                <i class="fa-solid fa-angle-up"></i>
            </button>
        </div>

        <div class="border-b border-gray-200 mb-2"></div>

        <div class="flex flex-wrap gap-2 px-3 py-2">

            <label class="cursor-pointer rounded-full border border-gray-300
                                transition-all duration-200
                                hover:border-primary hover:bg-primary/10
                                peer-checked:border-primary peer-checked:bg-primary/20">

                <input type="checkbox" name="tags" value="vegetables" class="peer hidden" />

                <span class="block px-4 py-1.5 text-sm text-gray-700 bg-gray-100
                                    peer-checked:text-gray-900 peer-checked:bg-primary/20 font-medium rounded-full">
                    Vegetables
                </span>
            </label>
            <label class="cursor-pointer rounded-full border border-gray-300
                                transition-all duration-200
                                hover:border-primary hover:bg-primary/10
                                peer-checked:border-primary peer-checked:bg-primary/20">

                <input type="checkbox" name="tags" value="vegetables" class="peer hidden" />

                <span class="block px-4 py-1.5 text-sm text-gray-700 bg-gray-100
                                    peer-checked:text-gray-900 peer-checked:bg-primary/20 font-medium rounded-full">
                    Vegetables
                </span>
            </label>
            <label class="cursor-pointer rounded-full border border-gray-300
                                transition-all duration-200
                                hover:border-primary hover:bg-primary/10
                                peer-checked:border-primary peer-checked:bg-primary/20">

                <input type="checkbox" name="tags" value="vegetables" class="peer hidden" />

                <span class="block px-4 py-1.5 text-sm text-gray-700 bg-gray-100
                                    peer-checked:text-gray-900 peer-checked:bg-primary/20 font-medium rounded-full">
                    Vegetables
                </span>
            </label>
            <label class="cursor-pointer rounded-full border border-gray-300
                                transition-all duration-200
                                hover:border-primary hover:bg-primary/10
                                peer-checked:border-primary peer-checked:bg-primary/20">

                <input type="checkbox" name="tags" value="vegetables" class="peer hidden" />

                <span class="block px-4 py-1.5 text-sm text-gray-700 bg-gray-100
                                    peer-checked:text-gray-900 peer-checked:bg-primary/20 font-medium rounded-full">
                    Vegetables
                </span>
            </label>

        </div>


    </div>
</template>
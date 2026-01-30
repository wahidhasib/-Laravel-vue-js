<template>
  <div class="flex items-center justify-center gap-2 mt-6">

    <!-- Previous -->
    <button
      class="h-8 w-8 rounded-full cursor-pointer flex items-center justify-center
             bg-gray-200 text-gray-600 border border-gray-300
             hover:bg-primary-bright hover:text-gray-800
             transition duration-300"
    >
      <i class="fa-solid fa-angle-left text-sm"></i>
    </button>

    <!-- Page -->
    <button
      class="h-8 w-8 rounded-full cursor-pointer flex items-center justify-center
             bg-primary text-white font-medium
             border border-primary-bright"
    >
      1
    </button>

    <button
      class="h-8 w-8 rounded-full cursor-pointer flex items-center justify-center
             bg-gray-200 text-gray-700 border border-gray-300
             hover:bg-primary-bright hover:text-gray-800
             transition duration-300"
    >
      2
    </button>

    <button
      class="h-8 w-8 rounded-full cursor-pointer flex items-center justify-center
             bg-gray-200 text-gray-700 border border-gray-300
             hover:bg-primary-bright hover:text-gray-800
             transition duration-300"
    >
      3
    </button>

    <!-- Dots -->
    <span class="px-1 text-gray-500 select-none">...</span>

    <button
      class="h-8 w-8 rounded-full cursor-pointer flex items-center justify-center
             bg-gray-200 text-gray-700 border border-gray-300
             hover:bg-primary-bright hover:text-gray-800
             transition duration-300"
    >
      10
    </button>

    <!-- Next -->
    <button
      class="h-8 w-8 rounded-full cursor-pointer flex items-center justify-center
             bg-gray-200 text-gray-600 border border-gray-300
             hover:bg-primary-bright hover:text-gray-800
             transition duration-300"
    >
      <i class="fa-solid fa-angle-right text-sm"></i>
    </button>

  </div>
</template>
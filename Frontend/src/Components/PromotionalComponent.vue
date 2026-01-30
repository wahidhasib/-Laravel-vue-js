<template>
    <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 items-center gap-8">

            <!-- Left Image -->
            <div class="flex justify-center">
                <img 
                    src="../../public/Images/vegetables.png" 
                    alt="Vegetables"
                    class="max-w-xs lg:max-w-sm"
                >
            </div>

            <!-- Center Content -->
            <div class="text-center py-10">
                <p class="text-green-600 text-sm font-semibold uppercase">
                    Best Deals
                </p>

                <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mt-2">
                    Our Special Products<br>
                    Deal of the Month
                </h2>

                <!-- Countdown -->
                <div class="flex justify-center gap-4 mt-6">
                    <div class="bg-white px-4 py-2 rounded-md shadow">
                        <p class="text-xl font-bold text-green-600">00</p>
                        <span class="text-xs text-gray-500">Days</span>
                    </div>
                    <div class="bg-white px-4 py-2 rounded-md shadow">
                        <p class="text-xl font-bold text-green-600">02</p>
                        <span class="text-xs text-gray-500">Hours</span>
                    </div>
                    <div class="bg-white px-4 py-2 rounded-md shadow">
                        <p class="text-xl font-bold text-green-600">18</p>
                        <span class="text-xs text-gray-500">Mins</span>
                    </div>
                    <div class="bg-white px-4 py-2 rounded-md shadow">
                        <p class="text-xl font-bold text-green-600">46</p>
                        <span class="text-xs text-gray-500">Secs</span>
                    </div>
                </div>

                <!-- Button -->
                <button class="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition">
                    Shop Now →
                </button>
            </div>

            <!-- Right Image -->
            <div class="relative h-full flex justify-center">
                <img 
                    src="../../public/Images/model.png" 
                    alt="Model"
                    class="max-w-xs lg:max-w-sm lg:absolute bottom-0 right-0"
                >
            </div>

        </div>
    </div>
</template>
<template>
    <div class="shadow-lg rounded-lg overflow-hidden border-gray-100 hover:shadow-2xl transition-all duration-500 group">
        <a href="#">
            <div class="blog-image relative h-50 md:h-60 overflow-hidden">
                <img src="../../public/Images/blog.png" class="w-full h-full group-hover:scale-110 duration-300" alt="">
                 <div class="absolute left-5 rounded-md bottom-5 p-2 md:p-3 bg-gray-400 group-hover:bg-white duration-300">
                    <h5 class="font-semibold text-center text-lg md:text-2xl">29</h5>
                    <p class="text-gray-700 text-sm md:text-md text-center">JAN</p>
                 </div>
            </div>

            <div class="px-2 tracking-tighter py-3 bg-white">
                <div class="flex gap-1 items-center">
                    <i class="fa-regular fa-user"></i>
                    <p class="text-gray-600 font-semibold">User</p>
                </div>
                <h2 class="font-semibold text-gray-700 text-md md:text-lg mb-2">
                    Maecenas blandit risus elementum mauris malesuada.
                </h2>
                <a href="#" class="text-gray-900 hover:text-primary duration-300 font-semibold">Read More</a>
            </div>
        </a>
    </div>
</template>
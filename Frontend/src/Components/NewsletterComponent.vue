<template>
    <div class="py-5 md:py-10 lg:py-15 max-w-7xl mx-auto px-4 lg:flex gap-5 items-center justify-between">
        <div class="flex gap-3 items-center lg:w-1/2">
            <div class="text-3xl md:text-4xl text-primary">
                <i class="fa-regular fa-envelope"></i>
            </div>
            <div class="">
                <h4 class="text-lg md:text-2xl font-semibold">
                    Subcribe our Newsletter
                </h4>
                <p class="text-gray-600 text-sm">Pellentesque eu nibh eget mauris congue mattis matti.</p>
            </div>
        </div>

        <div class="flex gap-3 items-center justify-between lg:w-1/2 mt-5 lg:mt-0">
            <form action="" class="w-3/4 relative">
                <input type="email" placeholder="Your email address" aria-label="Email address" class="w-full h-12 px-5 text-sm rounded-full
                    bg-gray-200 text-gray-700 outline-none border border-transparent
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                        placeholder-gray-500" />
                <button type="submit"
                    class="bg-primary text-white cursor-pointer px-5 py-2 rounded-full duration-300 hover:bg-primary-dark text-sm h-12 absolute right-0 top-0">Subscribe</button>
            </form>

            <div class="flex items-center gap-1">
                <a href="#" aria-label="Facebook" class="group h-11 w-11 flex items-center justify-center rounded-full
            bg-gray-200 text-gray-600
            transition-all duration-300
            hover:bg-primary hover:text-white hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-primary/40">
                    <i class="fa-brands fa-facebook-f text-lg"></i>
                </a>

                <a href="#" aria-label="Twitter" class="group h-11 w-11 flex items-center justify-center rounded-full
            bg-gray-200 text-gray-600
            transition-all duration-300
            hover:bg-primary hover:text-white hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-primary/40">
                    <i class="fa-brands fa-x-twitter text-lg"></i>
                </a>

                <a href="#" aria-label="Instagram" class="group h-11 w-11 flex items-center justify-center rounded-full
            bg-gray-200 text-gray-600
            transition-all duration-300
            hover:bg-primary hover:text-white hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-primary/40">
                    <i class="fa-brands fa-instagram text-lg"></i>
                </a>

                <a href="#" aria-label="LinkedIn" class="group h-11 w-11 flex items-center justify-center rounded-full
            bg-gray-200 text-gray-600
            transition-all duration-300
            hover:bg-primary hover:text-white hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-primary/40">
                    <i class="fa-brands fa-linkedin-in text-lg"></i>
                </a>
            </div>
        </div>
    </div>
</template>
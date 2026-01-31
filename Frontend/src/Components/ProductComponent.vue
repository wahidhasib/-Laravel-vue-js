<template>
    <div class="relative w-full max-w-xs overflow-hidden rounded-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary bg-white group shadow-md">
        <router-link :to="{name: 'productDetails', params: {id: 10}}">
            <img class="h-60 rounded-t-lg object-cover"
                src="../../public/Images/green-apple.png"
                alt="product image" />
        </router-link>
        <span
            class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
        <div class="mt-4 px-3 pb-5">
            <router-link :to="{name: 'productDetails', params: {id: 10}}">
                <h2 class="text-md font-semibold tracking-tight text-slate-800 group-hover:text-black">Nike Air MX Super 5000</h2>
            </router-link>
            <div class="mt-2.5 mb-5 flex text-yellow-500 items-center">
                <span class="mr-2 rounded bg-yellow-200 text-gray-700 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <div class="flex items-center justify-between">
                <p>
                    <span class="text-xl font-bold text-slate-900">$249</span>
                    <span class="text-sm text-slate-900 line-through">$299</span>
                </p>
                <router-link :to="{name: 'productDetails', params: {id: 10}}"
                    class="flex items-center rounded-md bg-slate-900 text-center text-sm px-3 py-2 font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    View</router-link>
            </div>
        </div>
    </div>
</template>
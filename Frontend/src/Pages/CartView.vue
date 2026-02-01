<template>
    <main class="bg-white">
        <section class="max-w-7xl mx-auto py-5 lg:py-10 px-4">
            <h2 class="text-gray-700 font-semibold text-2xl mb-5">My Shopping Cart</h2>
            <div class="lg:flex justify-between space-y-5 gap-3">
                <div class="lg:w-3/4">
                    <div class="border rounded-md border-gray-300 bg-gray-50 shadow-lg">
                        <div class="overflow-x-auto md:overflow-x-visible w-full max-w-full">
                            <table class="text-center w-full min-w-[500px] [&_th]:py-4 [&_td]:p-2 [&_td]:px-2">
                                <thead>
                                    <tr class="border-b border-gray-300 text-sm">
                                        <th>PRODUCT</th>
                                        <th>QUANTITY</th>
                                        <th>SUBTOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="i in 5" :key="i" class="border-b border-gray-300 text-sm w-full">
                                        <td>
                                            <div class="flex gap-2 items-center">
                                                <img src="../../public/Images/green-apple.png" class="h-20 w-20 object-cover"
                                                    alt="">
                                                <div class="">
                                                    <h2 class="text-slate-700 text-md font-semibold">Green Capsicum</h2>
                                                    <p class="text-left font-medium text-gray-800 mt-1">$120.00</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div
                                                class="mx-auto flex gap-1 items-center justify-between border border-gray-300 rounded-full p-1 w-28">
                                                <button type="button"
                                                    class="h-8 w-8 cursor-pointer rounded-full bg-gray-200 flex justify-center items-center">-</button>
                                                <input type="text" readonly class="text-center outline-none w-5" value="1">
                                                <button type="button"
                                                    class="h-8 w-8 cursor-pointer rounded-full bg-gray-200 flex justify-center items-center">+</button>
                                            </div>
                                        </td>
                                        <td class="font-semibold">
                                            $280.00
                                        </td>
                                        <td>
                                            <button
                                                class="h-8 w-8 rounded-full border border-gray-200 bg-white hover:bg-slate-950 hover:text-white cursor-pointer">
                                                <i class="fa-solid fa-x"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="border border-gray-200 flex items-center justify-between py-2 px-4 rounded-lg mt-5">
                            <button
                                class="py-2 px-5 text-sm text-gray-900 bg-gray-200 hover:bg-slate-500 hover:text-white cursor-pointer duration-300 rounded-full">
                                Return to shop
                            </button>
                            <button type="button"
                                class="py-2 px-5 text-sm text-gray-900 bg-gray-200 hover:bg-primary cursor-pointer hover:text-white rounded-full duration-300">
                                Update Cart
                            </button>
                        </div>
                    </div>

                    <div
                        class="border border-gray-200 bg-gray-50 sm:flex items-center justify-between py-5 px-4 rounded-lg mt-5">
                        <p class="text-lg text-black whitespace-nowrap font-semibold">Coupon Code</p>

                        <form class="sm:w-4/5">
                            <div class="relative w-full">
                                <input type="text" placeholder="Enter coupon code"
                                    class="w-full h-10 ps-4 pe-24 text-gray-700 border border-gray-200 rounded-full focus:outline-none">

                                <button type="submit" class="absolute right-1 top-1/2 -translate-y-1/2
                       bg-slate-900 hover:bg-black duration-300 cursor-pointer text-white px-6 py-1.5 rounded-full text-md">
                                    Apply
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

                <div class="lg:w-1/4">
                    <div class="border border-gray-300 px-2 py-5 rounded-lg shadow-2xl bg-gray-50">
                        <h4 class="text-lg font-semibold text-slate-900 mb-3">Cart Total</h4>
                        <div class="flex gap-3 items-center justify-between py-2 border-b border-gray-200">
                            <p class="text-gray-800 font-medium">Subtotal:</p>
                            <p class="font-semibold text-black">$84.00</p>
                        </div>
                        <div class="flex gap-3 items-center justify-between py-2 border-b border-gray-200">
                            <p class="text-gray-800 font-medium">Shipping:</p>
                            <p class="font-semibold text-black">Free</p>
                        </div>
                        <div class="flex gap-3 items-center justify-between py-2">
                            <p class="text-gray-800 font-medium">Total:</p>
                            <p class="font-semibold text-black">$84.00</p>
                        </div>
                        
                        <div class="mt-3">
                            <button class="block text-center px-4 py-2 bg-[#004D03] hover:bg-primary-dark rounded-full w-full cursor-pointer text-white text-sm font-medium duration-300 hover:shadow-2xl">
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    </main>
</template>
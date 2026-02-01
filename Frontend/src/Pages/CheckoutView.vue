<template>
    <main class="bg-white">
        <section class="max-w-7xl mx-auto py-5 lg:py-10 px-4">
            <div class="md:flex justify-between space-y-5 gap-3">
                <div class="md:w-2/3 space-y-3 border p-3 rounded-lg shadow-2xl border-gray-200">
                    <h2 class="text-gray-700 font-semibold text-2xl">Billing Information</h2>

                    <!-- Name -->
                    <div class="flex gap-3">
                        <div class="w-1/2">
                            <label class="text-xs text-gray-600 mb-1 block">First Name</label>
                            <input type="text" placeholder="First name"
                                class="w-full border border-gray-300 px-4 h-11 text-sm rounded-md focus:outline-primary duration-300">
                        </div>
                        <div class="w-1/2">
                            <label class="text-xs text-gray-600 mb-1 block">Last Name</label>
                            <input type="text" placeholder="Last name"
                                class="w-full border border-gray-300 px-4 h-11 text-sm rounded-md focus:outline-primary duration-300">
                        </div>
                    </div>

                    <!-- Email & Phone -->
                    <div class="flex gap-3">
                        <div class="w-1/2">
                            <label class="text-xs text-gray-600 mb-1 block">Email</label>
                            <input type="email" placeholder="example@email.com"
                                class="w-full border border-gray-300 px-4 h-11 text-sm rounded-md focus:outline-primary duration-300">
                        </div>
                        <div class="w-1/2">
                            <label class="text-xs text-gray-600 mb-1 block">Phone</label>
                            <input type="text" placeholder="+880 **********"
                                class="w-full border border-gray-300 px-4 h-11 text-sm rounded-md focus:outline-primary duration-300">
                        </div>
                    </div>

                    <!-- Address -->
                    <div>
                        <label class="text-xs text-gray-600 mb-1 block">Street Address</label>
                        <input type="text" placeholder="House, Road, Area"
                            class="w-full border border-gray-300 px-4 h-11 text-sm rounded-md focus:outline-primary duration-300">
                    </div>

                    <!-- City, State, Zip -->
                    <div class="flex gap-3">
                        <div class="w-1/3">
                            <label class="text-xs text-gray-600 mb-1 block">City</label>
                            <input type="text" placeholder="City"
                                class="w-full border border-gray-300 px-4 h-11 text-sm rounded-md focus:outline-primary duration-300">
                        </div>
                        <div class="w-1/3">
                            <label class="text-xs text-gray-600 mb-1 block">State</label>
                            <input type="text" placeholder="State"
                                class="w-full border border-gray-300 px-4 h-11 text-sm rounded-md focus:outline-primary duration-300">
                        </div>
                        <div class="w-1/3">
                            <label class="text-xs text-gray-600 mb-1 block">ZIP Code</label>
                            <input type="text" placeholder="ZIP"
                                class="w-full border border-gray-300 px-4 h-11 text-sm rounded-md focus:outline-primary duration-300">
                        </div>
                    </div>

                    <!-- Notes -->
                    <div>
                        <label class="text-xs text-gray-600 mb-1 block">Order Notes (Optional)</label>
                        <textarea rows="3" placeholder="Any special instructions?"
                            class="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:outline-primary duration-300"></textarea>
                    </div>
                </div>

                <div class="md:w-1/3">
                    <div class="border border-gray-300 px-3 py-5 rounded-lg shadow-2xl bg-gray-50">
                        <h4 class="text-lg font-semibold text-slate-900">
                            Order Summary
                        </h4>

                        <!-- Product Item -->
                        <div class="flex items-center justify-between py-3 border-b border-gray-200">
                            <div class="flex gap-2 items-center">
                                <div class="">
                                    <img src="../../public/Images/green-apple.png" class="h-12 w-12 object-cover rounded shadow-2xl" alt="">
                                </div>
                                <div class="">
                                    <p class="text-sm font-medium text-gray-800">
                                        Product Name One
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        Qty: 2
                                    </p>
                                </div>
                            </div>
                            <p class="text-sm font-semibold text-black">
                                $40.00
                            </p>
                        </div>

                        <!-- Product Item -->
                        <div class="flex items-center justify-between py-3 border-b border-gray-200">
                            <div class="flex gap-2 items-center">
                                <div class="">
                                    <img src="../../public/Images/green-apple.png" class="h-12 w-12 object-cover rounded shadow-2xl" alt="">
                                </div>
                                <div class="">
                                    <p class="text-sm font-medium text-gray-800">
                                        Product Name One
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        Qty: 2
                                    </p>
                                </div>
                            </div>
                            <p class="text-sm font-semibold text-black">
                                $40.00
                            </p>
                        </div>

                        <!-- Subtotal -->
                        <div class="flex items-center justify-between py-3 border-b border-gray-200 mt-2">
                            <p class="text-sm text-gray-700 font-medium">
                                Subtotal
                            </p>
                            <p class="text-sm font-semibold text-black">
                                $84.00
                            </p>
                        </div>

                        <!-- Shipping -->
                        <div class="flex items-center justify-between py-3 border-b border-gray-200">
                            <p class="text-sm text-gray-700 font-medium">
                                Shipping
                            </p>
                            <p class="text-sm font-semibold text-green-600">
                                Free
                            </p>
                        </div>

                        <!-- Total -->
                        <div class="flex items-center justify-between py-4">
                            <p class="text-base font-semibold text-gray-900">
                                Total
                            </p>
                            <p class="text-base font-bold text-black">
                                $84.00
                            </p>
                        </div>

                        <!-- Checkout Button -->
                        <div class="mt-4">
                            <button
                                class="block w-full px-4 py-2 bg-[#004D03] hover:bg-primary-dark rounded-full text-white text-sm font-medium duration-300 hover:shadow-2xl cursor-pointer">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
</template>
<script setup lang="ts">
import NewsletterComponent from '@/Components/NewsletterComponent.vue';

</script>

<template>
    <main class="bg-white">
        <section class="max-w-7xl mx-auto sm:flex gap-3 px-4 py-10 lg:py-15">
            <div class="flex-1/4 hidden sm:block rounded-lg shadow-2xl p-4">
                <div class="space-y-3 border-b border-gray-200 h-1/3 flex items-center justify-center">
                    <div class="">
                        <div class="text-primary-dark font-bold text-4xl flex items-center justify-center">
                            <i class="fa-solid fa-location-crosshairs"></i>
                        </div>
                        <p class="text-slate-600 font-medium text-sm text-center mt-2">
                            2715 Ash Dr. San Jose, South Dakota 83475
                        </p>
                    </div>
                </div>
                <div class="space-y-3 border-b border-gray-200 h-1/3 flex items-center justify-center">
                    <div class="">
                        <div class="text-primary-dark font-bold text-4xl flex items-center justify-center">
                            <i class="fa-regular fa-envelope"></i>
                        </div>
                        <p class="text-slate-600 font-medium text-sm text-center mt-2">
                            demo@example.com
                        </p>
                    </div>
                </div>
                <div class="space-y-3 border-b border-gray-200 h-1/3 flex items-center justify-center">
                    <div class="">
                        <div class="text-primary-dark font-bold text-4xl flex items-center justify-center">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <p class="text-slate-600 font-medium text-sm text-center mt-2">
                            +12345678245
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex-3/4 rounded-lg shadow-2xl p-4">
                <form action="" class="space-y-4">
                    <h3 class="text-grey-700 font-semibold text-2xl">Just Say Hello!</h3>
                    <p class="text-gray-500 text-sm lg:w-1/2">
                        Do you fancy saying hi to me or you want to get started with your project and you need my help?
                        Feel free to contact me.
                    </p>

                    <div class="flex gap-3 items-center justify-between">
                        <div class="w-1/2">
                            <input type="text" placeholder="Name..."
                                class="h-10 py-1 w-full px-3 text-gray-600 rounded border-2 border-gray-200 focus:outline-primary duration-300">
                        </div>
                        <div class="w-1/2">
                            <input type="email" placeholder="Email..."
                                class="h-10 py-1 w-full px-3 text-gray-600 rounded border-2 border-gray-200 focus:outline-primary duration-300">
                        </div>
                    </div>

                    <div class="w-full">
                        <input type="text" placeholder="Subject..."
                            class="h-10 py-1 w-full px-3 text-gray-600 rounded border-2 border-gray-200 focus:outline-primary duration-300">
                    </div>
                    <div class="w-full">
                        <textarea
                            class="w-full py-1 px-3 text-gray-600 rounded border-2 border-gray-200 focus:outline-primary duration-300"
                            rows="5" placeholder="Message..."></textarea>
                    </div>

                    <div class="w-full">
                        <button type="submit"
                            class="bg-primary hover:bg-primary-dark text-white text-md px-4 py-2 rounded-lg cursor-pointer duration-300">Send
                            Message</button>
                    </div>
                </form>
            </div>
        </section>

        <!-- Map section -->
        <section class="w-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.869268244854!2d89.63855997602302!3d23.752040888712113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe4100458c5b0f%3A0x5bcd9a8a20c9d0db!2sBoropool%20Rajbari!5e0!3m2!1sen!2sbd!4v1769884897593!5m2!1sen!2sbd"
                class="w-full h-96" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>

        <!-- Newsletter section -->
        <section class="bg-[#F7F7F7]">
            <NewsletterComponent></NewsletterComponent>
        </section>
    </main>
</template>
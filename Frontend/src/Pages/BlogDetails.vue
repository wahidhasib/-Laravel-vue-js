<script setup lang="ts">
import NewsletterComponent from '@/Components/NewsletterComponent.vue';


</script>

<template>
    <main class="bg-white">
        <section class="max-w-7xl mx-auto py-5 md:py-10 px-4 flex gap-4">
            <div class="lg:flex-3/4">
                <img src="../../public/Images/blog.png" class="w-full rounded-lg shadow-2xl" alt="">

                <article class="mt-5">
                    <h2 class="text-2xl leading-tight mb-5">
                        Maecenas tempor urna sed quam mollis, a placerat dui fringill Suspendisse.
                    </h2>

                    <p class="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit autem voluptatem blanditiis repellendus nesciunt! Excepturi eveniet quae facilis dolorem, dolores odio odit at error est, velit minus? Dicta, excepturi aliquam!

                        <br><br>

                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, rerum ipsa? Doloremque deleniti dolorem repellendus velit ullam odio incidunt sit, dolor culpa magnam aliquam voluptates, sapiente voluptas nostrum eaque? Ex!
                        <br>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda optio, doloribus omnis exercitationem ipsam nisi inventore nesciunt enim possimus, aspernatur error laboriosam. Asperiores, quod adipisci. Ab maiores quis voluptatum odit.
                    </p>
                </article>
            </div>
            <div class="lg:flex-1/4 hidden lg:block relative">
                <form action="" class="w-full">
                    <input type="text" placeholder="Search" class="w-full px-3 py-1 border border-gray-300 text-sm rounded-md h-10 focus:outline-primary focus:shadow-lg duration-300 text-slate-600">
                </form>

                <ul class="hidden absolute top-11 left-0 w-full space-y-1 bg-white border-2 border-gray-200 p-1 rounded shadow-2xl">
                    <li class="border border-gray-200 rounded hover:border-primary hover:bg-primary/10 duration-300">
                        <a href="" class="w-full py-2 block px-3 text-slate-600 hover:text-black text-sm duration-300">Demo Blog</a>
                    </li>
                    <li class="border border-gray-200 rounded hover:border-primary hover:bg-primary/10 duration-300">
                        <a href="" class="w-full py-2 block px-3 text-slate-600 hover:text-black text-sm duration-300">Demo Blog</a>
                    </li>
                    <li class="border border-gray-200 rounded hover:border-primary hover:bg-primary/10 duration-300">
                        <a href="" class="w-full py-2 block px-3 text-slate-600 hover:text-black text-sm duration-300">Demo Blog</a>
                    </li>
                </ul>

                <!-- divider -->
                 <div class="w-full border-b-2 border-gray-200 my-5"></div>

                <div class="space-y-2">
                    <h3 class="text-slate-800 font-semibold text-xl mb-3">Recently Added</h3>
                    <div class="flex gap-3 items-center justify-between hover:bg-primary/10 py-1 px-2 rounded-lg cursor-pointer duration-300 group">
                        <div class="">
                            <img src="../../public/Images/blog.png" class="h-15 w-15 object-cover rounded-lg shadow" alt="">
                        </div>
                        <div class="">
                            <h2 class="text-sm leading-tight text-slate-600 duration-300 mb-1 group-hover:text-black">Curabitur porttitor orci eget nequ accumsan.</h2>
                            <p class="text-xs text-primary"><i class="fa-regular fa-calendar"></i> <span class="">Apr 25, 2025</span></p>
                        </div>
                    </div>
                    <div class="flex gap-3 items-center justify-between hover:bg-primary/10 py-1 px-2 rounded-lg cursor-pointer group">
                        <div class="">
                            <img src="../../public/Images/blog.png" class="h-15 w-15 object-cover rounded-lg shadow" alt="">
                        </div>
                        <div class="">
                            <h2 class="text-sm leading-tight text-slate-600 duration-300 mb-1 group-hover:text-black">Curabitur porttitor orci eget nequ accumsan.</h2>
                            <p class="text-xs text-primary"><i class="fa-regular fa-calendar"></i> <span class="">Apr 25, 2025</span></p>
                        </div>
                    </div>
                    <div class="flex gap-3 items-center justify-between hover:bg-primary/10 py-1 px-2 rounded-lg cursor-pointer group">
                        <div class="">
                            <img src="../../public/Images/blog.png" class="h-15 w-15 object-cover rounded-lg shadow" alt="">
                        </div>
                        <div class="">
                            <h2 class="text-sm leading-tight text-slate-600 duration-300 mb-1 group-hover:text-black">Curabitur porttitor orci eget nequ accumsan.</h2>
                            <p class="text-xs text-primary"><i class="fa-regular fa-calendar"></i> <span class="">Apr 25, 2025</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Newsletter section -->
        <section class="bg-[#F7F7F7]">
            <NewsletterComponent></NewsletterComponent>
        </section>
    </main>
</template>
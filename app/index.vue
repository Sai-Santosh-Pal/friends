<template>
  <div  class="overflow-x-hidden">
    <div class="flex items-center justify-center text-black">
      <Navbar />
    </div>
    <div class="h-[100vh] w-[100vw] flex items-center flex-col justify-center bg-white">
      <p class="text-black text-5xl lg:text-8xl md:text-7xl font-bold tracking-tighter">Friends.</p>
      <p class="text-black italic text-xl md:text-xl lg:text-2xl font-light tracking-tighter">the real social media</p>
      <div class="flex mt-5 gap-2">
        <Buttons/>
        <Buttons/>
      </div>
    </div>
    <div class="h-[100vh] w-[100vw] bg-black color-white flex items-center flex-col justify-center">
      <div class="faces flex flex-row gap-[-10px]">
        <Face class="z-[100]"/>
        <Face class="ml-[-15px] z-[90]"/>
        <Face class="ml-[-15px] z-[80]"/>
        <Face class="ml-[-15px] z-[70]"/>
        <Face class="ml-[-15px] z-[60]"/>
      </div>
      <div class="mt-10 flex flex-col items-center justify-center">
        <p class="text-center text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter">
          Talk With People.<br>
          Not Show Off.
        </p>
        <p class="text-center w-[80%] mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur non repellat distinctio rerum eaque maiores. Animi, pariatur? Dolore, beatae id!
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
const darkMode = ref(true)
import Navbar from '~/components/Navbar.vue';
import Face from '../components/Face.vue';
import Buttons from '~/components/Buttons.vue';
</script>

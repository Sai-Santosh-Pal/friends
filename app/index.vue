<template>
  <div  class="overflow-x-hidden">
    <div class="w-[100vw] flex items-center justify-center">
      <Navbar />
    </div>
    <div class="h-[100vh] w-[100vw] flex items-center flex-col justify-center bg-white">
      <p class="text-black sm:text-4xl text-7xl font-bold tracking-tighter">Friends.</p>
      <p class="text-black italic sm:text-xl text-2xl font-light tracking-tighter">the real social media</p>
    </div>
    <div class="h-[100vh] bg-black">
  </div>
  </div>
</template>
<script setup>
const darkMode = ref(true)
import Navbar from '~/components/Navbar.vue';
import Face from '../components/Face.vue';
</script>

<template>
  <div  class="overflow-x-hidden">
    <div class="flex items-center justify-center text-black">
      <Navbar />
    </div>
    <div id="who" class="h-[100vh] w-[100vw] flex items-center flex-col justify-center bg-white">
      <p class="text-black text-5xl lg:text-8xl md:text-7xl font-bold tracking-tighter">Friends.</p>
      <p class="text-black italic text-xl md:text-xl lg:text-2xl font-light tracking-tighter">the real social media</p>
      <div class="flex mt-5 gap-5 items-center">
        <Buttons text="Waitlist Open!" onclick="window.location.href = '#where'"/>
        <p class="text-black text-[14px] cursor-pointer" onclick="window.location.href = '#why'">Learn More</p>
      </div>
    </div>
    <div id="why" class="h-[100vh] w-[100vw] bg-black text-white flex items-center flex-col justify-center">
      <div class="faces flex flex-row">
        <Face :imgSrc="image1" class="ml-[-15px] z-[100]"/>
        <Face :imgSrc="image2" class="ml-[-15px] z-[90]"/>
        <Face :imgSrc="image3" class="ml-[-15px] z-[80]"/>
        <Face :imgSrc="image4" class="ml-[-15px] z-[70]"/>
        <Face :imgSrc="image5" class="ml-[-15px] z-[60]"/>
      </div>
      <div class="mt-10 flex flex-col items-center justify-center">
        <p class="text-center text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white">
          Talk With People.<br>
          Not Show Off.
        </p>
        <p class="text-center mt-5 text-white tracking-tighter">
          We believe in making true conversations with the people you love. <br> Challenge your friends, Start streaks, Build Relations <br> with the people you love - the people you coud call friends!
        </p>
      </div>
    </div>
    <div id="where" class="text-black h-[50vh] w-[100vw] flex items-center flex-col justify-center bg-white tracking-tighter">
        <p class="text-black text-4xl lg:text-6xl md:text-5xl font-bold tracking-tighter">Waitlist On.</p>
        <p class="text-center w-[80%] mt-2 text-gray-900 tracking-tighter">
          Dump social media. Turn to Friends today<br> Challenge your friends, Start streaks, Build relations <br> with the people you love - the people you coud call friends!
        </p>
        <form class="mt-4 flex flex-col w-[80vw] max-w-[500px] items-center" action="https://formspree.io/f/xykyrrkk" method="post">

          <label class="w-full">
            <p class="text-stone-500 text-sm mb-[-25px]">Email</p><br>
            <input class="w-full outline-none py-[3px] px-1 bg-white border-[1px] border-stone-500" type="email" name="email" id="">
          </label>

          <label class="mt-3 w-full">
            <p class="text-stone-500 text-sm mb-[-25px]">Message/Suggestion</p><br>
            <textarea class="w-full outline-none py-[3px] px-1 resize-none bg-white border-[1px] border-stone-500" name="message" id=""></textarea>
          </label>
          <button type="submit" class="text-white bg-black border-[1px] text-[14px] mt-5 px-5 py-2 flex items-center justify-center">Submit</button>
        </form>
    </div>
    <div class="w-[100vw] flex items-center justify-center bg-black gap-[5px] py-2"><div class="font-bold tracking-tighter cursor-pointer">Friends</div>forever. </div>
  </div>
</template>
<script setup>
const darkMode = ref(true)
import Navbar from '~/components/Navbar.vue';
import Face from '../components/Face.vue';
import Buttons from '~/components/Buttons.vue';
import image1 from '~/assets/image 1.png';
import image2 from '~/assets/image 2.png';
import image3 from '~/assets/image 3.png';
import image4 from '~/assets/image 4.png';
import image5 from '~/assets/image 5.png';
</script>

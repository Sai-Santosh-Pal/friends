
<script setup>
    defineProps({
       imgSrc: String
    })
</script>
<template>
    <img class="rounded-[200px] h-[80px] md:h-[100px] lg:h-[110px]" :src="imgSrc" alt="" srcset="">
</template>

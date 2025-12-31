<template>
    <div class="text-black border-black border-[1px] text-[14px] px-5 py-2 flex items-center justify-center">
        {{ text }}
    </div>
</template>
<script setup>
    defineProps({
        text: String
    })
</script>
<template>
  <div
    class="flex flex-col justify-center h-44 w-44"
    @mouseenter="showText = true"
    @mouseleave="showText = false"
  >
    <img v-if="!showText" :src="logo" alt="" class="w-20 m-auto" />
    <h2 v-if="showText" class="text-white text-center break-normal">{{ projectName }}</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  projectName: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
})

let showText = ref(false)
</script>

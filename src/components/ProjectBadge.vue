<template>
  <div class="flex flex-col items-center">
    <img :src="logo" alt="" class="w-20" />
    <h2 class="text-white">{{ projectName }}</h2>
  </div>
</template>

<script setup>
defineProps({
  projectName: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: false,
  },
})
</script>

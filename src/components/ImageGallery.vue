<template>
  <div class="flex flex-col w-full gap-3">
    <h2 class="text-white">{{ projectData.name }}</h2>
    <p class="text-white">{{ projectData.description }}</p>
    <img :src="`/src/pages/personal-projects/images/${heroImage}`" alt="" class="w-full" />
    <div class="flex justify-between gap-2">
      <img
        v-for="image in projectData.images"
        :src="`/src/pages/personal-projects/images/${image}`"
        alt=""
        :key="image"
        @click="imageChange(image)"
        class="cursor-pointer basis-auto max-h-32 w-full object-cover"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'

let projectData = defineProps({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  images: {
    type: Array,
  },
})

let heroImage = ref(projectData.images[0])

function imageChange(image) {
  heroImage.value = image
}

watch(projectData, (newImage) => {
  imageChange(newImage.images[0])
})

// const files = require('@/pages')
// console.log(files)
</script>

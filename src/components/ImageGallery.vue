<template>
  <h2>Image Gallery</h2>
  <div class="flex w-full gap-3">
    <img
      :src="`/src/pages/personal-projects/images/${heroImage}`"
      alt=""
      class="w-2/3 object-scale-down"
    />
    <div class="flex-col w-1/3">
      <img
        v-for="image in images.imageSet"
        :src="`/src/pages/personal-projects/images/${image}`"
        alt=""
        :key="image"
        @click="imageChange(image)"
        class="cursor-pointer"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'

let images = defineProps({
  imageSet: {
    type: Array,
  },
})

let heroImage = ref(images.imageSet[0])

console.log(images.imageSet[0])

function imageChange(image) {
  console.log(image)
  heroImage.value = image
}

watch(images, (newImage) => {
  imageChange(newImage.imageSet[0])
})

// const files = require('@/pages')
// console.log(files)
</script>

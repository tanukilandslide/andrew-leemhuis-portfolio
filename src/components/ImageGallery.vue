<template>
  <h2>Image Gallery</h2>
  <div class="flex w-full gap-3">
    <img :src="`/src/pages/personal-projects/images/${heroImage}`" alt="" class="h-fit" />
    <div class="flex-col h-fit">
      <img
        v-for="image in images"
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
import { ref } from 'vue'

const images = [
  'chair_project/01-initial-chair-sketches.jpg',
  'chair_project/02-chairs-color.jpg',
  'chair_project/03-chair-construction.jpg',
  'chair_project/04-process-photos.jpg',
  'chair_project/05-final-chair.jpg',
]

let heroImage = ref(images[0])

function imageChange(image) {
  console.log(image)
  heroImage.value = image
}

// const images = [
//   'flower_pot/01_initial_sketch.jpg',
//   'flower_pot/02_3d_model_rendering.jpg',
//   'flower_pot/03_flower_pot_printing.gif',
//   'flower_pot/04_flower_pot_on_fence.jpg',
//   'flower_pot/05_flower_pot_with_plant.jpg',
// ]

// const images = [
//   'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.YFmJZ1hmnsbXTGc7zCaiPgHaE8%3Fpid%3DApi&f=1&ipt=9fad29e18c046d28b885b52d349dd8f5cb206edf4dcde3ea06b64c9774ad9930&ipo=images',
//   'https://dailyjugarr.com/wp-content/uploads/2024/07/Farewell_-Furry-Friend-How-My-Cat-Taught-Me-the-True-Meaning-of-Love.webp',
// ]

console.log(images)

// const files = require('@/pages')
// console.log(files)
</script>

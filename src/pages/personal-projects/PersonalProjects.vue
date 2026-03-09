<template>
  <main class="max-w-[980px]">
    <h1>Personal Projects</h1>
    <ImageGallery :image-set="currentProject.images"></ImageGallery>
    <div class="flex justify-between">
      <div
        v-for="project in projects"
        :key="project"
        class="cursor-pointer"
        @click="setProject(project)"
      >
        <h3>{{ project.name }}</h3>
        <img
          :src="`/src/pages/personal-projects/images/${project.thumbnail}`"
          alt=""
          class="rounded-full"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import ImageGallery from '@/components/ImageGallery.vue'
import { ref } from 'vue'

const projects = [
  {
    name: 'Breathe Chair',
    thumbnail: 'chair_project/00-chair-icon.jpg',
    images: [
      'chair_project/01-initial-chair-sketches.jpg',
      'chair_project/02-chairs-color.jpg',
      'chair_project/03-chair-construction.jpg',
      'chair_project/04-process-photos.jpg',
      'chair_project/05-final-chair.jpg',
    ],
  },
  {
    name: 'Fence Flower Pot',
    thumbnail: 'flower_pot/00_flower-pot-icon.jpg',
    images: [
      'flower_pot/01_initial_sketch.jpg',
      'flower_pot/02_3d_model_rendering.jpg',
      'flower_pot/03_flower_pot_printing.gif',
      'flower_pot/04_flower_pot_on_fence.jpg',
      'flower_pot/05_flower_pot_with_plant.jpg',
    ],
  },
  {
    name: 'Sketches',
    thumbnail: 'sketches/00-fringilla-icon.jpg',
    images: [
      'sketches/01-fringilla.jpg',
      'sketches/02-leighton-on-a-mountain.jpg',
      'sketches/03-sci-fi-helmet.jpg',
      'sketches/04-helmet.jpg',
      'sketches/05-pottery-throwdown-pickup.jpg',
    ],
  },
]

let currentProject = ref(projects[0])

function setProject(project) {
  currentProject.value = project
}
</script>

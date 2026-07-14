<template>
  <div :class="'w-screen bg-' + store.backgroundColor">
    <main class="max-w-245 min-h-[95vh] mx-auto px-3">
      <div class="flex flex-col gap-5 align-center">
        <div class="flex justify-between flex-wrap">
          <div
            v-for="project in projects"
            :key="project"
            class="cursor-pointer max-w-48 flex flex-col justify-between"
            @click="setProject(project)"
          >
            <h3 class="text-center text-white wrap-anywhere">{{ project.name }}</h3>
            <img :src="project.thumbnail" alt="" class="rounded-full" />
          </div>
        </div>
        <ImageGallery
          :name="currentProject.name"
          :description="currentProject.description"
          :thumbnail="currentProject.thumbnail"
          :images="currentProject.images"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import ImageGallery from '@/components/ImageGallery.vue'
import { ref } from 'vue'
import { useStyleStore } from '@/stores/styles'

const store = useStyleStore()

store.setNavbarColor('summer')
store.setBackgroundColor('summer')

// function setImagePath(path) {
//   return new URL(`./images/${path}`, import.meta.url).href
// }

const projects = [
  {
    name: 'Breathe Chair',
    description:
      'A student project to design a chair based on a poem, taking mercurial meanings and turning them alchemy-like into a physical object. I took inspiration for a humble form from a haiku and used bent plywood to make a pleasing and ergonomic form.',
    thumbnail: '/personal-projects/chair_project/00-chair-icon.jpg',
    images: [
      '/personal-projects/chair_project/01-initial-chair-sketches.jpg',
      '/personal-projects/chair_project/02-chairs-color.jpg',
      '/personal-projects/chair_project/03-chair-construction.jpg',
      '/personal-projects/chair_project/04-process-photos.jpg',
      '/personal-projects/chair_project/05-final-chair.jpg',
    ],
  },
  {
    name: 'Fence Flower Pot',
    description:
      'After seeing a similar flowerpot I had made, a friend commisioned me to design and print a version that would fit his fence. Though he lived thousands of miles away&comma; I was able to use the measurments provided to create a modular bracket that fit snuggly and allowed his plant friends to get enough sunlight, drain properly, and avoid cat-tastrophes &#128576;',
    thumbnail: '/personal-projects/flower_pot/00_flower-pot-icon.jpg',
    images: [
      '/personal-projects/flower_pot/01_initial_sketch.jpg',
      '/personal-projects/flower_pot/02_3d_model_rendering.jpg',
      '/personal-projects/flower_pot/03_flower_pot_printing.gif',
      '/personal-projects/flower_pot/04_flower_pot_on_fence.jpg',
      '/personal-projects/flower_pot/05_flower_pot_with_plant.jpg',
    ],
  },
  {
    name: 'Sketches',
    description: 'Periodically I like to catch up on making some art.',
    thumbnail: '/personal-projects/sketches/00-fringilla-icon.jpg',
    images: [
      '/personal-projects/sketches/01-fringilla.jpg',
      '/personal-projects/sketches/02-leighton-on-a-mountain.jpg',
      '/personal-projects/sketches/03-sci-fi-helmet.jpg',
      '/personal-projects/sketches/04-helmet.jpg',
      '/personal-projects/sketches/05-pottery-throwdown-pickup.jpg',
    ],
  },
]

let currentProject = ref(projects[0])

function setProject(project) {
  currentProject.value = project
}
</script>

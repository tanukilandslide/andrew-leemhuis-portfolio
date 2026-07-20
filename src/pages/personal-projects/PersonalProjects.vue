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

import ChairThumb from '/public/personal-projects/chair_project/00-chair-icon.jpg'

import ChairInitial from '/public/personal-projects/chair_project/01-initial-chair-sketches.jpg'
import ChairsColor from '/public/personal-projects/chair_project/02-chairs-color.jpg'
import ChairConstruction from '/public/personal-projects/chair_project/03-chair-construction.jpg'
import ChairProcess from '/public/personal-projects/chair_project/04-process-photos.jpg'
import ChairFinal from '/public/personal-projects/chair_project/05-final-chair.jpg'

import FlowerPotThumb from '/public/personal-projects/flower_pot/00_flower-pot-icon.jpg'

import FlowerPotSketch from '/public/personal-projects/flower_pot/01_initial_sketch.jpg'
import FlowerPotModel from '/public/personal-projects/flower_pot/02_3d_model_rendering.jpg'
import FlowerPotPrinting from '/public/personal-projects/flower_pot/03_flower_pot_printing.gif'
import FlowerPotOnFence from '/public/personal-projects/flower_pot/04_flower_pot_on_fence.jpg'
import FlowerPotPlant from '/public/personal-projects/flower_pot/05_flower_pot_with_plant.jpg'

import SketchesThumb from '/public/personal-projects/sketches/00-fringilla-icon.jpg'

import SketchFringilla from '/public/personal-projects/sketches/01-fringilla.jpg'
import SketchLeighton from '/public/personal-projects/sketches/02-leighton-on-a-mountain.jpg'
import SketchHelmetSciFi from '/public/personal-projects/sketches/03-sci-fi-helmet.jpg'
import SketchHelmet from '/public/personal-projects/sketches/04-helmet.jpg'
import SketchPotter from '/public/personal-projects/sketches/05-pottery-throwdown-pickup.jpg'

const store = useStyleStore()

store.setNavbarColor('summer')
store.setBackgroundColor('summer')

const projects = [
  {
    name: 'Breathe Chair',
    description:
      'A student project to design a chair based on a poem, taking mercurial meanings and turning them alchemy-like into a physical object. I took inspiration for a humble form from a haiku and used bent plywood to make a pleasing and ergonomic form.',
    thumbnail: ChairThumb,
    images: [ChairInitial, ChairsColor, ChairConstruction, ChairProcess, ChairFinal],
  },
  {
    name: 'Fence Flower Pot',
    description:
      'After seeing a similar flowerpot I had made, a friend commisioned me to design and print a version that would fit his fence. Though he lived thousands of miles away&comma; I was able to use the measurments provided to create a modular bracket that fit snuggly and allowed his plant friends to get enough sunlight, drain properly, and avoid cat-tastrophes &#128576;',
    thumbnail: FlowerPotThumb,
    images: [FlowerPotSketch, FlowerPotModel, FlowerPotPrinting, FlowerPotOnFence, FlowerPotPlant],
  },
  {
    name: 'Sketches',
    description: 'Periodically I like to catch up on making some art.',
    thumbnail: SketchesThumb,
    images: [SketchFringilla, SketchLeighton, SketchHelmetSciFi, SketchHelmet, SketchPotter],
  },
]

let currentProject = ref(projects[0])

function setProject(project) {
  currentProject.value = project
}
</script>

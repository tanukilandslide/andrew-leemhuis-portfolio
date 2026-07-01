<template>
  <div :class="'w-screen bg-' + store.backgroundColor">
    <h1>Welcome to test</h1>
    <p>Scroll Y: {{ isScrolling.y }}</p>
    <p>IsScrolling: {{ isScrolling.isScrolling }}</p>
    <div
      style="height: 90vh; overflow: auto"
      :class="background"
      class="bg-"
      ref="container"
      @scroll="jumpToFrame(isScrolling.y.value)"
    >
      <div class="sticky m-5 h-[200vh]">
        <div class="bg-white">
          <!-- <p v-for="i in 4" :key="i">Item {{ i }}</p> -->
          <div :class="`w-1/2 p-5 pointer-events-none ${boxCSS}`">
            <button
              class="m-3 p-3 bg-acquisitionfeewaivers rounded-md cursor-pointer pointer-events-auto"
              @click="isScrolling.y.value = 2500"
            >
              Click me!
            </button>
            <h1>Here's the box! {{ isScrolling.y }}</h1>
            <!-- <Vue3Lottie
              class="rounded-xl"
              loop="true"
              ref="zaikoIntro"
              :animationData="ZaikoIntro"
              speed=".5"
            /> -->
            <Vue3Lottie loop="true" ref="timeline" :animationData="Timeline" speed=".5" />
          </div>
        </div>
      </div>
    </div>

    <SlidingBox>
      <h1>Scroll position: {{ isScrolling.y }}</h1>
      <img :src="image" alt="" />
    </SlidingBox>
  </div>
</template>

<script setup>
import { useStyleStore } from '@/stores/styles'

import { useScroll } from '@vueuse/core'
import { ref, reactive, computed, useTemplateRef, onMounted, onUnmounted } from 'vue'

import SlidingBox from '@/components/SlidingBox.vue'

import { Vue3Lottie } from 'vue3-lottie'
import Timeline from './images/Timeline.json'

const store = useStyleStore()

const timeline = ref(null)
const container = ref(null)

let isScrolling = useScroll(container)

// Zaiko Animation

const jumpToFrame = (frame) => {
  // zaikoIntro.value.goToAndStop(frame, true)
  timeline.value.goToAndStop(frame, true)
}

store.setNavbarColor('loanprogresssimulator-navbar')
store.setBackgroundColor('summer')

let background = computed(() => {
  if (isScrolling.y.value <= 100) {
    return 'bg-summer'
  }

  if (isScrolling.y.value <= 200) {
    return 'bg-winter'
  }

  if (isScrolling.y.value > 200) {
    return 'bg-emerald-900'
  }
})

let image = computed(() => {
  if (isScrolling.y.value <= 100) {
    return import.meta.env.BASE_URL + 'images/01.jpg'
  }

  if (isScrolling.y.value <= 200) {
    return import.meta.env.BASE_URL + './images/02.jpg'
  }

  if (isScrolling.y.value > 200) {
    return import.meta.env.BASE_URL + './images/03.jpg'
  }
})

let boxCSS = computed(() => {
  if (isScrolling.y.value <= 300) {
    return 'fixed top-1/4 left-1/4 bg-winter mx-auto'
  }

  if (isScrolling.y.value > 300 && isScrolling.y.value < 400) {
    return `fixed top-1/4 left-1/4 bg-astrazeneca`
  }

  if (isScrolling.y.value >= 400) {
    return 'fixed bg-winter'
  }
})
</script>

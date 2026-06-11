<template>
  <h1>Welcome to test</h1>

  <img :src="image" alt="" />

  <div ref="container" style="height: 200px; overflow: auto" :class="background" class="bg-">
    <p v-for="i in 100" :key="i">Item {{ i }}</p>
  </div>
  <p>Scroll Y: {{ isScrolling.y }}</p>
  <p>IsScrolling: {{ isScrolling.isScrolling }}</p>
</template>

<script setup>
import { useStyleStore } from '@/stores/styles'

import { useScroll } from '@vueuse/core'
import { ref, reactive, computed } from 'vue'

const store = useStyleStore()

store.setNavbarColor('loanprogresssimulator-navbar')
store.setBackgroundColor('none')

const container = ref(null)
let isScrolling = reactive(useScroll(container))

let background = computed(() => {
  if (isScrolling.y <= 100) {
    return 'bg-summer'
  }

  if (isScrolling.y <= 200) {
    return 'bg-winter'
  }

  if (isScrolling.y > 200) {
    return 'bg-emerald-900'
  }
})

let image = computed(() => {
  if (isScrolling.y <= 100) {
    return import.meta.env.BASE_URL + 'images/01.jpg'
  }

  if (isScrolling.y <= 200) {
    return import.meta.env.BASE_URL + './images/02.jpg'
  }

  if (isScrolling.y > 200) {
    return import.meta.env.BASE_URL + './images/03.jpg'
  }
})
</script>

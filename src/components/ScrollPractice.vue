<template>
  <div ref="container" style="height: 200px; overflow: auto">
    <p v-for="i in 100" :key="i">Item {{ i }}</p>
  </div>
  <p>Scroll Y:</p>
  <p>IsScrolling: {{ isScrolling.isScrolling }}</p>
</template>

<script setup>
import { useScroll } from '@vueuse/core'
import { ref } from 'vue'

const container = ref(null)
const isScrolling = useScroll(container)
</script>

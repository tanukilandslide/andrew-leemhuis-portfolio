<template>
  <div :class="' bg-' + store.navbarColor">
    <NavBar class="px-3"></NavBar>

    <router-view class="px-3"></router-view>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import { useStyleStore } from '@/stores/styles'

const store = useStyleStore()
</script>

<template>
  <div>
    <NavBar></NavBar>

    <router-view></router-view>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import { useStyleStore } from '@/stores/styles'

const store = useStyleStore()
</script>

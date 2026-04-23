<template>
  <div class="h-screen">
    <NavBar class="px-3"></NavBar>

    <router-view class="px-3"></router-view>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

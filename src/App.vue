<template>
  <div>
    <NavBar class="sticky"></NavBar>

    <router-view></router-view>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

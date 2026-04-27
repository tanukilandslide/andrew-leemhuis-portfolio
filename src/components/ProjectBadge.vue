<template>
  <logo class="w-16 h-16"></logo>
  <h2>{{ projectName }}</h2>
</template>

<script setup>
defineProps({
  projectName: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: false,
  },
})
</script>

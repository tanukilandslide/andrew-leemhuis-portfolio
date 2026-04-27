<template>
  <div class="mb-5 h-[90vh]">
    <div class="sticky top-5">
      <box>
        <slot> </slot>
      </box>
    </div>
  </div>
</template>

<script setup>
import Box from './Box.vue'
</script>

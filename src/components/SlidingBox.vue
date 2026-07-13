<template>
  <div :class="props.slidingClass ? props.slidingClass : 'mb-5 h-[110vh]'">
    <div class="sticky top-5">
      <box :style="props.style">
        <slot> </slot>
      </box>
    </div>
  </div>
</template>

<script setup>
import Box from './Box.vue'

const props = defineProps({
  style: {
    type: String,
    required: false,
  },
  slidingClass: {
    type: String,
    required: false,
  },
})
</script>

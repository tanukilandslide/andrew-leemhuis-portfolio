<template>
  <div :class="props.style ? props.style : 'bg-white p-7 mb-5 rounded-lg'">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  style: {
    type: String,
    required: false,
  },
})
</script>

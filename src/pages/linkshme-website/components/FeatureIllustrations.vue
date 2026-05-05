<template>
  <h3 class="text-linkshmewebsite-accent">{{ props.title }}</h3>

  <div class="container mb-5">
    <img class="feature_images" :src="props.finalImage" alt="" />

    <div class="overlay">
      <div class="text">
        <img class="feature_images" :src="props.sketch" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  finalImage: {
    type: String,
    required: true,
  },
  sketch: {
    type: String,
    required: true,
  },
})

console.log(props.finalImage)
</script>

<style scoped>
.feature_images {
  width: 100%;
}

.container {
  position: relative;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
}

.container:hover .overlay {
  height: 100%;
}

.text {
  width: 101%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>

<template>
  <Box :style="' my-5'">
    <div class="homepage_image_bottom">
      <h2 class="links_header text-linkshmewebsite-accent">Final Homepage</h2>
      <img class="homepage_image_bottom" src="@/assets/links-hme/33_homepage_final.jpg" alt="" />
    </div>
    <div class="homepage_image_top bg-linkshmewebsite">
      <h2 class="text-linkshmewebsite-accent">Homepage First Draft</h2>
      <img class="rounded-md" src="@/assets/links-hme/32_homepage_first_draft.jpg" alt="" />
    </div>
  </Box>
</template>

<script setup>
import Box from '@/components/Box.vue'
</script>

<style scoped>
/* .box {
  background-color: white;
  border-radius: 8px;
  margin: 16px 0;
  padding: 0;
} */

/* .text_content {
  padding: 0.25rem 1rem;
} */

.homepage_image_bottom {
  max-width: 100%;
  z-index: 3;
  position: -webkit-sticky;
  position: sticky;
  top: 10rem;
  /* border-radius: 0 0 16px 16px; */
}

.homepage_image_top {
  max-width: 100%;
  position: relative;
  top: -93rem;
  z-index: 5;
}

@media (min-width: 640px) {
  .homepage_image_bottom {
    max-width: 100%;
    z-index: 3;
    position: -webkit-sticky;
    position: sticky;
    top: 10rem;
    /* border-radius: 0 0 16px 16px; */
  }

  .homepage_image_top {
    max-width: 100%;
    position: relative;
    top: -157rem;
    z-index: 5;
  }
}
</style>

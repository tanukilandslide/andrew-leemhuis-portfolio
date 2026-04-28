<template>
  <img
    src="../images/01_banner.jpg"
    alt="Patients, warehouse employees, and robot wave happily"
    class="w-full"
  />
  <div class="flex justify-between m-3">
    <RouterLink to="/linkshme-website">
      <Button class=" border-linkshmewebsite-navbar text-linkshmewebsite-navbar">
        <h2 class="mb-1">Project Overview</h2>
      </Button>
    </RouterLink>

    <RouterLink to="/linkshme-website/research">
      <Button class=" border-linkshmewebsite-navbar text-linkshmewebsite-navbar">
        <h2 class="mb-1">Research</h2>
      </Button>
    </RouterLink>

    <RouterLink to="/linkshme-website/concept-development">
      <Button class=" border-linkshmewebsite-navbar text-linkshmewebsite-navbar">
        <h2 class="mb-1">Concept Development</h2>
      </Button>
    </RouterLink>

    <RouterLink to="/linkshme-website/visual-style-development">
      <Button class=" border-linkshmewebsite-navbar text-linkshmewebsite-navbar">
        <h2 class="mb-1">Visual Style Development</h2>
      </Button>
    </RouterLink>
  </div>
</template>

<script setup>
import Button from '@/components/Button.vue';
</script>

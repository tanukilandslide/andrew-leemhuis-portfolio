<template>
  <div class="max-w-245 m-auto">
    <img
      src="../images/01_banner.jpg"
      alt="Patients, warehouse employees, and robot wave happily"
      class="w-full"
    />
    <div class="flex flex-col gap-3 md:flex-row justify-between m-3">
      <RouterLink
        to="/linkshme-website"
        :class="
          urlPath === '/linkshme-website'
            ? 'decoration-2 decoration-linkshmewebsite-navbar'
            : 'no-underline decoration-linkshmewebsite-navbar'
        "
      >
        <h2 class="mb-1 text-xl lg:text-2xl text-linkshmewebsite-navbar">Project Overview</h2>
      </RouterLink>

      <RouterLink
        to="/linkshme-website/research"
        :class="
          urlPath === '/linkshme-website/research'
            ? 'decoration-2 decoration-linkshmewebsite-navbar'
            : 'no-underline decoration-linkshmewebsite-navbar'
        "
      >
        <h2 class="mb-1 text-xl lg:text-2xl text-linkshmewebsite-navbar no-underline">Research</h2>
      </RouterLink>

      <RouterLink
        to="/linkshme-website/concept-development"
        :class="
          urlPath === '/linkshme-website/concept-development'
            ? 'decoration-2 decoration-linkshmewebsite-navbar'
            : 'no-underline decoration-linkshmewebsite-navbar'
        "
      >
        <h2 class="mb-1 text-xl lg:text-2xl text-linkshmewebsite-navbar no-underline">
          Concept Development
        </h2>
      </RouterLink>

      <RouterLink
        to="/linkshme-website/visual-style-development"
        :class="
          urlPath === '/linkshme-website/visual-style-development'
            ? 'decoration-2 decoration-linkshmewebsite-navbar'
            : 'no-underline decoration-linkshmewebsite-navbar'
        "
      >
        <h2 class="mb-1 text-xl lg:text-2xl text-linkshmewebsite-navbar">
          Visual Style Development
        </h2>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const urlPath = useRoute().fullPath
</script>

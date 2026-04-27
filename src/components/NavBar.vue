<template>
  <div :class="`bg-${store.navbarColor} py-3`">
    <div class="flex justify-between items-center max-w-245 mx-auto">
      <header>
        <RouterLink to="/" class="no-underline text-white font-bold">
          <h1>Andrew Leemhuis</h1>
          <h2>UX Development Portfolio</h2>
        </RouterLink>
      </header>

      <nav>
        <ul class="flex gap-5">
          <!-- <a href="index.html"><button><li class="nav-item">Projects</li></button></a> -->

          <a
            href="/public/andrew-leemhuis-resume.pdf"
            class="no-underline text-white border rounded-full px-4 py-2 my-auto"
          >
            <li class="">Resume</li>
          </a>

          <RouterLink
            to="/about"
            class="no-underline text-white border rounded-full px-4 py-2 my-auto"
          >
            <li class="">About</li>
          </RouterLink>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { useStyleStore } from '@/stores/styles'

const store = useStyleStore()
</script>

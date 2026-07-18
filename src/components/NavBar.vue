<template>
  <div :class="`bg-${store.navbarColor} p-3`" ref="navbar">
    <div class="flex justify-between items-center max-w-245 mx-auto">
      <header>
        <RouterLink to="/" class="no-underline text-white font-bold">
          <h1 class="m-0 text-2xl sm:text-4xl">Andrew Leemhuis</h1>
          <h2 class="m-0 text-xl sm:text-2xl">UX Development Portfolio</h2>
        </RouterLink>
      </header>

      <nav>
        <ul class="flex flex-col gap-2 sm:flex-row sm:gap-5">
          <!-- <a href="index.html"><button><li class="nav-item">Projects</li></button></a> -->

          <a
            href="/andrew-leemhuis-resume.pdf"
            :class="
              store.currentSeason === 'summer'
                ? 'no-underline text-white border border-white hover:bg-white hover:text-summer rounded-full px-4 py-1 sm:py-2 my-auto'
                : 'no-underline text-white border border-white hover:bg-white hover:text-winter rounded-full px-4 py-1 sm:py-2 my-auto'
            "
          >
            <li class="">Resume</li>
          </a>

          <RouterLink
            to="/about"
            :class="
              store.currentSeason === 'summer'
                ? 'no-underline text-white border border-white hover:bg-white hover:text-summer rounded-full px-4 py-1 sm:py-2 my-auto'
                : 'no-underline text-white border border-white hover:bg-white hover:text-winter rounded-full px-4 py-1 sm:py-2 my-auto'
            "
          >
            <li class="text-center">About</li>
          </RouterLink>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { useStyleStore } from '@/stores/styles'
import { useTemplateRef } from 'vue'
import { useElementSize } from '@vueuse/core'

const navbar = useTemplateRef('navbar')
const { height: navbarHeight } = useElementSize(navbar)

const store = useStyleStore()

store.setNavbarHeight(navbarHeight)
</script>

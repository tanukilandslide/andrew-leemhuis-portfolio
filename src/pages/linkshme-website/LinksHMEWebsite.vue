<template>
  <div :class="'w-screen h-[95vh] bg-' + store.backgroundColor">
    <banner />
    <main class="max-w-245 bg-linkshmewebsite h-fit">
      <Box :style="'flex flex-col-reverse lg:flex-row m-0 bg-white rounded-2xl'">
        <div class="w-full sm:max-w-2/3 p-5">
          <h1 class="h1-inline">Links HME Marketing Website</h1>

          <h2 class="h2-inline">(Links HME)</h2>

          <h2>
            Role: Lead UX Designer assigned with designing Links HME&apos;s customer facing website
          </h2>

          <p>
            A home medical equipment startup, Links HME, had been designing enterprise software to
            facilitate monthly medical supply delivery, billing, and inventory, but lacked a web
            presence. My first task as their lead UX Designer was to create a website that catered
            to their key audience.
          </p>
        </div>
        <img
          src="@/assets/links-hme/02_Robo_Calendar.jpg"
          alt="Robot showing a calendar to a warehouse employee"
          class="self-center w-full"
        />
      </Box>
    </main>

    <div class="m-auto w-fit flex gap-5 my-5">
      <RouterLink to="/acquisition-fee-waivers" class="no-underline">
        <h2
          class="border border-linkshmewebsite-navbar rounded-full my-auto hover:bg-linkshmewebsite-navbar no-underline text-linkshmewebsite-navbar hover:text-white px-4 pt-2 pb-3"
        >
          Previous project
        </h2>
      </RouterLink>

      <RouterLink to="/" class="no-underline">
        <h2
          class="border border-linkshmewebsite-navbar rounded-full my-auto hover:bg-linkshmewebsite-navbar no-underline text-linkshmewebsite-navbar hover:text-white px-4 pt-2 pb-3"
        >
          Home
        </h2>
      </RouterLink>

      <RouterLink to="/linkshme-website/research" class="no-underline">
        <h2
          class="border border-linkshmewebsite-navbar rounded-full my-auto hover:bg-linkshmewebsite-navbar no-underline text-linkshmewebsite-navbar hover:text-white px-4 pt-2 pb-3"
        >
          Research
        </h2>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import Banner from './components/Banner.vue'
import Box from '@/components/Box.vue'
import { useStyleStore } from '@/stores/styles'

const store = useStyleStore()

store.setNavbarColor('linkshmewebsite-navbar')
store.setBackgroundColor('linkshmewebsite')
</script>

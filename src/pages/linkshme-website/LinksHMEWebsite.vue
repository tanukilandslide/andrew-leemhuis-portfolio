<template>
  <div :class="'w-screen h-[95vh] bg-' + store.backgroundColor">
    <banner />
    <main class="max-w-245 bg-linkshmewebsite">
      <Box class="flex m-0">
        <div class="max-w-2/3">
        <h1 class="h1-inline">Links HME Marketing Website</h1>

        <h2 class="h2-inline">(Links HME)</h2>

        <h2>
          Role: Lead UX Designer assigned with designing Links HME&apos;s customer facing website
        </h2>

        <p>
          A home medical equipment startup, Links HME, had been designing enterprise software to
          facilitate monthly medical supply delivery, billing, and inventory, but lacked a web
          presence. My first task as their lead UX Designer was to create a website that catered to
          their key audience.
        </p>
      </div>
        <img
          src="./images/02_Robo_Calendar.jpg"
          alt="Robot showing a calendar to a warehouse employee"
          class="max-w-1/3 max-h-full"
        />
      </Box>
    </main>

<div class="m-auto w-fit flex gap-5 pb-5">
      <RouterLink to="/">
        <Button class=" border-linkshmewebsite-navbar text-linkshmewebsite-navbar">
          <h2 class="mb-1">Home</h2>
        </Button>
      </RouterLink>


      <RouterLink to="/linkshme-website/research">
        <Button class=" border-linkshmewebsite-navbar text-linkshmewebsite-navbar">
          <h2 class="mb-1">Research</h2>
        </Button>
      </RouterLink>
</div>
  </div>
</template>

<script setup>
import Banner from './components/Banner.vue'
import Box from '@/components/Box.vue'
import Button from '@/components/Button.vue'
import { useStyleStore } from '@/stores/styles'

const store = useStyleStore()

store.setNavbarColor('linkshmewebsite-navbar')
store.setBackgroundColor('linkshmewebsite')
</script>

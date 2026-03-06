<template>
  <main class="max-w-[980px]">
    <Box>
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
    </Box>
  </main>

  <Button>
    <RouterLink to="/">
      <h2>Home</h2>
    </RouterLink>
  </Button>
  <Button>
    <RouterLink to="/linkshme-website/research">
      <h2>Research</h2>
    </RouterLink>
  </Button>
</template>

<script setup>
import Box from '@/components/Box.vue'
import Button from '@/components/Button.vue'
</script>

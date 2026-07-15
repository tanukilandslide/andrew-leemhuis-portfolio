<template>
  <div :class="` bg-${store.backgroundColor}`">
    <main :class="`max-w-[980px] h-[95vh]`">
      <div class="mt-20 flex gap-20">
        <img
          src="./images/me.jpeg"
          alt="A portrait of Andrew sitting in a comfortable cafe environment."
          class="rounded-full w-1/4 self-center"
        />

        <div class="w-3/4">
          <h1>Hi there!</h1>

          <p>
            I'm a UX Developer with a background in design and experience in event ticketing,
            fintech, and healthcare currently living in the mountains of Japan. I love understanding
            things better, so I'm always working on adding to my broad skillset. I also make a
            decent coffee and can climb (some) walls.
          </p>

          <a
            href="https://www.linkedin.com/in/andrew-leemhuis/"
            target="blank"
            class="no-underline text-summer"
          >
            <h2>Find me on Linkedin</h2></a
          >

          <a
            href="https://github.com/tanukilandslide"
            target="blank"
            class="no-underline text-summer"
            ><h2>Check out my GitHub</h2></a
          >

          <a href="mailto:andrew.leemhuis@gmail.com" target="blank" class="no-underline text-summer"
            ><h2>Email me</h2></a
          >
        </div>
      </div>
      <!-- <ScrollPractice /> -->
    </main>
  </div>
</template>

<script setup>
import ScrollPractice from '@/components/ScrollPractice.vue'
import { useStyleStore } from '@/stores/styles'

const store = useStyleStore()

store.setNavbarColor('loanprogresssimulator-navbar')
store.setBackgroundColor('none')
</script>

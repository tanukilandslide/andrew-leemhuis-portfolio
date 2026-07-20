<template>
  <div :class="` bg-${store.backgroundColor}`">
    <main :class="`max-w-245 h-[95vh]`">
      <div class="flex flex-col justify-between h-[90vh]">
        <div class="mt-20 px-5 lg:px-0 flex flex-col md:flex-row gap-20">
          <img
            src="@/public/about/me.jpeg"
            alt="A portrait of Andrew sitting in a comfortable cafe environment."
            class="rounded-full w-3/4 md:w-1/4 self-center md:self-start"
          />

          <div class="w-full sm:w-3/4">
            <h1 class="text-loanprogresssimulator-navbar">Hi there!</h1>

            <p class="mb-10">
              I'm a UX Developer with a background in design and experience in event ticketing,
              fintech, and healthcare currently living in the mountains of Japan. I love
              understanding things better, so I'm always working on adding to my broad skillset. I
              also make a decent coffee and can climb (some) walls.
            </p>

            <div class="flex flex-col gap-5">
              <a
                href="https://www.linkedin.com/in/andrew-leemhuis/"
                target="blank"
                class="no-underline text-loanprogresssimulator-navbar flex gap-5"
              >
                <div class="w-10">
                  <LinkedIn class="h-full w-full pb-2" />
                </div>
                <h2>Find me on Linkedin</h2></a
              >

              <a
                href="https://github.com/tanukilandslide"
                target="blank"
                class="no-underline text-loanprogresssimulator-navbar flex gap-5"
              >
                <div class="w-10">
                  <GitHub class="h-full w-full pb-2" />
                </div>
                <h2>Check out my GitHub</h2></a
              >

              <a
                href="mailto:andrew.leemhuis@gmail.com"
                target="blank"
                class="no-underline text-loanprogresssimulator-navbar flex gap-5"
              >
                <div class="w-10">
                  <Email class="h-full w-full fill-astrazeneca pb-2" />
                </div>
                <h2>Email me</h2></a
              >
            </div>
          </div>
        </div>

        <div class="w-full flex flex-col gap-3">
          <p class="w-full text-center">This page was lovingly handmade with:</p>
          <div class="flex mx-auto h-10 gap-10">
            <VueLogo />
            <PiniaLogo />
            <FigmaLogo />
            <AfterEffectsLogo />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useStyleStore } from '@/stores/styles'
import LinkedIn from '@/public/about/linkedIn-logo.svg'
import GitHub from '@/public/about/github.svg'
import Email from '@/public/about/email-icon.svg'

import VueLogo from '@/public/about/vue-logo.svg'
import PiniaLogo from '@/public/about/pinia-logo.svg'
import FigmaLogo from '@/public/about/figma-logo.svg'
import AfterEffectsLogo from '@/public/about/adobe-after-effects-logo.svg'

const store = useStyleStore()

store.setNavbarColor('loanprogresssimulator-navbar')
store.setBackgroundColor('none')
</script>

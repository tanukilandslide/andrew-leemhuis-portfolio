<template>
  <div :class="'w-screen bg-winter overflow-clip'">
    <h1>Welcome to test</h1>
    <p>Scroll Y: {{ isScrolling.y }}</p>
    <p>IsScrolling: {{ isScrolling.isScrolling }}</p>
    <p>Mouse location: {{ x }} {{ y }}</p>

    <div class="w-screen overflow-hidden">
      <div class="h-[110vh] w-[120vw] absolute left-0 top-0 z-0">
        <!-- <div
        class="h-full w-2000 z-0 absolute bg-green-600 pointer-events-none"
        :style="{ left: `${x / 10}px`, top: `0px` }"
      ></div> -->
        <img
          src="./images/bay-test-background.png"
          alt=""
          class="h-full w-full -translate-x-70 z-0 absolute bg-green-600 pointer-events-none"
          :style="{ left: `${x / 5 - 100}px`, top: `0px` }"
        />
        <div class="absolute top-0 left-0 w-screen h-screen">
          <div
            class="flex max-w-245 mt-50 mx-auto flex-wrap content-center justify-center gap-20 md:h-[calc(100vh-97px)] sm:h-fit sm:pb-20 z-10"
          >
            <RouterLink class="no-underline" to="/zaiko-admin">
              <ProjectItem :project-name="'Zaiko Admin Dashboard'">
                <ZaikoLogo class="z-10" />
              </ProjectItem>
            </RouterLink>

            <RouterLink class="no-underline" to="/astrazeneca">
              <ProjectItem :project-name="'AstraZeneca Dashboard'">
                <AstraZenecaLogo class="z-10" />
              </ProjectItem>
            </RouterLink>

            <RouterLink class="no-underline" to="/loan-progress-simulator">
              <ProjectItem :project-name="'Loan Progress Simulator'">
                <LoanProgressSimulatorLogo class="z-10" />
              </ProjectItem>
            </RouterLink>

            <RouterLink class="no-underline" to="/acquisition-fee-waivers">
              <ProjectItem :project-name="'Acquisition Fee Waivers'">
                <AcqFeeWaiversLogo class="z-10" />
              </ProjectItem>
            </RouterLink>

            <RouterLink class="no-underline" to="/linkshme-website">
              <ProjectItem :project-name="'Links HME Website'">
                <LinksHMELogo class="z-10" />
              </ProjectItem>
            </RouterLink>

            <RouterLink class="no-underline" to="/personal-projects">
              <ProjectItem :project-name="'Personal Projects'">
                <PersonalProjectsLogo class="z-10" />
              </ProjectItem>
            </RouterLink>
          </div>
        </div>
        <img
          src="./images/bay-test.png"
          alt=""
          class="h-full absolute pointer-events-none z-20"
          :style="{ left: `${x * 1.25}px`, top: `0px` }"
        />
        <!-- <div
        class="h-full w-2000 absolute bg-blue-600 pointer-events-none z-20"
        :style="{ left: `${x * 1.25}px`, top: `0px` }"
      ></div> -->
      </div>
    </div>

    <div
      style="height: 90vh; overflow: auto"
      :class="background"
      class="bg-"
      ref="container"
      @scroll="jumpToFrame(isScrolling.y.value)"
    >
      <!-- <div class="sticky m-5 h-[200vh]">
        <div class="bg-white">
          <p v-for="i in 4" :key="i">Item {{ i }}</p>
          <div :class="`w-1/2 p-5 pointer-events-none ${boxCSS}`">
            <button
              class="m-3 p-3 bg-acquisitionfeewaivers rounded-md cursor-pointer pointer-events-auto"
              @click="isScrolling.y.value = 2500"
            >
              Click me!
            </button>
            <h1>Here's the box! {{ isScrolling.y }}</h1>
            <Vue3Lottie
              class="rounded-xl"
              loop="true"
              ref="zaikoIntro"
              :animationData="ZaikoIntro"
              speed=".5"
            />
            <Vue3Lottie loop="true" ref="timeline" :animationData="Timeline" speed=".5" />
          </div>
        </div>
      </div> -->
    </div>

    <SlidingBox>
      <h1>Scroll position: {{ isScrolling.y }}</h1>
      <img :src="image" alt="" />
    </SlidingBox>
  </div>
</template>

<script setup>
import ProjectItem from '@/components/ProjectItem.vue'

import ZaikoLogo from '../../../assets/icons/zaiko-logo.svg'
import AstraZenecaLogo from '../../../assets/icons/astrazeneca-logo.svg'
import LoanProgressSimulatorLogo from '../../../assets/icons/santander-logo.svg'
import AcqFeeWaiversLogo from '../../../assets/icons/acquisition-fee-waivers.svg'
import LinksHMELogo from '../../../assets/icons/links-hme-logo.svg'
import PersonalProjectsLogo from '../../../assets/icons/personal-projects.svg'
import { useStyleStore } from '@/stores/styles'

import { useScroll } from '@vueuse/core'
import { ref, reactive, computed, useTemplateRef, onMounted, onUnmounted, watch } from 'vue'

import SlidingBox from '@/components/SlidingBox.vue'

import { Vue3Lottie } from 'vue3-lottie'
import Timeline from './images/Timeline.json'

import { useMouse } from '@vueuse/core'

const { x, y, sourceType } = useMouse()

const store = useStyleStore()

const timeline = ref(null)
const container = ref(null)

let isScrolling = useScroll(container)

let frank = 500

// Zaiko Animation

const jumpToFrame = (frame) => {
  // zaikoIntro.value.goToAndStop(frame, true)
  timeline.value.goToAndStop(frame, true)
}

store.setNavbarColor('loanprogresssimulator-navbar')
store.setBackgroundColor('winter')

let background = computed(() => {
  if (isScrolling.y.value <= 100) {
    return 'bg-winter'
  }

  if (isScrolling.y.value <= 200) {
    return 'bg-winter'
  }

  if (isScrolling.y.value > 200) {
    return 'bg-emerald-900'
  }
})

let image = computed(() => {
  if (isScrolling.y.value <= 100) {
    return import.meta.env.BASE_URL + 'images/01.jpg'
  }

  if (isScrolling.y.value <= 200) {
    return import.meta.env.BASE_URL + './images/02.jpg'
  }

  if (isScrolling.y.value > 200) {
    return import.meta.env.BASE_URL + './images/03.jpg'
  }
})

let boxCSS = computed(() => {
  if (isScrolling.y.value <= 300) {
    return 'fixed top-1/4 left-1/4 bg-winter mx-auto'
  }

  if (isScrolling.y.value > 300 && isScrolling.y.value < 400) {
    return `fixed top-1/4 left-1/4 bg-astrazeneca`
  }

  if (isScrolling.y.value >= 400) {
    return 'fixed bg-winter'
  }
})
</script>

<style scoped>
.box-location {
  transform: translate(v-bind(frank) px, 200px);
}
</style>

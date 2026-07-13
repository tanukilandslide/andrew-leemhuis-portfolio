<template>
  <main class="bg-zaiko">
    <div class="w-screen flex flex-col sticky pt-5">
      <div
        :class="
          windowScroll.isScrolling.value || timelineScrolling.isScrolling.value
            ? ` h-full w-screen absolute left-0 top-0 z-0 bg-[url(/00_medical_pattern.png)] opacity-20 duration-1000 pointer-events-none transition-opacity z-0`
            : `h-full w-screen absolute left-0 top-0 z-0 bg-[url(/00_medical_pattern.png)] opacity-0 duration-1000 pointer-events-none transition-opacity z-0`
        "
      ></div>

      <!-- First Section -->

      <div class="z-1">
        <div
          class="h-screen flex sm:flex-col-reverse md:flex-col-reverse lg:flex-row"
          ref="firstSection"
        >
          <!-- Left Column -->
          <div class="w-1/3 p-5 h-fit sticky top-5">
            <h1 class="text-white">Zaiko's New Admin Page</h1>
            <h2 class="text-white">A New UI for Better Managing Events</h2>
            <p class="text-white">
              Zaiko had finally made the switch from a legacy event administration page to a more
              user friendly page. We were now getting data about how users actually used our
              services, so we decided to better match their common patterns.
            </p>
            <!-- <h2 class="text-white">First Section Height: {{ firstSectionHeight.height }}</h2>
            <h2 class="text-white">Section Height: {{ firstHeight + secondHeight + 97 }}</h2> -->
          </div>

          <!-- Right Column -->
          <div class="sticky top-5 h-fit flex flex-col">
            <video class="w-full" loop autoplay controls>
              <source src="/assets/zaiko-admin-assets/zaiko-sizzle-reel.mp4" type="video/mp4" />
            </video>
            <p class="text-white mx-auto">A sizzle real I made to advertise our services.</p>
          </div>
        </div>

        <!-- Second Section: Part one -->
        <div ref="secondSection">
          <div class="flex h-[200vh] sm:flex-col md:flex-col lg:flex-row">
            <!-- Left Column -->
            <div class="w-1/3">
              <div class="h-1/2">
                <div class="p-5 sticky top-5">
                  <h1 class="text-white">The Current Admin Page</h1>
                  <p class="text-white">
                    This was the starting point for our redsign project. White it was a large
                    improvement from the previous legacy software, it was still a first draft with
                    some problems that needed solving.
                  </p>
                  <!-- <h2 class="text-white">Problem: No obvious event state</h2>
            <h2 class="text-white">Section Height: {{ secondSectionHeight }}</h2> -->
                </div>
              </div>

              <div class="h-1/2">
                <div class="p-5 sticky top-5">
                  <h1 class="text-white">No obvious event state</h1>
                  <p class="text-white">
                    Is this event a draft? Is it today? Did it happen 2 years ago? Who knows!
                  </p>
                  <!-- <h2 class="text-white">Problem: No obvious event state</h2>
            <h2 class="text-white">Section Height: {{ secondSectionHeight }}</h2> -->
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div class="sticky top-5 h-fit p-5 flex flex-col">
              <img class="" src="/assets/zaiko-admin-assets/webpage-before.png" alt="" />
            </div>
          </div>

          <!-- Second Section: Part two -->

          <div class="flex h-screen sm:flex-col md:flex-col lg:flex-row">
            <!-- Left Column -->
            <div class="w-1/3">
              <div class="p-5 sticky top-5">
                <h1 class="text-white">Unintuitive navigation and hidden tools</h1>
                <p class="text-white">
                  Each tab had a different layout with no obvious title outside of the tab name to
                  indicate which page you were on. The features that were part of Zaiko's
                  competitive advantage were also hidden.
                </p>
                <!-- <h2 class="text-white">Problem: No obvious event state</h2>
            <h2 class="text-white">Section Height: {{ secondSectionHeight }}</h2> -->
              </div>
            </div>

            <!-- Right Column -->
            <div class="sticky top-5 h-fit p-5 flex flex-col">
              <img class="" src="/assets/zaiko-admin-assets/webpage-before.png" alt="" />
            </div>
          </div>

          <!-- Second Section: Part three -->

          <div class="flex h-screen sm:flex-col md:flex-col lg:flex-row">
            <!-- Left Column -->
            <div class="w-1/3">
              <div class="p-5 sticky top-5">
                <h1 class="text-white">Wasted space</h1>
                <p class="text-white">
                  Each page had a large amount of trapped space that was really only used on the
                  overview page, forcing the rest of the page to be more complex.
                </p>
                <!-- <h2 class="text-white">Problem: No obvious event state</h2>
            <h2 class="text-white">Section Height: {{ secondSectionHeight }}</h2> -->
              </div>
            </div>

            <!-- Right Column -->
            <div class="sticky top-5 h-fit p-5 flex flex-col">
              <img class="" src="/assets/zaiko-admin-assets/webpage-before.png" alt="" />
            </div>
          </div>
        </div>

        <div
          class="h-screen overflow-auto"
          ref="timelineSection"
          @scroll="jumpToFrame(timelineScrolling.y.value)"
        >
          <div class="h-[200vh]">
            <div class="sticky top-0">
              <h1 class="text-white sticky">UI Evolution</h1>
              <h2 class="text-white sticky top-5">
                {{ timelineScrolling.isScrolling }} Timeline Scroll:
                {{ timelineScrolling.y }} Window Scroll: {{ windowScroll.y }}
              </h2>
              <h2 class="text-white">
                Section 1: {{ firstHeight }} Section 2: {{ secondHeight }} Total:
                {{ firstHeight + secondHeight }}
              </h2>
              <Vue3Lottie
                class="content-center"
                loop="true"
                ref="timeline"
                :animationData="Timeline"
                :autoPlay="false"
                speed="1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Box from '@/components/Box.vue'
import SlidingBox from '@/components/SlidingBox.vue'
import { useStyleStore } from '@/stores/styles'
import { Vue3Lottie } from 'vue3-lottie'
import Timeline from './images/Timeline.json'
import { useScroll, useWindowScroll, useElementSize } from '@vueuse/core'
import { ref, computed, useTemplateRef } from 'vue'

const store = useStyleStore()

const timeline = ref(null)
const timelineSection = ref(null)
const container = ref(null)
const windowScroll = useWindowScroll()

let pageScrolling = useScroll(container)
let timelineScrolling = useScroll(timelineSection)

const firstSection = useTemplateRef('firstSection')
let firstSectionHeight = useElementSize(firstSection)
const { height: firstHeight } = useElementSize(firstSection)

const secondSection = useTemplateRef('secondSection')
let secondSectionHeight = useElementSize(secondSection)
const { height: secondHeight } = useElementSize(secondSection)

const firstSecondSectionHeight = firstHeight + secondHeight

console.log(secondSectionHeight.height)

let sectionHeights = 97 + firstSectionHeight.height.value + secondSectionHeight.height.value

const jumpToFrame = (frame) => {
  const frameStart = frame - firstSecondSectionHeight.value
  console.log(frameStart)
  timeline.value.goToAndStop(frameStart, true)
}

const playLottie = () => {
  let currentFrame = pageScrolling.y.value

  const intervalAnimation = setInterval(() => {
    jumpToFrame(currentFrame)
    currentFrame++
    pageScrolling.y.value = currentFrame
    if (currentFrame >= 650) {
      clearInterval(intervalAnimation)
    }
  }, 33)
}

store.setNavbarColor('zaiko')
store.setBackgroundColor('zaiko')
</script>

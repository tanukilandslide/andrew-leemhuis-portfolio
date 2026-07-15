<template>
  <!-- <div class="snap-y snap-mandatory h-200 overflow-scroll p-5 bg-zaiko">
    <div class="m-5 mx-auto w-100 h-100 bg-blue-500 snap-start"></div>
    <div class="m-5 mx-auto w-100 h-100 bg-amber-500 snap-start"></div>
    <div class="m-5 mx-auto w-100 h-100 bg-fuchsia-600 snap-start"></div>
    <div class="m-5 mx-auto w-100 h-100 bg-green-500 snap-start"></div>
    <div class="m-5 mx-auto w-100 h-100 bg-teal-500 snap-start"></div>
    <div class="m-5 mx-auto w-100 h-100 bg-red-500 snap-start"></div>
  </div> -->

  <main class="bg-zaiko">
    <div class="w-screen flex flex-col sticky pt-5">
      <div
        :class="
          windowScroll.isScrolling.value || timelineScrolling.isScrolling.value
            ? ` h-full w-screen absolute left-0 top-0 z-0 bg-[url(/00_medical_pattern.png)] opacity-20 duration-1000 pointer-events-none transition-opacity`
            : `h-full w-screen absolute left-0 top-0 z-0 bg-[url(/00_medical_pattern.png)] opacity-0 duration-1000 pointer-events-none transition-opacity `
        "
      ></div>

      <!-- First Section -->

      <div class="z-1 w-screen mb-20">
        <div class="sm:flex-col-reverse md:flex-col-reverse lg:flex-row" ref="firstSection">
          <!-- Left Column -->
          <div class="max-w-245 mx-auto mb-[10vh] p-5 h-fit sticky top-5">
            <Box :style="'bg-zaiko p-5 rounded-xl'">
              <video class="w-full" loop autoplay controls>
                <source src="/assets/zaiko-admin-assets/zaiko-sizzle-reel.mp4" type="video/mp4" />
              </video>
              <p class="text-white mx-auto text-center mb-10">
                A sizzle real I made to advertise our services.
              </p>
              <h1 class="text-white">Zaiko's New Admin Dashboard</h1>
              <h2 class="text-white">A New UI for Better Managing Events</h2>
              <p class="text-white">
                Zaiko had finally made the switch from a legacy event administration page to a more
                user friendly page. We were now getting data about how users actually used our
                services, so we decided to better match their common patterns.
              </p>
              <!-- <h2 class="text-white">First Section Height: {{ firstSectionHeight.height }}</h2>
            <h2 class="text-white">Section Height: {{ firstHeight + secondHeight + 97 }}</h2> -->
            </Box>
          </div>

          <!-- Right Column -->
        </div>

        <!-- Second Section: Part one -->

        <div ref="secondSection" class="h-fit flex flex-col gap-5 mb-20">
          <div class="flex h-[200vh] sm:flex-col md:flex-col lg:flex-row">
            <!-- Left Column -->
            <div class="w-2/3">
              <div class="h-1/2">
                <div class="p-5 sticky top-5 bg-zaiko">
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
                <div class="p-5 sticky top-5 bg-zaiko">
                  <h1 class="text-white">No obvious event state</h1>
                  <p class="text-white">
                    Is this event a draft? Is it today? Did it happen 2 years ago? Who knows! Since
                    every event goes through the same steps, we wanted to incorporate that into our
                    new design to better indicate what users could do at each step.
                  </p>
                  <!-- <h2 class="text-white">Problem: No obvious event state</h2>
            <h2 class="text-white">Section Height: {{ secondSectionHeight }}</h2> -->
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div class="sticky top-5 h-fit px-5 flex flex-col">
              <img class="rounded-md" src="/assets/zaiko-admin-assets/webpage-before.png" alt="" />
            </div>
          </div>

          <!-- Second Section: Part two -->

          <div class="flex h-fit sm:flex-col md:flex-col lg:flex-row">
            <!-- Left Column -->
            <div class="w-2/3">
              <div class="h-screen">
                <div class="p-5 sticky top-5 bg-zaiko">
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
            </div>

            <!-- Right Column -->
            <div class="sticky top-5 h-fit px-5 flex flex-col">
              <img class="rounded-md" src="/assets/zaiko-admin-assets/timeline-before.png" alt="" />
            </div>
          </div>

          <!-- Second Section: Part three -->

          <div class="flex h-fit sm:flex-col md:flex-col lg:flex-row">
            <!-- Left Column -->
            <div class="w-2/3">
              <div class="p-5 sticky top-5 bg-zaiko">
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
            <div class="sticky top-5 h-fit px-5 flex flex-col">
              <img class="rounded-md" src="/assets/zaiko-admin-assets/wasted-space.png" alt="" />
            </div>
          </div>
        </div>

        <!-- Section 3 -->

        <div class="h-[7000px] w-full flex mb-20">
          <div class="w-1/3">
            <div class="h-35/100">
              <div class="p-5 sticky top-5 rounded-md bg-zaiko">
                <h1 class="text-white sticky">Timeline</h1>
                <p class="text-white">
                  The timeline was a key area for indicating what state the event was in. It would
                  also help indicate what should be done by users at each step.
                </p>
              </div>
            </div>

            <div class="h-10/100">
              <div class="p-5 sticky top-5 rounded-md bg-zaiko">
                <h1 class="text-white">Feature Cards</h1>
                <p class="text-white">
                  We wanted to indicate what features could be used for a ticket, so my co-designer
                  created cards that had an inactive and active state. This gave users a clear
                  indicator of what their next step should be, and could be added on to as we
                  offered new features.
                </p>
              </div>
            </div>

            <div class="h-19/100">
              <div class="p-5 sticky top-5 rounded-md bg-zaiko">
                <h1 class="text-white">Event Navigation</h1>
                <p class="text-white">
                  Navigation was another issue that we saw users having. Our tabs weren't intuitive,
                  and I felt that mapping navigating within an event with our current navigation
                  would help make a better mental model for our customers.
                </p>
              </div>
            </div>

            <div class="h-6/100">
              <div class="p-5 sticky top-5 rounded-md bg-zaiko">
                <h1 class="text-white">Reducing Global Navigation</h1>
                <p class="text-white">
                  The global navigation took up too much space. Reducing it's size also created an
                  opportunity to add icons for quick recognition and navigation.
                </p>
              </div>
            </div>

            <div class="h-5/24">
              <div class="p-5 mx-5 sticky top-5 rounded-md bg-zaiko">
                <h1 class="text-white">Colors For Event States</h1>
                <p class="text-white">
                  Finally, I felt there was an opportunity to add colors to help indicate what state
                  our events were in, as well as connect event navigation to the pages on the right.
                </p>
              </div>
            </div>
          </div>

          <!-- Right Column -->

          <div class="sticky w-2/3 top-5 px-5 flex flex-col">
            <div class="sticky w-full top-5 rounded-2xl bg-linear-to-r from-[#903283] to-[#E63573]">
              <div class="h-[95vh] w-full rounded-2xl py-20 px-5 bg-linear-to-b to-zaiko to-50%">
                <Vue3Lottie
                  class="content-center"
                  loop="true"
                  ref="timeline"
                  :animationData="Timeline"
                  :autoPlay="true"
                  speed="1"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Section 4 -->

        <div class="flex h-fit sm:flex-col md:flex-col lg:flex-row">
          <!-- Left Column -->
          <div class="w-2/3">
            <div class="p-5 mx-5 sticky top-5 rounded-md bg-zaiko">
              <h1 class="text-white">Final State: Light Mode</h1>
              <p class="text-white">
                Analytics showed that the majority of users in Japan used light mode, so I focussed
                on making colors that would work in that context as well
              </p>
              <!-- <h2 class="text-white">Problem: No obvious event state</h2>
            <h2 class="text-white">Section Height: {{ secondSectionHeight }}</h2> -->
            </div>
          </div>

          <!-- Right Column -->

          <div class="bg-[#EEDEE4] w-full h-fit rounded-2xl overflow-clip">
            <div
              class="h-fit w-full bg-linear-to-r from-[#90328350] to-[#E6357350] flex-col items-center"
            >
              <div class="w-full h-fit py-20 px-10 bg-linear-to-b to-[#EEDEE4] to-50%">
                <Lightmode class="w-full mx-auto"></Lightmode>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="m-auto w-fit flex gap-5 py-5">
      <RouterLink to="/">
        <Button class="border-white">
          <h2 class="no-underline text-white mt-0 mb-1">Home</h2>
        </Button>
      </RouterLink>
      <RouterLink to="/astrazeneca">
        <Button class="border-white">
          <h2 class="no-underline text-white mt-0 mb-1">Next Project</h2>
        </Button>
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
import Box from '@/components/Box.vue'
import SlidingBox from '@/components/SlidingBox.vue'
import Button from '@/components/Button.vue'
import { useStyleStore } from '@/stores/styles'
import { Vue3Lottie } from 'vue3-lottie'
import Timeline from './images/Timeline.json'
import { useScroll, useWindowScroll, useElementSize } from '@vueuse/core'
import { ref, computed, useTemplateRef, watch } from 'vue'

import Lightmode from '../../../assets/zaiko-admin-assets/lightmode.svg'

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

let sectionHeights = 97 + firstSectionHeight.height.value + secondSectionHeight.height.value

let scrollPlayAnimation = computed(() => {
  return windowScroll.y.value - 6200
})

watch(windowScroll.y, () => {
  console.log(windowScroll.y.value - firstHeight.value - secondHeight.value)
  jumpToFrame((windowScroll.y.value - firstHeight.value - secondHeight.value) / 8)
})

const jumpToFrame = (frame) => {
  timeline.value.goToAndStop(frame, true)
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

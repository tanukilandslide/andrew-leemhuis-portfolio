<template>
  <main class="bg-zaiko">
    <div class="w-screen flex flex-col sticky sm:pt-5">
      <div
        :class="
          windowScroll.isScrolling.value || timelineScrolling.isScrolling.value
            ? ` h-full w-screen absolute left-0 top-0 z-0 bg-[url(/00_medical_pattern.png)] opacity-20 duration-500 pointer-events-none transition-opacity`
            : `h-full w-screen absolute left-0 top-0 z-0 bg-[url(/00_medical_pattern.png)] opacity-0 duration-500 pointer-events-none transition-opacity `
        "
      ></div>

      <!-- First Section -->

      <div class="z-1 w-screen max-w-245 mx-auto mb-20">
        <!-- Left Column -->
        <div class="max-w-245 mx-auto mb-[10vh] h-fit" ref="firstSection">
          <Box :style="'bg-zaiko  sm:rounded-xl overflow-hidden'">
            <video class="w-full" loop autoplay controls>
              <source src="/assets/zaiko-admin-assets/zaiko-sizzle-reel.mp4" type="video/mp4" />
            </video>
            <div class="px-5 pb-5">
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
            </div>
          </Box>
        </div>

        <!-- Second Section: Part one -->

        <div ref="secondSection" class="h-fit flex flex-col gap-5 mb-20">
          <div class="flex h-[200vh] flex-col-reverse sm:flex-row">
            <!-- Left Column -->
            <div class="sm:w-1/3 h-full">
              <div class="h-1/2">
                <div class="p-5 sticky sm:top-5 bg-zaiko original-page-text">
                  <h1 class="text-white">The Current Admin Page</h1>
                  <p class="text-white">
                    This was the starting point for our redsign project. White it was a large
                    improvement from the previous legacy software, it was still a first draft with
                    some problems that needed solving.
                  </p>
                </div>
              </div>

              <div class="h-1/2">
                <div class="p-5 sticky sm:top-5 bg-zaiko original-page-text">
                  <h1 class="text-white">No obvious event state</h1>
                  <p class="text-white">
                    Is this event a draft? Is it today? Did it happen 2 years ago? Who knows! Since
                    every event goes through the same steps, we wanted to incorporate that into our
                    new design to better indicate what users could do at each step.
                  </p>
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div
              class="sm:h-full w-full sticky top-0 sm:top-5 sm:px-5 flex flex-col"
              ref="originalPage"
            >
              <img
                class="rounded-md sm:sticky sm:top-5"
                src="/assets/zaiko-admin-assets/webpage-before.png"
                alt=""
              />
            </div>
          </div>

          <!-- Second Section: Part two -->

          <div class="flex h-fit flex-col-reverse sm:flex-row">
            <!-- Left Column -->
            <div class="sm:w-1/3">
              <div class="h-screen">
                <div class="p-5 sticky original-timeline-text bg-zaiko">
                  <h1 class="text-white">Unintuitive navigation and hidden tools</h1>
                  <p class="text-white">
                    Each tab had a different layout with no obvious title outside of the tab name to
                    indicate which page you were on. The features that were part of Zaiko's
                    competitive advantage were also hidden.
                  </p>
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div
              class="sm:h-full w-full sticky top-0 sm:top-5 sm:px-5 flex flex-col"
              ref="originalTimeline"
            >
              <img
                class="sticky top-5 rounded-md"
                src="/assets/zaiko-admin-assets/timeline-before.png"
                alt=""
              />
            </div>
          </div>

          <!-- Second Section: Part three -->

          <div class="flex h-fit flex-col-reverse sm:flex-row">
            <!-- Left Column -->
            <div class="sm:w-1/3 h-screen">
              <div class="p-5 sticky bg-zaiko original-page-text">
                <h1 class="text-white">Wasted space</h1>
                <p class="text-white">
                  Each page had a large amount of trapped space that was really only used on the
                  overview page, forcing the rest of the page to be more complex.
                </p>
              </div>
            </div>

            <!-- Right Column -->
            <div class="sm:h-full w-full sticky top-0 sm:top-5 sm:px-5 flex flex-col">
              <img class="rounded-md" src="/assets/zaiko-admin-assets/wasted-space.png" alt="" />
            </div>
          </div>
        </div>

        <!-- Section 3 -->

        <div class="h-1750 w-full flex flex-col-reverse justify-end sm:flex-row mb-20">
          <div class="sm:w-1/3 h-full">
            <div class="h-35/100">
              <div :class="'p-5 sticky sm:top-5 rounded-md bg-zaiko montage'">
                <h1 class="text-white sticky">Timeline</h1>
                <p class="text-white">
                  The timeline was a key area for indicating what state the event was in. It would
                  also help indicate what should be done by users at each step.
                </p>
              </div>
            </div>

            <div class="h-10/100">
              <div :class="'p-5 sticky sm:top-5 rounded-md bg-zaiko montage'">
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
              <div :class="'p-5 sticky sm:top-5 rounded-md bg-zaiko montage'">
                <h1 class="text-white">Event Navigation</h1>
                <p class="text-white">
                  Navigation was another issue that we saw users having. Our tabs weren't intuitive,
                  and I felt that mapping navigating within an event with our current navigation
                  would help make a better mental model for our customers.
                </p>
              </div>
            </div>

            <div class="h-6/100">
              <div :class="'p-5 sticky sm:top-5 rounded-md bg-zaiko montage'">
                <h1 class="text-white">Reducing Global Navigation</h1>
                <p class="text-white">
                  The global navigation took up too much space. Reducing it's size also created an
                  opportunity to add icons for quick recognition and navigation.
                </p>
              </div>
            </div>

            <div class="h-30/100">
              <div class="p-5 sticky top-83 sm:top-5 rounded-md bg-zaiko montage">
                <h1 class="text-white">Colors For Event States</h1>
                <p class="text-white">
                  Finally, I felt there was an opportunity to add colors to help indicate what state
                  our events were in, as well as connect event navigation to the pages on the right.
                </p>
              </div>
            </div>
          </div>

          <!-- Right Column -->

          <div class="sticky w-full top-0 sm:top-5 sm:px-5 flex flex-col" ref="montage">
            <div
              class="sticky top-0 sm:top-5 sm:rounded-2xl overflow-hidden bg-linear-to-r from-[#903283] to-[#E63573]"
            >
              <div class="py-10 px-5 bg-linear-to-b to-zaiko to-50%">
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

        <div class="flex w-full h-fit flex-col-reverse sm:flex-row">
          <!-- Left Column -->
          <div class="sm:w-1/3">
            <div class="p-5 sticky top-5 rounded-md bg-zaiko">
              <h1 class="text-white">Final State: Light Mode</h1>
              <p class="text-white">
                Analytics showed that the majority of users in Japan used light mode, so I focussed
                on making colors that would work in that context as well
              </p>
            </div>
          </div>

          <!-- Right Column -->

          <div class="w-full sm:px-5">
            <div class="bg-[#EEDEE4] w-full h-fit sm:rounded-2xl overflow-clip">
              <div
                class="h-fit w-full bg-linear-to-r from-[#90328350] to-[#E6357350] flex-col items-center"
              >
                <div class="w-full py-10 px-5 flex flex-col bg-linear-to-b to-[#EEDEE4] to-50%">
                  <Lightmode class="w-full mx-auto"></Lightmode>
                </div>
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
import Button from '@/components/Button.vue'
import { useStyleStore } from '@/stores/styles'
import { Vue3Lottie } from 'vue3-lottie'
import Timeline from './images/Timeline.json'
import { useScroll, useWindowScroll, useElementSize } from '@vueuse/core'
import { ref, useTemplateRef, watch } from 'vue'

import Lightmode from '../../../assets/zaiko-admin-assets/lightmode.svg'

const store = useStyleStore()

const timeline = ref(null)
const timelineSection = ref(null)

const windowScroll = useWindowScroll()

let timelineScrolling = useScroll(timelineSection)

const firstSection = useTemplateRef('firstSection')

const { height: firstHeight } = useElementSize(firstSection)

const secondSection = useTemplateRef('secondSection')

const { height: secondHeight } = useElementSize(secondSection)

const montage = useTemplateRef('montage')

const { height: montageHeight } = useElementSize(montage)

const originalPage = useTemplateRef('originalPage')

const { height: originalPageHeight } = useElementSize(originalPage)

const originalTimeline = useTemplateRef('originalTimeline')

const { height: originalTimelineHeight } = useElementSize(originalTimeline)

watch(windowScroll.y, () => {
  console.log(windowScroll.y.value - firstHeight.value - secondHeight.value)
  console.log(Math.floor(montageHeight.value))
  jumpToFrame((windowScroll.y.value - firstHeight.value - secondHeight.value) / 8)
})

const jumpToFrame = (frame) => {
  timeline.value.goToAndStop(frame, true)
}

store.setNavbarColor('zaiko')
store.setBackgroundColor('zaiko')
</script>

<style scoped>
.montage {
  top: v-bind(montageHeight + 'px');
}

.original-page-text {
  top: v-bind(originalPageHeight + 'px');
}

.original-timeline-text {
  top: v-bind(originalTimelineHeight + 'px');
}

@media (min-width: 640px) {
  .montage {
    top: calc(var(--spacing) * 5);
  }

  .original-page-text {
    top: calc(var(--spacing) * 5);
  }

  .original-timeline-text {
    top: calc(var(--spacing) * 5);
  }
}
</style>

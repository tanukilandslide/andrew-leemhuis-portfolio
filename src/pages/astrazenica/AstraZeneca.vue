<template>
  <main class="bg-astrazeneca">
    <div class="w-screen flex flex-col sticky pt-5">
      <div
        :class="
          windowScroll.isScrolling.value
            ? ` h-full w-screen absolute left-0 top-0 z-0 bg-[url(/00_medical_pattern.png)] opacity-20 duration-1000 pointer-events-none transition-opacity`
            : `h-full w-screen absolute left-0 top-0 z-0 bg-[url(/00_medical_pattern.png)] opacity-0 duration-1000 pointer-events-none transition-opacity `
        "
      ></div>

      <div class="z-1 max-w-245 mx-auto">
        <Box>
          <div class="w-full sm:w-3/5 mx-auto mb-5">
            <Vue3Lottie class="rounded-xl" :animationData="MRDashboard" speed="1" />
          </div>
          <h1 class="h1-inline">AstraZeneca's Tool Problem</h1>

          <h2 class="h2-inline">(Astrazeneca K.K.)</h2>

          <h2>
            Role: Contract UX designer tasked with researching&comma; conceptualizing&comma; and
            prototyping an improved medical representative tool.
          </h2>
        </Box>

        <SlidingBox>
          <h2 class="centered-text-box sm:px-20 text-center m-0">
            The medical representatives already had 16 tools, we didn&apos;t want to design a 17th.
          </h2>
        </SlidingBox>

        <Box>
          <img
            src="@/assets/astrazeneca/02-workshop-planning.jpg"
            alt=""
            class="w-full m-auto mb-5"
          />

          <h2>Process</h2>

          <p>
            The other UX designer and I dove into the project on the kickoff workshop day, lacking
            the context of prior research. This limited our influence on the timeline and project
            requirements. Due to a previous attempt at improving medical representative tools that
            suffered from a lack of research, management insisted on 50 user interviews for robust
            insights. After negotiations, we settled on 20 interviews led by my manager and two
            ex-medical representatives. Unfortunately, our proposal for a concurrent survey to
            gather quantitative data was rejected by upper management.
          </p>
        </Box>

        <SlidingBox>
          <h2>Medical Representative Tasks</h2>

          <p>What we found was that medical representatives have four distinct times of day:</p>

          <ol>
            <li>
              Morning office time - time for checking their travel schedule, replying to emails, and
              confirming that day&apos;s meetings
            </li>
            <li>
              Parking lot time - time for reviewing what was talked about at previous meetings and
              making sure all powerpoint slides are in order
            </li>
            <li>
              Meeting with healthcare providers - presenting new and existing drug options and
              working with doctors to meet the current needs of their cancer patients
            </li>
            <li>
              Evening office time - time spent entering data about the days meetings. Some is for
              personal use to improve their relationship with healthcare providers, other is largely
              for internal, strategic AstraZeneca use
            </li>
          </ol>
        </SlidingBox>

        <Box>
          <h1 class="mb-5">Primary Persona: High-Tech Hiroyuki</h1>
          <HiroyukiPersona class="w-full" />
        </Box>

        <Box>
          <h1 class="mb-5">Secondary Persona: Reliable Tool Reiko</h1>
          <ReikoPersona class="w-full" />
        </Box>

        <Box class="flex flex-col gap-5">
          <h2 class="m-0">First Design Thinking Workshop</h2>

          <p>
            A workshop was scheduled in the Osaka office to inform stakeholders about the research
            we had gathered and use that for going through a series of design thinking exercises
            that would determine a direction.
          </p>

          <img
            src="@/assets/astrazeneca/05-tower-of-the-sun.jpeg"
            alt=""
            class="w-full sm:w-2/5 m-auto"
          />

          <p class="text-center">Off to Osaka!</p>

          <img
            src="@/assets/astrazeneca/06-round-robin.jpeg"
            alt=""
            class="w-full sm:w-4/5 m-auto"
          />

          <h2 class="mt-5">5 Magazine Cover Concepts</h2>
          <div class="flex flex-col lg:flex-row gap-3 justify-between h-full lg:h-full">
            <div class="">
              <img
                src="@/assets/astrazeneca/07-game-changing-innovation.jpg"
                alt=""
                class="h-full w-auto"
              />
            </div>
            <div class="">
              <img src="@/assets/astrazeneca/08-memorever.jpg" alt="" class="h-full w-auto" />
            </div>
            <div class="">
              <img
                src="@/assets/astrazeneca/09-avengers-research-program.jpg"
                alt=""
                class="h-full w-auto"
              />
            </div>
            <div class="">
              <img
                src="@/assets/astrazeneca/10-suggestions-for-mrs.jpg"
                alt=""
                class="h-full w-auto"
              />
            </div>
            <div class="">
              <img src="@/assets/astrazeneca/11-champion-system.jpg" alt="" class="h-full w-auto" />
            </div>
          </div>
        </Box>

        <SlidingBox>
          <h2>A Nautical Themed Retro to Keep Things Fun</h2>
          <img src="@/assets/astrazeneca/12-retro-board.jpg" alt="" class="w-full m-auto" />
        </SlidingBox>

        <SlidingBox>
          <h2>Now It's Time To Start Storyboarding, Right?</h2>
          <img src="@/assets/astrazeneca/13-mr-storyboard.jpg" alt="" class="w-full m-auto" />
        </SlidingBox>

        <Box>
          <h2>So What Did We Make?</h2>
          <img
            src="@/assets/astrazeneca/14-az-clickable-prototype.gif"
            alt=""
            class="w-full m-auto"
          />
          <h2>Healthcare Provider Dashboard</h2>
          <img src="@/assets/astrazeneca/15-dashboard-landing page-description.svg" alt="" />
          <h2>Expanded Widget</h2>
          <img src="@/assets/astrazeneca/16-widget-detail.svg" alt="" />
          <h2>Data Input Page</h2>
          <img src="@/assets/astrazeneca/17-data-input.svg" alt="" />
        </Box>

        <Box>
          <h2>Conclusion</h2>
          <p>
            Our final design was well received. As our contract was coming to a close, I made sure
            my design was accessible to the next contract designers who would be using it for
            usability testing and collaborating with developers to deliver it in the next 6 months.
          </p>
        </Box>

        <div class="m-auto w-fit flex gap-5 pb-5">
          <RouterLink to="/zaiko-admin" class="no-underline">
            <h2
              class="border border-white rounded-full my-auto hover:bg-white no-underline text-white hover:text-astrazeneca px-4 pt-2 pb-3"
            >
              Previous Project
            </h2>
          </RouterLink>
          <RouterLink to="/" class="no-underline">
            <h2
              class="border border-white rounded-full my-auto hover:bg-white no-underline text-white hover:text-astrazeneca px-4 pt-2 pb-3"
            >
              Home
            </h2>
          </RouterLink>
          <RouterLink to="/loan-progress-simulator" class="no-underline">
            <h2
              class="border border-white rounded-full my-auto hover:bg-white no-underline text-white hover:text-astrazeneca px-4 pt-2 pb-3"
            >
              Next Project
            </h2>
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Box from '@/components/Box.vue'
import SlidingBox from '@/components/SlidingBox.vue'

import { Vue3Lottie } from 'vue3-lottie'
import MRDashboard from '@/assets/astrazeneca/01-mr-dashboard-animation.json'
import HiroyukiPersona from '@/assets/astrazeneca/03-hiroyuki.svg'
import ReikoPersona from '@/assets/astrazeneca/04-reiko.svg'
import { useStyleStore } from '@/stores/styles'
import { useWindowScroll } from '@vueuse/core'

const store = useStyleStore()

const windowScroll = useWindowScroll()

store.setNavbarColor('astrazeneca')
store.setBackgroundColor('astrazeneca')
</script>

<!-- <script
  src="https://unpkg.com/@lottiefiles/dotlottie-wc@latest/dist/dotlottie-wc.js"
  type="module"
></script> -->

<template>
  <div
    :class="`w-screen h-screen overflow-auto  bg-${store.backgroundColor}`"
    ref="container"
    @scroll="jumpToFrame(isScrolling.y.value)"
  >
    <main class="w-screen sticky pt-5">
      <div
        :class="
          isScrolling.isScrolling.value
            ? ` h-full w-screen absolute left-0 top-0 bg-[url(/00_medical_pattern.png)] opacity-100 duration-1000 transition-opacity z-0`
            : `h-full w-screen absolute left-0 top-0 bg-[url(/00_medical_pattern.png)] opacity-0 duration-1000 transition-opacity z-0`
        "
      ></div>
      <div class="h-[200vh] mb-20 flex">
        <!-- <p v-for="i in 4" :key="i">Item {{ i }}</p> -->
        <!-- <div class="sticky w-1/2 p-5 pointer-events-none">
        <button
          class="m-3 p-3 bg-acquisitionfeewaivers rounded-md cursor-pointer pointer-events-auto"
          @click="totalDurationCalculated()"
        >
          Click me!
        </button>
        <h1>Here's the box! {{ isScrolling.y }}</h1>
        <h1>Total duration is {{ totalDuration }}</h1>
      </div> -->
        <!-- <Vue3Lottie
              class="rounded-xl"
              loop="true"
              ref="zaikoIntro"
              :animationData="ZaikoIntro"
              speed=".5"
            /> -->

        <div class="h-fill w-1/3 bg-cyan-800">
          <div class="h-1/3 m-5 bg-amber-600">
            <div class="sticky top-0 bg-amber-600">
              <h1>First checkpoint</h1>
              <ul>
                <li>• Info about the first part of the project</li>
                <li>• Info about the first part of the project</li>
                <li>• Info about the first part of the project</li>
              </ul>
            </div>
          </div>

          <div class="h-1/3 m-5 bg-amber-600">
            <div class="sticky top-0 bg-amber-600">
              <h1>Second checkpoint</h1>
              <ul>
                <li>• Info about the second part of the project</li>
                <li>• Info about the second part of the project</li>
                <li>• Info about the second part of the project</li>
              </ul>
            </div>
          </div>

          <div class="h-1/3 m-5 bg-amber-600">
            <div class="sticky top-0 bg-amber-600">
              <h1>Third checkpoint</h1>
              <ul>
                <li>• Info about the third part of the project</li>
                <li>• Info about the third part of the project</li>
                <li>• Info about the third part of the project</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="px-30 h-min w-2/3 top-5 sticky bg-white">
          <div class="flex justify-between">
            <div class="p-3 bg-blue-400" @click="returnToLastSection()"><p>Last section</p></div>
            <h2>{{ isScrolling.y }} / {{ backgroundHeight }}</h2>
            <div class="flex">
              <div class="p-3 bg-green-600" @click="playLottie()"><p>Play</p></div>
              <div class="p-3 bg-yellow-400" @click="pauseLottie()"><p>Pause</p></div>
              <div class="p-3 bg-red-400" @click="jumpToFrame(0)"><p>Return</p></div>
            </div>
            <h2>{{ currentSection }}</h2>
            <div class="p-3 bg-blue-400" @click="playUntilNextSection()"><p>Next section</p></div>
          </div>

          <Vue3Lottie
            class="content-center"
            loop="true"
            ref="timeline"
            :animationData="Timeline"
            speed="1"
          />
        </div>
      </div>

      <!-- <h1 class="sticky">Sliding box</h1>
      <h2>{{ isScrolling.y }}</h2>
      <Vue3Lottie :loop="true" :animationData="Timeline" :speed="0.5" @click="consoleLog()" />
      <h2>{{ isScrolling.y }}</h2> -->

      <SlidingBox>
        <h2>
          Our product manager had noticed through watching people set up events that there were 4
          major sections to every event flow: Project creation Managing ticket sales Event is live
          Post event
        </h2>
      </SlidingBox>
      <SlidingBox>
        <h1>Zaiko's New Groove</h1>
        <Vue3Lottie class="rounded-xl" loop="false" :animationData="ZaikoIntro" speed="1" />
        <p>
          Zaiko had found that their admin section didn't neatly map with how users actually managed
          events. I was tasked with redesigning the UI with help from our other UX designer and a
          product manager.
        </p>
      </SlidingBox>

      <!--<Box>
        <h2>The workshop</h2>
        <p>
          We wanted to align our teams and get feedback from both the English speaking product side
          and Japanese speaking business side.
        </p>
        <p>
          We ran the workshop over 3 hours. However, at the end, the business side had felt a little
          bit rushed and lost in the process, soooooo:
        </p>

        <p>We ran the some of the activities again with just the business team.</p>

        <p>
          Finally, we translated the concepts and had a final meeting where we aligned on what was
          important for the new admin site to achieve.
        </p>
      </Box>

      <Box>
        <h2>Key Takeaways from the Workshop</h2>

        <h3>Timeline</h3>
        <p>We should have a clear indicator of where users are in the event process</p>

        <h3>Cards</h3>
        <p>
          Our dashboard should be focused specifically on the event type. Therefore, we made cards
          that could serve a single purpose on the page. These could be added or removed depending
          on the features the user selected.
        </p>

        <h3>Navigation</h3>
        <p>
          The navigation should also change depending on what features were selected. Reducing the
          amount of space that navigation takes up would both increase the legibility of the desktop
          page, but also make the mobile version more functional.
        </p>
      </Box>

      <SlidingBox>
        <h2>Difficulties</h2>
        <p>
          Through multiple design reviews we weren’t fulfilling what the Product Manager was hoping
          for.
        </p>

        <p>
          I attempted to set up meetings to help better align with the product manager what was
          required.
        </p>

        <p>
          In the end, I spent a weekend creating lots of iterations until I created something that I
          was happy with presenting.
        </p>
      </SlidingBox>

      <Box>
        <h2>P~R~O~T~O~T~Y~P~E~S</h2>
      </Box>

      <Box>
        <h2>Quick Usability Test</h2>
        <p>
          I wanted to do a sanity check to make sure my prototypes were effective so I tried them
          with two users
        </p>
      </Box>

      <Box>
        <h2>Enter Developers</h2>
        <p>
          I began talking to developers to make sure they understood the goals of the project. They
          also helped by bringing up areas that my designs might fail.
        </p>
      </Box>

      <Box>
        <h2>Final Designs</h2>
      </Box>

      <Box>
        <h2>What would I do differently next time?</h2>
        <ul>
          <li>Insist on stated, realistic deadlines</li>
          <li>Trust myself to design quality UI’s with less comprehensive research</li>
          <li>Define expectations about how hands on the Product Manager wanted to be</li>
          <li>Become more comfortable in speaking Japanese</li>
        </ul>
      </Box>

      <div class="m-auto w-fit flex gap-5 pb-5">
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
      </div> -->
    </main>
  </div>
</template>

<script setup>
import Box from '@/components/Box.vue'
import SlidingBox from '@/components/SlidingBox.vue'
import { useStyleStore } from '@/stores/styles'
import { Vue3Lottie } from 'vue3-lottie'
import Timeline from './images/Timeline.json'
import { useScroll } from '@vueuse/core'
import { ref, computed } from 'vue'

const store = useStyleStore()

const timeline = ref(null)
const container = ref(null)

let isScrolling = useScroll(container)

const sectionAnchors = [0, 100, 200, 300, 400]

// System needs to know which section it is in
// if Y < 500, section === 0
// make a computed variable that keeps track of the current section
// When next button is clicked, a function will check what section it is currently in
// The animation will play until section changes
// when the Y coordinate equals the next anchor, it will stop

const jumpToFrame = (frame) => {
  timeline.value.goToAndStop(frame, true)
}

// const playUntilNextSection = () => {
//   const current = currentSection
//   while (isScrolling.y != sectionAnchors[currentSection.value + 1]) {
//     setInterval(jumpToFrame(isScrolling.y + 1), 1000)
//   }

//   timeline.value.pause()
// }

function playUntilNextSection() {
  let currentFrame = isScrolling.y.value

  const gotoFrame = sectionAnchors[currentSection.value + 1]

  const intervalAnimation = setInterval(() => {
    jumpToFrame(currentFrame)
    currentFrame++
    isScrolling.y.value = currentFrame
    if (currentFrame >= gotoFrame) {
      clearInterval(intervalAnimation)
    }
  }, 10)
}

function returnToLastSection() {
  let currentFrame = isScrolling.y.value - 1

  const gotoFrame = sectionAnchors[currentSection.value]

  const intervalAnimation = setInterval(() => {
    jumpToFrame(currentFrame)
    currentFrame--
    isScrolling.y.value = currentFrame
    if (currentFrame < gotoFrame) {
      clearInterval(intervalAnimation)
    }
  }, 10)
}

const playLottie = () => {
  let currentFrame = isScrolling.y.value

  const intervalAnimation = setInterval(() => {
    jumpToFrame(currentFrame)
    currentFrame++
    isScrolling.y.value = currentFrame
    if (currentFrame >= 650) {
      clearInterval(intervalAnimation)
    }
  }, 33)
}

const pauseLottie = () => {
  timeline.value.pause()
  console.log(document.body.scrollHeight)
}

let currentSection = computed(() => {
  if (isScrolling.y.value < sectionAnchors[1]) {
    return 0
  } else if (isScrolling.y.value < sectionAnchors[2]) {
    return 1
  } else if (isScrolling.y.value < sectionAnchors[3]) {
    return 3
  } else {
    return 4
  }
})

store.setNavbarColor('summer')
store.setBackgroundColor('summer')
</script>

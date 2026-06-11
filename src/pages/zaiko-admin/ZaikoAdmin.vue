<template>
  <div :class="`w-screen bg-${store.backgroundColor}`" ref="container">
    <main class="max-w-245 pt-5">
      <Box>
        <h1>Zaiko's New Groove</h1>
        <Vue3Lottie class="rounded-xl" loop="false" :animationData="ZaikoIntro" speed="1" />
        <p>
          Zaiko had found that their admin section didn't neatly map with how users actually managed
          events. I was tasked with redesigning the UI with help from our other UX designer and a
          product manager.
        </p>
      </Box>
      <SlidingBox>
        <h2>
          Our product manager had noticed through watching people set up events that there were 4
          major sections to every event flow: Project creation Managing ticket sales Event is live
          Post event
        </h2>
      </SlidingBox>
      <Box>
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
      </div>
    </main>
  </div>
</template>

<script setup>
import { useStyleStore } from '@/stores/styles'
import Box from '@/components/Box.vue'
import Button from '@/components/Button.vue'
import SlidingBox from '@/components/SlidingBox.vue'
import { Vue3Lottie } from 'vue3-lottie'
import ZaikoIntro from './images/01-zaiko-intro.json'

const store = useStyleStore()

store.setNavbarColor('summer')
store.setBackgroundColor('summer')
</script>

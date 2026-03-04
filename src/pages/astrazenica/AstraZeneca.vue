<template>
  <main class="max-w-[980px]">
    <h1 class="text-red">AstraZeneca</h1>

    <Box>
      <div class="w-3/5">
        <Vue3Lottie :animationData="MRDashboard" speed="1" />
      </div>
      <h1 class="h1-inline">AstraZeneca's Tool Problem</h1>

      <h2 class="h2-inline">(Astrazeneca K.K.)</h2>

      <p>This is a paragraph</p>

      <h2>
        Role: Contract UX designer tasked with researching&comma; conceptualizing&comma; and
        prototyping an improved medical representative tool.
      </h2>
    </Box>

    <Box>
      <h2 class="centered-text-box">
        The medical representatives already had 16 tools, we didn&apos;t want to design a 17th.
      </h2>
    </Box>

    <Box>
      <img src="./images/02-workshop-planning.jpg" alt="" class="w-4/5" />

      <h2>Process</h2>

      <p>
        The other UX designer and I dove into the project on the kickoff workshop day, lacking the
        context of prior research. This limited our influence on the timeline and project
        requirements. Due to a previous attempt at improving medical representative tools that
        suffered from a lack of research, management insisted on 50 user interviews for robust
        insights. After negotiations, we settled on 20 interviews led by my manager and two
        ex-medical representatives. Unfortunately, our proposal for a concurrent survey to gather
        quantitative data was rejected by upper management.
      </p>
    </Box>

    <Box>
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
          Meeting with healthcare providers - presenting new and existing drug options and working
          with doctors to meet the current needs of their cancer patients
        </li>
        <li>
          Evening office time - time spent entering data about the days meetings. Some is for
          personal use to improve their relationship with healthcare providers, other is largely for
          internal, strategic AstraZeneca use
        </li>
      </ol>
    </Box>

    <Box>
      <h1>Primary Persona: High-Tech Hiroyuki</h1>
      <img src="./images/03-hiroyuki.svg" alt="" class="w-4/5" />
    </Box>

    <Box>
      <h1>Secondary Persona: Reliable Tool Reiko</h1>
      <img src="./images/04-reiko.svg" alt="" class="w-4/5" />
    </Box>

    <Box>
      <h2>First Design Thinking Workshop</h2>

      <p>
        A workshop was scheduled in the Osaka office to inform stakeholders about the research we
        had gathered and use that for going through a series of design thinking exercises that would
        determine a direction.
      </p>

      <img src="./images/05-tower-of-the-sun.jpeg" alt="" class="w-2/5" />

      <p>Off to Osaka!</p>
      <img src="./images/06-round-robin.jpeg" alt="" class="w-4/5" />

      <h2>5 Concepts to Rule Them All, Or Just Frankenstein Together</h2>
      <div class="flex">
        <img src="./images/07-game-changing-innovation.jpg" alt="" class="w-4/5" />
        <img src="./images/08-memorever.jpg" alt="" class="w-4/5" />
        <img src="./images/09-avengers-research-program.jpg" alt="" class="w-4/5" />
        <img src="./images/10-suggestions-for-mrs.jpg" alt="" class="w-4/5" />
        <img src="./images/11-champion-system.jpg" alt="" class="w-4/5" />
      </div>
    </Box>

    <Box>
      <h2>A Nautical Themed Retro to Keep Things Fun</h2>
      <img src="./images/12-retro-board.jpg" alt="" class="w-4/5" />
    </Box>

    <Box>
      <h2>Now It's Time To Start Storyboarding, Right?</h2>
      <img src="./images/13-mr-storyboard.jpg" alt="" class="w-4/5" />
    </Box>

    <Box>
      <h2>So What Did We Make?</h2>
      <img src="./images/14-az-clickable-prototype.gif" alt="" class="w-4/5" />
      <h2>Healthcare Provider Dashboard</h2>
      <img src="./images/15-dashboard-landing page-description.svg" alt="" />
      <h2>Expanded Widget</h2>
      <img src="./images/16-widget-detail.svg" alt="" />
      <h2>Data Input Page</h2>
      <img src="./images/17-data-input.svg" alt="" />
    </Box>

    <Box>
      <h2>Conclusion</h2>
      <p>
        Our final design was well received. As our contract was coming to a close, I made sure my
        design was accessible to the next contract designers who would be using it for usability
        testing and collaborating with developers to deliver it in the next 6 months.
      </p>
    </Box>
    <Button>
      <RouterLink to="/">
        <h2>Home</h2>
      </RouterLink>
    </Button>
    <Button>
      <RouterLink to="/">
        <h2>Next Project</h2>
      </RouterLink>
    </Button>
  </main>
</template>

<script setup>
import Box from '@/components/Box.vue'
import Button from '@/components/Button.vue'
import { Vue3Lottie } from 'vue3-lottie'
import MRDashboard from './images/01-mr-dashboard-animation.json'
</script>

<!-- <script
  src="https://unpkg.com/@lottiefiles/dotlottie-wc@latest/dist/dotlottie-wc.js"
  type="module"
></script> -->

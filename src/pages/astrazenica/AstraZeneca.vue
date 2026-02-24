<template>
  <main>
    <h1 class="text-red">AstraZeneca</h1>

    <Box>
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
    </Box>

    <Box>
      <h1>Secondary Persona: Reliable Tool Reiko</h1>
    </Box>

    <Box>
      <h2>First Design Thinking Workshop</h2>

      <p>
        A workshop was scheduled in the Osaka office to inform stakeholders about the research we
        had gathered and use that for going through a series of design thinking exercises that would
        determine a direction.
      </p>

      <p>Off to Osaka!</p>

      <h2>5 Concepts to Rule Them All, Or Just Frankenstein Together</h2>
    </Box>

    <Box>
      <h2>A Nautical Themed Retro to Keep Things Fun</h2>
    </Box>

    <Box>
      <h2>Now It's Time To Start Storyboarding, Right?</h2>
    </Box>

    <Box>
      <h2>So What Did We Make?</h2>
      <h2>Healthcare Provider Dashboard</h2>
      <h2>Expanded Widget</h2>
      <h2>Data Input Page</h2>
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
</script>

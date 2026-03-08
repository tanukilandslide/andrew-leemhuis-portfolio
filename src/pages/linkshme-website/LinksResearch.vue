<template>
  <Banner />
  <main class="max-w-[980px]">
    <Box>
      <h1>Research</h1>
      <p>
        Being new to the Home Medical Equipment (HME) industry, I knew it was critical to understand
        the needs of the stakeholders. I began interviewing key decision makers to understand what
        message our website needed to convey.
      </p>

      <p>
        It was difficult pulling key members from their duties, but after interviewing a customer
        service manager, a billing manager, a vice president, an HR manager, a trainer, and the IT
        administrator, I felt I had a solid foundation of information about the company.
      </p>

      <h2>Research Findings</h2>

      <p>
        After completing all interviews, it was time to compile the info. I created an affinity
        diagram by writing out my notes on sticky notes and grouping on a white board. Groups with
        greater numbers of sticky notes indicated themes that should be addressed on the website.
      </p>
    </Box>

    <Box>
      <h2>Personas</h2>

      <p>
        Once the key themes were determined, I was able to create 3 distinct personas. These
        personas were the main parties who would ultimately determine what software would manage
        their shipments to customers, billing of customer insurance, and inventory.
      </p>
    </Box>

    <Box>
      <h1 class="persona_h1">Craig (53): Primary Persona</h1>

      <h2>Owner</h2>

      <p>
        Craig helps with a little bit of everything around the company. He makes sure that patients
        get their medical supplies on time regardless of cost. He still wants to balance the budget
        and make sure employees feel enabled. Since he has little interaction with the software, he
        will listen to his employees for their recomendations.
      </p>

      <h2>Needs</h2>

      <p>
        Software needs to be cost-effective and compliant with applicable laws. It must also be
        viable in the long term (5-10 years).
      </p>

      <h2>Nice to Haves</h2>

      <ul>
        <li>Functionality across branches of company</li>

        <li>Software flexibility with company structure</li>
      </ul>

      <h2>Other Considerations</h2>

      <ul>
        <li>Has final say on which software to use</li>

        <li>Is concerned about cost and loss of efficiency during conversion</li>

        <li>Is primarily concerned with keeping the company running, not the small details</li>
      </ul>
    </Box>

    <Box>
      <h1 class="persona_h1">Kaitlin (31): Secondary Persona</h1>

      <h2>Customer Service Representative</h2>

      <p>
        Kaitlin enjoys working directly with customers. Her biggest challenge is working with
        insurance companies and with software that is inflexible to internal processes. She works
        closely with the billing team and guides other customer service reps with the software.
      </p>

      <h2>Needs</h2>

      <ul>
        <li>Needs to try software before buying</li>

        <li>Needs access to date in all situations</li>

        <li>Accurate billing</li>

        <li>Needs software to be flexible</li>
      </ul>

      <h2>Nice to Haves</h2>

      <ul>
        <li>Other CSRs to be held accountable by the software</li>

        <li>Quick printing</li>
      </ul>

      <h2>Other Considerations</h2>

      <ul>
        <li>Time is important while entering data</li>

        <li>Will be a key voice after demoing software</li>
      </ul>
    </Box>

    <Box>
      <h1 class="persona_h1">Frank (35)</h1>

      <h2>Trainer/Compliance</h2>

      <p>
        Frank runs all educational programs. He is comfortable with the software, but not a pro. He
        works directly with the billing and customer service departments and loves making people's
        jobs easier. He combats damaging policies and works closely with case managers.
      </p>

      <h2>Needs</h2>

      <ul>
        <li>Easily printable reports</li>

        <li>To be able to find support for training purposes</li>
      </ul>

      <h2>Nice to Haves</h2>

      <ul>
        <li>Software Flexibility</li>
      </ul>

      <h2>Other Considerations</h2>

      <ul>
        <li>Prints lots of information</li>

        <li>Not a power user</li>

        <li>Opinion will be considered when demoing software</li>
      </ul>
    </Box>
  </main>

  <Button>
    <RouterLink to="/linkshme-website">
      <h2>Overview</h2>
    </RouterLink>
  </Button>

  <Button>
    <RouterLink to="/linkshme-website/concept-development">
      <h2>Concept Development</h2>
    </RouterLink>
  </Button>
</template>

<script setup>
import Banner from './components/Banner.vue'
import Box from '@/components/Box.vue'
import Button from '@/components/Button.vue'
</script>

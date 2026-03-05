<template>
  <main class="max-w-[980px]">
    <Box>
      <h1 class="h1-inline">Loan Progress Simulator</h1>

      <h2 class="h2-inline">(Santander Consumer USA)</h2>

      <h2>Role: UX Designer in charge of leading research, development of a loan education tool</h2>

      <p>
        A tool to give Customer Service Agents and customers transparency into their loan payments.
        The goal for this project was to make a tool that would go beyond a basic loan calculator
        and give personalized information about how simple interest is calculated on a customer's
        loan.
      </p>

      <h2>Don't want to read? Watch the case study I created for our World Design Summit!</h2>
      <video width="100%" class="rounded-lg" controls>
        <source src="./video/00-world-design-summit-case-study.mp4" type="video/mp4" />
        Your browser doesn't support this video format.
      </video>
    </Box>

    <SlidingBox>
      <h2>What is Simple Interest</h2>

      <p>
        Simple interest is how homes and car loans are calculated. Interest changes over the life of
        the loan based on how much of the principal is left. Daily interest, or per diem, can be
        calculated using this calculation:
      </p>

      <h2>Principal × (Interest Rate ÷ 365 ) = Daily Interest</h2>
    </SlidingBox>

    <SlidingBox>
      <h2>How customers think simple interest works:</h2>
      <img src="./images/01_interest_perception.svg" alt="" class="w-4/5" />
      <h2>How simple interest actually works:</h2>
      <img src="./images/02_interest_reality.svg" alt="" class="w-4/5" />
    </SlidingBox>

    <SlidingBox>
      <h2>
        Customers get into trouble by thinking that the penalty for paying late is a late fee. Every
        day not paid adds extra interest and can lengthen the life of the loan. Side By Sides with
        Customer Service Agents
      </h2>
    </SlidingBox>

    <SlidingBox>
      <h2>Side By Sides with Customer Service Agents</h2>

      <p>
        To better understand our customers, I sat with customer service agents and listened to their
        conversations with customers calling about their loans. After listening to 70 calls, I
        compiled my notes to create 3 personas.
      </p>

      <img src="./images/03_call-center.jpg" alt="" class="w-4/5" />
    </SlidingBox>

    <Box>
      <img src="./images/04_early-stage-customer.png" alt="" class="w-4/5" />
      <h1>Primary Persona: Early Stage Delinquency Customer</h1>

      <p>
        Early Stage customers are 5 to 60 days past due. These customers have often had either a
        medical emergency or a loss of employment that causes them to miss payments. Interest will
        continue to accrue through their time of difficulty, making it harder to get back on track.
      </p>

      <h2>Goals</h2>

      <ul>
        <li>Wants to work towards getting back to current on their delinquent account</li>
        <li>
          Wants agent to be empathetic to customer&#39;s condition and help find a way out of
          current debt
        </li>
        <li>Wants to understand their loan structure and look under the hood</li>
        <li>Wants to make sure that money has successfully been paid towards account</li>
        <li>Often will want to make weekly payments to slowly catch up with their loan</li>
      </ul>

      <h2>Frustrations</h2>

      <ul>
        <li>
          Thinks that there is only a fee for paying late, doesn&#39;t know that interest also
          accrues
        </li>
        <li>
          Will want to pay late fees on current payment, but late fees will roll into next
          month&#39;s payment
        </li>
        <li>Doesn&#39;t have the level of transparency into their loan as they might like</li>
      </ul>
    </Box>

    <Box>
      <img src="./images/05_proactive-customer.png" alt="" class="w-4/5" />
      <h1>Secondary Persona: Proactive Customer</h1>

      <p>
        This customer always pays regularly and wants to better track the progress of their loan.
        Interested in any way that they may pay off early and/or reduce the amount of interest they
        pay on the loan overall.
      </p>

      <h2>Goals</h2>

      <ul>
        <li>Ability to understand the intricacies of their loan online</li>
        <li>Staying current with payments</li>
      </ul>

      <h2>Frustrations</h2>

      <ul>
        <li>
          Doesn&#39;t have a tool outside of calling customer service to find that information
        </li>
      </ul>
    </Box>

    <Box>
      <img src="./images/06_customer-service-agent.png" alt="" class="w-4/5" />
      <h1>Customer Service Agent</h1>

      <p>
        The Customer Service Representative fields all of the general calls for Santander and
        Chrysler Capital. The majority of calls are about payment questions.
      </p>

      <h2>Goals</h2>

      <ul>
        <li>Answering between 7 and 12 calls per hour to field any questions from customers</li>
        <li>Tries to answer calls in 6 minutes or less</li>
        <li>Has to hit all areas of script before hanging up with customer</li>
        <li>
          60% of calls are about payments, 20% of calls are about titles, 15% are about insurance,
          and 5% need to be escalated
        </li>
      </ul>

      <h2>Frustrations</h2>

      <ul>
        <li>
          Customers think interest stays same throughout the life of the loan making them frustrated
          to learn how interest is actually calculated.
        </li>
        <li>
          Agents will have many windows open for different types of calls they may receive,
          cluttering their computer screen
        </li>
      </ul>
    </Box>

    <SlidingBox>
      <img src="./images/07_analytics.svg" alt="" class="w-4/5" />
    </SlidingBox>

    <Box>
      <h2>First Prototype</h2>
      <img src="./images/08_first-prototype.jpg" alt="" class="w-4/5" />
      <h2>Usability Test Results</h2>

      <p>
        Working with our UX researcher, we tested this wireframe with 6 customer service, early
        stage, and late stage collections agents.
      </p>

      <ul>
        <li>
          People didn&#39;t notice the draggable timeline and that it correlated to the window below
        </li>
        <li>Dragging the timeline was not intuitive</li>
        <li>People didn&#39;t realize that the icons were clickable for navigation</li>
        <li>People&#39;s instinct was to click on things rather than dragging them</li>
      </ul>
    </Box>

    <Box>
      <h2>Second Prototype</h2>
      <img
        src="./images/09_second-prototype.jpg"
        alt="A user interface with bars indicating the amount of the loan paid off, a graph showing payments, and one indicating a timeline of loan events"
        class="w-4/5"
      />

      <h2>Usability Test Results</h2>

      <p>
        Testing with 5 new customer service, early stage, and late stage collections agents, key
        takeaways included:
      </p>

      <ul>
        <li>Dots were not obviously clickable</li>
        <li>Likewise, navigating the timeline with button clicks was unclear</li>
        <li>The script for early payoff was not worded like people expected it to be</li>
      </ul>
    </Box>

    <SlidingBox>
      <h2>What&apos;s this prototype look like?</h2>
      <video width="100%" class="rounded-lg" controls>
        <source src="./video/01-lps-demonstration.mp4" type="video/mp4" />
        Your browser doesn't support this video format.
      </video>
    </SlidingBox>

    <Button>
      <RouterLink to="/">
        <h2>Previous Project</h2>
      </RouterLink>
    </Button>

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
import SlidingBox from '@/components/SlidingBox.vue'
</script>

<template>
  <main class="bg-loanprogresssimulator">
    <div class="w-screen flex flex-col sticky pt-5">
      <div
        :class="
          windowScroll.isScrolling.value
            ? ` h-full w-screen absolute left-0 top-0 z-0 bg-[url(@/assets/loan-progress-simulator/00_lps_background_pattern.png)] opacity-50 duration-1000 pointer-events-none transition-opacity`
            : `h-full w-screen absolute left-0 top-0 z-0 bg-[url(@/assets/loan-progress-simulator/00_lps_background_pattern.png)] opacity-0 duration-1000 pointer-events-none transition-opacity `
        "
      ></div>

      <div class="z-1 max-w-245 mx-auto">
        <Box>
          <h1 class="h1-inline">Loan Progress Simulator</h1>

          <h2 class="h2-inline">(Santander Consumer USA)</h2>

          <h2>
            Role: UX Designer in charge of leading research and development of a patented loan
            education tool
          </h2>

          <p class="mb-5">
            A tool to give Customer Service Agents and customers transparency into their loan
            payments. The goal for this project was to make a tool that would go beyond a basic loan
            calculator and give personalized information about how simple interest is calculated on
            a customer's loan. The solution from this project was applied for and received a patent.
          </p>

          <h2>Don't want to read? Watch the case study I created for our World Design Summit!</h2>
          <video width="100%" class="rounded-lg" controls>
            <source
              src="@/assets/loan-progress-simulator/video/00-world-design-summit-case-study.mp4"
              type="video/mp4"
            />
            Your browser doesn't support this video format.
          </video>
        </Box>

        <SlidingBox>
          <h2>What is Simple Interest</h2>
          <p>
            Simple interest is how homes and car loans are calculated. Interest changes over the
            life of the loan based on how much of the principal is left. Daily interest, or per
            diem, can be calculated using this calculation:
          </p>

          <h2>Principal × (Interest Rate ÷ 365 ) = Daily Interest</h2>
        </SlidingBox>

        <SlidingBox>
          <h2>How customers think simple interest works:</h2>
          <div class="flex justify-center gap-3 mb-5">
            <InterestPerception
              class="w-4/5"
              alt="A bar graph showing interest and principal staying the same each month"
            />
            <div class="flex flex-col justify-around">
              <h3 class="text-[#E72E31]">Interest</h3>
              <h3 class="text-[#0087AA]">Principal</h3>
            </div>
          </div>
          <h2>How simple interest actually works:</h2>
          <div class="flex justify-center gap-3">
            <InterestReality
              class="w-4/5"
              alt="A bar graph showing principal interest decreasing while interest increases"
            />
            <div class="flex flex-col justify-around">
              <h3 class="text-[#E72E31]">Interest</h3>
              <h3 class="text-[#0087AA]">Principal</h3>
            </div>
          </div>
        </SlidingBox>

        <SlidingBox>
          <h2>
            Customers get into trouble by thinking that the penalty for paying late is a late fee.
            Every day not paid adds extra interest and can lengthen the life of the loan. Side By
            Sides with Customer Service Agents
          </h2>
        </SlidingBox>

        <SlidingBox>
          <h2>Side By Sides with Customer Service Agents</h2>

          <p class="mb-5">
            To better understand our customers, I sat with customer service agents and listened to
            their conversations with customers calling about their loans. After listening to 70
            calls, I compiled my notes to create 3 personas.
          </p>

          <img
            src="@/assets/loan-progress-simulator/03_call-center.jpg"
            alt="Image of customer service center with agents taking calls in a corporate setting"
          />
        </SlidingBox>

        <Box>
          <img
            src="@/assets/loan-progress-simulator/04_early-stage-customer.png"
            alt="Dapper guy looking to fix his loan payments"
            class="w-4/5 mx-auto max-w-60 mb-5"
          />
          <h1>Primary Persona: Early Stage Delinquency Customer</h1>

          <p>
            Early Stage customers are 5 to 60 days past due. These customers have often had either a
            medical emergency or a loss of employment that causes them to miss payments. Interest
            will continue to accrue through their time of difficulty, making it harder to get back
            on track.
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
          <img
            src="@/assets/loan-progress-simulator/05_proactive-customer.png"
            alt="Casual guy looking into the distance, seeing his loan-free future"
            class="w-4/5 mx-auto max-w-60 mb-5"
          />
          <h1>Secondary Persona: Proactive Customer</h1>

          <p>
            This customer always pays regularly and wants to better track the progress of their
            loan. Interested in any way that they may pay off early and/or reduce the amount of
            interest they pay on the loan overall.
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
          <img
            src="@/assets/loan-progress-simulator/06_customer-service-agent.png"
            alt="Helpful looking customer service agent ready to get customers out of delinquency"
            class="w-4/5 mx-auto max-w-60 mb-5"
          />
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
              60% of calls are about payments, 20% of calls are about titles, 15% are about
              insurance, and 5% need to be escalated
            </li>
          </ul>

          <h2>Frustrations</h2>

          <ul>
            <li>
              Customers think interest stays same throughout the life of the loan making them
              frustrated to learn how interest is actually calculated.
            </li>
            <li>
              Agents will have many windows open for different types of calls they may receive,
              cluttering their computer screen
            </li>
          </ul>
        </Box>

        <SlidingBox>
          <Analytics />
        </SlidingBox>

        <Box>
          <h2>First Prototype</h2>
          <img
            src="@/assets/loan-progress-simulator/08_first-prototype.jpg"
            alt="Image of customer service center with agents taking calls in a corporate setting"
            class="w-full mb-5"
          />
          <h2>Usability Test Results</h2>

          <p>
            Working with our UX researcher, we tested this wireframe with 6 customer service, early
            stage, and late stage collections agents.
          </p>

          <ul>
            <li>
              People didn&#39;t notice the draggable timeline and that it correlated to the window
              below
            </li>
            <li>Dragging the timeline was not intuitive</li>
            <li>People didn&#39;t realize that the icons were clickable for navigation</li>
            <li>People&#39;s instinct was to click on things rather than dragging them</li>
          </ul>
        </Box>

        <Box>
          <h2>Second Prototype</h2>
          <img
            src="@/assets/loan-progress-simulator/09_second-prototype.jpg"
            alt="A user interface with bars indicating the amount of the loan paid off, a graph showing payments, and one indicating a timeline of loan events"
            class="w-full mb-5"
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
            <source
              src="@/assets/loan-progress-simulator/video/01-lps-demonstration.mp4"
              type="video/mp4"
            />
            Your browser doesn't support this video format.
          </video>
        </SlidingBox>

        <div class="m-auto w-fit flex gap-5 pb-5">
          <RouterLink to="/astrazeneca" class="no-underline">
            <h2
              class="border border-loanprogresssimulator-navbar rounded-full my-auto hover:bg-loanprogresssimulator-navbar no-underline text-loanprogresssimulator-navbar hover:text-loanprogresssimulator px-4 pt-2 pb-3"
            >
              Previous Project
            </h2>
          </RouterLink>

          <RouterLink to="/" class="no-underline">
            <h2
              class="border border-loanprogresssimulator-navbar rounded-full my-auto hover:bg-loanprogresssimulator-navbar no-underline text-loanprogresssimulator-navbar hover:text-loanprogresssimulator px-4 pt-2 pb-3"
            >
              Home
            </h2>
          </RouterLink>

          <RouterLink to="/acquisition-fee-waivers" class="no-underline">
            <h2
              class="border border-loanprogresssimulator-navbar rounded-full my-auto hover:bg-loanprogresssimulator-navbar no-underline text-loanprogresssimulator-navbar hover:text-loanprogresssimulator px-4 pt-2 pb-3"
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
import { useStyleStore } from '@/stores/styles'

import InterestPerception from '@/assets/loan-progress-simulator/01_interest_perception.svg'
import InterestReality from '@/assets/loan-progress-simulator/02_interest_reality.svg'
import Analytics from '@/assets/loan-progress-simulator/07_analytics.svg'
import { useWindowScroll } from '@vueuse/core'

const windowScroll = useWindowScroll()

const store = useStyleStore()

store.setNavbarColor('loanprogresssimulator-navbar')
store.setBackgroundColor('loanprogresssimulator')
</script>

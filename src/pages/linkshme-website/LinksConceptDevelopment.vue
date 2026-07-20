<template>
  <main class="bg-linkshmewebsite">
    <div class="w-screen flex flex-col sticky">
      <div
        :class="
          windowScroll.isScrolling.value
            ? ` h-full w-screen absolute left-0 top-0 z-0 bg-[url(@/assets/links-hme/00_medical_pattern.png)] opacity-50 duration-1000 pointer-events-none transition-opacity`
            : `h-full w-screen absolute left-0 top-0 z-0 bg-[url(@/assets/links-hme/00_medical_pattern.png)] opacity-0 duration-1000 pointer-events-none transition-opacity `
        "
      ></div>

      <div class="z-1 max-w-245 mx-auto">
        <Banner />
        <Box>
          <h1>Concept Development</h1>
          <p>
            Competitive Analysis of other companies&apos; tone showed that most companies
            didn&apos;t put much thought into their web presence. Those that did used stock photos
            which felt disingenuous to the actual patients they represented. From my analysis of the
            tone set by other companies, I was able to find a niche for Links HME&apos;s voice and
            tone.
          </p>
        </Box>

        <Box>
          <h2>Competitor's Websites</h2>
          <div class="flex gap-3">
            <div class="flex flex-col gap-3">
              <img src="@/assets/links-hme/07_brightree.jpg" alt="" class="w-full h-max" />
              <img src="@/assets/links-hme/08_team_dme.jpg" alt="" class="w-full h-max" />
            </div>
            <div class="flex flex-col gap-3">
              <img src="@/assets/links-hme/09_bflow.jpg" alt="" class="w-full h-max" />
              <img src="@/assets/links-hme/10_dme_works.jpg" alt="" class="w-full h-max" />
            </div>
          </div>
        </Box>

        <Box>
          <h2>Competitive Analysis</h2>
          <p class="mb-3">
            Through my competitive analysis of the voice and tone of other sites I determined which
            tonal niche was not currently being filled. I created a four point sliding scale with
            two opposing words to show where each company&apos;s tone lay relative to other
            companies. This made apparent where Links HME could distinguish itself from the
            competition.
          </p>

          <img src="@/assets/links-hme/11_voice_and_tone_comparison.svg" alt="" />
        </Box>

        <Box>
          <h2>Competitive Analysis</h2>
          <p class="mb-3">
            Through my competitive analysis of the voice and tone of other sites I determined which
            tonal niche was not currently being filled. I created a four point sliding scale with
            two opposing words to show where each company&apos;s tone lay relative to other
            companies. This made apparent where Links HME could distinguish itself from the
            competition.
          </p>

          <h2>Our Voice</h2>
          <ul>
            <li>Fun but not silly</li>
            <li>Relaxed but not ineloquent</li>
            <li>Cheerful but not euphoric</li>
            <li>Respectful but not inaccessible</li>
            <li>Knowledgeable but not snooty</li>
            <li>Inviting but not grandstanding</li>
          </ul>
        </Box>

        <SlidingBox>
          <h2>Example Messages</h2>
          <p>
            To better illustrate how our voice and tone might be used in context, I created examples
            of how our voice might change in certain circumstances. The example messages take into
            consideration the primary person who the message will be speaking to, what they&apos;re
            thinking and feeling, and how our displayed message will address those concerns. This
            will better help our copywriter when writing for our site.
          </p>
        </SlidingBox>

        <SlidingBox>
          <h2>Call To Action</h2>

          <h4>Who</h4>
          <p>Craig Young (Owner)</p>

          <h4>When</h4>
          <p>Requesting Demo, Contact Us</p>

          <h4>Emotions</h4>
          <p>Anxiety, Concern</p>

          <h3>User Thoughts</h3>
          <p class="">
            “This software sounds pretty good and I&apos;d like to see it, but now I have to talk to
            the sales rep. Ugh, sales reps. Hope this isn&apos;t a waste of time and that they
            don&apos;t spam me with emails.”
          </p>

          <h3>Displayed Message</h3>
          <p>Empathetic, Encouraging, Somewhat Enthusiastic, Respectful tone:</p>

          <p class="font-bold text-center">
            “Change can be scary, but it doesn&apos;t have to be. We have conversion specialists to
            help you on your journey to better office management and customer service. We want to
            show you how our software can help your business be more efficient so you can focus on
            what matters most, those that rely on your care.
          </p>
          <p class="font-bold text-center mt-5">
            &apos;A journey of a thousand miles begins with a single step&apos; -Laozi”
          </p>
        </SlidingBox>

        <SlidingBox>
          <div>
            <img
              class="error_robot absolute w-1/2 left-1/2 -translate-y-22"
              src="@/assets/links-hme/12_error_robot.png"
              alt="Robot being resuscitated by a mechanic using a defibrillator"
            />
            <h2>Error Message</h2>

            <h4>Who</h4>
            <p>Kaitlin Summers (Customer Service Representative)</p>

            <h4>When</h4>
            <p>Login error, Server is down</p>

            <h4>Emotions</h4>
            <p>Mild frustration, Boredom, Stress</p>

            <h3>User Thoughts</h3>
            <p class="">
              “I think our billing date is coming soon and I want to make sure it will be payed on
              time. Oh no, I guess I&apos;ll have to check later when the site is fixed.”
            </p>

            <h3>Displayed Message</h3>
            <p>Somewhat funny, Casual, Somewhat Enthusiastic, Respectful tone:</p>

            <p class="font-bold text-center">
              “Agh, errors are the worst. We&apos;re plugging in cables, resetting modems, and will
              be back online asap.”
            </p>
          </div>
        </SlidingBox>

        <SlidingBox>
          <h2>Explaining Our Services</h2>

          <h4>Who</h4>
          <p>Craig Young (Owner), Frank Park (Trainer), Kaitlin Summers (Customer Service Rep)</p>

          <h4>When</h4>
          <p>First visit, verifying facts</p>

          <h4>Emotions</h4>
          <p>Interest, Mild Boredom, Curiosity, Focus</p>

          <h3>User Thoughts</h3>
          <p class="">
            “We really can&apos;t be paying as much as we are for Brightree. I know all of the HME
            options, but I haven&apos;t heard of this one. Will they have features for my business
            at a reasonable price?”
          </p>

          <h3>Displayed Message</h3>
          <p>Knowledgeable, Conversational, Somewhat Enthusiastic, Concise tone (Steve Jobs):</p>

          <p class="font-bold text-center">
            “Elements add flexibility to your software with additional features tailored to your
            company&apos;s specific requirements. We know you don&apos;t want to change how your
            company is structured because of the software you use. With Elements, you can add
            specific features to best meet your customer&apos;s needs and make your company more
            efficient.”
          </p>
        </SlidingBox>

        <div class="m-auto w-fit flex gap-5 pb-5">
          <RouterLink to="/linkshme-website/research" class="no-underline">
            <h2
              class="border border-linkshmewebsite-navbar rounded-full my-auto hover:bg-linkshmewebsite-navbar no-underline text-linkshmewebsite-navbar hover:text-white px-4 pt-2 pb-3"
            >
              Research
            </h2>
          </RouterLink>

          <RouterLink to="/" class="no-underline">
            <h2
              class="border border-linkshmewebsite-navbar rounded-full my-auto hover:bg-linkshmewebsite-navbar no-underline text-linkshmewebsite-navbar hover:text-white px-4 pt-2 pb-3"
            >
              Home
            </h2>
          </RouterLink>

          <RouterLink to="/linkshme-website/visual-style-development" class="no-underline">
            <h2
              class="border border-linkshmewebsite-navbar rounded-full my-auto hover:bg-linkshmewebsite-navbar no-underline text-linkshmewebsite-navbar hover:text-white px-4 pt-2 pb-3"
            >
              Visual Style Development
            </h2>
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Banner from './components/Banner.vue'
import Box from '@/components/Box.vue'
import SlidingBox from '@/components/SlidingBox.vue'
import { useStyleStore } from '@/stores/styles'
import { useWindowScroll } from '@vueuse/core'

const windowScroll = useWindowScroll()

const store = useStyleStore()

store.setNavbarColor('linkshmewebsite-navbar')
store.setBackgroundColor('linkshmewebsite')
</script>

<template>
  <Box>
    <h1>Concept Development</h1>
    <p>
      Competitive Analysis of other companies&apos; tone showed that most companies didn&apos;t put
      much thought into their web presence. Those that did used stock photos which felt disingenuous
      to the actual patients they represented. From my analysis of the tone set by other companies,
      I was able to find a niche for Links HME&apos;s voice and tone.
    </p>
  </Box>

  <Box>
    <h2>Competitive Analysis</h2>
    <p>
      Through my competitive analysis of the voice and tone of other sites I determined which tonal
      niche was not currently being filled. I created a four point sliding scale with two opposing
      words to show where each company&apos;s tone lay relative to other companies. This made
      apparent where Links HME could distinguish itself from the competition.
    </p>
  </Box>

  <Box> </Box>

  <Box>
    <h2>Competitive Analysis</h2>
    <p>
      Through my competitive analysis of the voice and tone of other sites I determined which tonal
      niche was not currently being filled. I created a four point sliding scale with two opposing
      words to show where each company&apos;s tone lay relative to other companies. This made
      apparent where Links HME could distinguish itself from the competition.
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
      To better illustrate how our voice and tone might be used in context, I created examples of
      how our voice might change in certain circumstances. The example messages take into
      consideration the primary person who the message will be speaking to, what they&apos;re
      thinking and feeling, and how our displayed message will address those concerns. This will
      better help our copywriter when writing for our site.
    </p>
  </SlidingBox>

  <Box>
    <h2>Call To Action</h2>

    <h4>Who</h4>
    <p>Craig Young (Owner)</p>

    <h4>When</h4>
    <p>Requesting Demo, Contact Us</p>

    <h4>Emotions</h4>
    <p>Anxiety, Concern</p>

    <h3>User Thoughts</h3>
    <p class="">
      “This software sounds pretty good and I&apos;d like to see it, but now I have to talk to the
      sales rep. Ugh, sales reps. Hope this isn&apos;t a waste of time and that they don&apos;t spam
      me with emails.”
    </p>

    <h3>Displayed Message</h3>
    <p>Empathetic, Encouraging, Somewhat Enthusiastic, Respectful tone:</p>

    <p class="">
      “Change can be scary, but it doesn&apos;t have to be. We have conversion specialists to help
      you on your journey to better office management and customer service. We want to show you how
      our software can help your business be more efficient so you can focus on what matters most,
      those that rely on your care.
    </p>
    <p class="">&apos;A journey of a thousand miles begins with a single step&apos; -Laozi”</p>
  </Box>

  <Box>
    <h2>Error Message</h2>

    <!-- <img
      class="error_robot"
      src="images/12_error_robot.png"
      alt="Robot being resuscitated by a mechanic using a defibrillator"
    /> -->

    <h4>Who</h4>
    <p>Kaitlin Summers (Customer Service Representative)</p>

    <h4>When</h4>
    <p>Login error, Server is down</p>

    <h4>Emotions</h4>
    <p>Mild frustration, Boredom, Stress</p>

    <h3>User Thoughts</h3>
    <p class="">
      “I think our billing date is coming soon and I want to make sure it will be payed on time. Oh
      no, I guess I&apos;ll have to check later when the site is fixed.”
    </p>

    <h3>Displayed Message</h3>
    <p>Somewhat funny, Casual, Somewhat Enthusiastic, Respectful tone:</p>

    <p class="">
      “Agh, errors are the worst. We&apos;re plugging in cables, resetting modems, and will be back
      online asap.”
    </p>
  </Box>

  <Box>
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
      options, but I haven&apos;t heard of this one. Will they have features for my business at a
      reasonable price?”
    </p>

    <h3>Displayed Message</h3>
    <p>Knowledgeable, Conversational, Somewhat Enthusiastic, Concise tone (Steve Jobs):</p>

    <p class="">
      “Elements add flexibility to your software with additional features tailored to your
      company&apos;s specific requirements. We know you don&apos;t want to change how your company
      is structured because of the software you use. With Elements, you can add specific features to
      best meet your customer&apos;s needs and make your company more efficient.”
    </p>
  </Box>

  <Button>
    <RouterLink to="/linkshme-website/research">
      <h2>Research</h2>
    </RouterLink>
  </Button>

  <Button>
    <RouterLink to="/linkshme-website/visual-style-development">
      <h2>Visual Style Development</h2>
    </RouterLink>
  </Button>
</template>

<script setup>
import Button from '@/components/Button.vue'
import Box from '@/components/Box.vue'
import SlidingBox from '@/components/SlidingBox.vue'
</script>

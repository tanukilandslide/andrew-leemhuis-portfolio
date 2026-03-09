<template>
  <Banner />
  <main class="max-w-[980px]">
    <SlidingBox>
      <h1 class="">Visual Style Development</h1>
      <p>
        Our site needed a focused visual style. Deciding that using images of actual patients was
        problematic, and that the normal clip art usually employed by other HME companies would feel
        disingenuous, I settled on meeples to represent patients and the people who work at HME
        companies.
      </p>

      <div class="flex">
        <img src="./images/13_bebbeh.jpg" alt="" />
        <img src="./images/14_bebbeh_vector.jpg" alt="" />
        <img src="./images/15_iv_stand.jpg" alt="" />
        <img src="./images/16_iv_stand_vector.jpg" alt="" />
        <img src="./images/17_kimberlin.jpg" alt="" />
        <img src="./images/18_kimberlin_vector.jpg" alt="" />
      </div>
    </SlidingBox>

    <Box>
      <h2 class="">Illustrations for Features Page</h2>
      <p>
        Taking the characters created for the banner page, I was able to fully realize our voice
        through the visual design of our website by creating illustrations for our features pages.
      </p>
      <h3 class="">Customer Center Portal</h3>
      <img src="./images/19_feature-banner-customer-center-portal.png" alt="" />
      <img src="./images/20_feature-banner-customer-center-portal_sketch.jpg" alt="" />

      <h3 class="">Integration with Vendor Catalogs</h3>
      <img src="./images/21_feature-banner-integration-with-vendor-catalogs.png" alt="" />
      <img src="./images/22_feature-banner-integration-with-vendor-catalogs_sketch.jpg" alt="" />

      <h3 class="">Fulfillment Service Integration</h3>
      <img src="./images/23_feature-banner-fulfillment-service-integration.png" alt="" />
      <img src="./images/24_feature-banner-fulfillment-service-integration_sketch.jpg" alt="" />

      <h3 class="">Conversion</h3>
      <img src="./images/25_feature-banner-conversion.png" alt="" />
      <img src="./images/26_feature-banner-conversion_sketch.jpg" alt="" />

      <h3 class="">Cloud Connectivity</h3>
      <img src="./images/27_feature-banner-cloud-connectivity.png" alt="" />
      <img src="./images/28_feature-banner-cloud-connectivity_sketch.jpg" alt="" />

      <h3 class="text_content">Real Time Billing</h3>
      <img src="./images/29_feature-banner-automatic-real-time-billing.png" alt="" />
      <img src="./images/30_feature-banner-automatic-real-time-billing_sketch.jpg" alt="" />
    </Box>

    <Box>
      <h2 class="links_header">Retesting Style</h2>
      <p>
        Now that I had created a rough design of our homepage, I knew I needed to test it. The
        cartoon characters were a bit of a jump, so I gave potential users a page of adjectives and
        showed them the homepage for 5 seconds to get their immediate initial impression. I had them
        select up to 5 adjectives that they felt described the website. I then had them to browse
        the site without a time limit and circle as many words as they liked. Tallying each word
        gave me a quantitative analysis of how my website felt. To get a qualitative understanding,
        I also asked them several questions as well. The results are as follows:
      </p>

      <img src="./images/31_re-testing.jpg" alt="" />
      <h3 class="links_header">Top Adjective Results</h3>
      <div class="flex">
        <ul class="adjective_ul pe-3">
          <li class="adjective_li">Friendly</li>
          <li class="adjective_li">Easy To Use</li>
          <li class="adjective_li">Useful</li>
          <li class="adjective_li">Clear</li>
          <li class="adjective_li">Convenient</li>
          <li class="adjective_li">Creative</li>
          <li class="adjective_li">Clean</li>
        </ul>

        <ul class="adjective_ul">
          <li class="adjective_li_num">8</li>
          <li class="adjective_li_num">13</li>
          <li class="adjective_li_num">5</li>
          <li class="adjective_li_num">6</li>
          <li class="adjective_li_num">5</li>
          <li class="adjective_li_num">5</li>
          <li class="adjective_li_num">6</li>
        </ul>
      </div>

      <h2>What Did the Users Think?</h2>

      <ul>
        <li>Likes avatars-good for marketing down the road</li>
        <li>Hard to tell it's a DME</li>
        <li>It feels easier to use if it’s cute</li>
        <li>
          I didn’t immediately think HME software (but when I think of HME software I think of
          Medact)
        </li>
        <li>Images are a little spartan</li>
        <li>I personally like the picture, not sure if someone will take it seriously</li>
        <li>"I'm not a real serious person"</li>
        <li>Feels clean and not lots of content on the screen</li>
      </ul>
    </Box>

    <Box>
      <img src="./images/32_homepage_first_draft.jpg" alt="" />
      <img src="./images/33_homepage_final.jpg" alt="" />
    </Box>
  </main>

  <Button>
    <RouterLink to="/linkshme-website/concept-development">
      <h2>Concept Development</h2>
    </RouterLink>
  </Button>

  <Button>
    <RouterLink to="/">
      <h2>Home</h2>
    </RouterLink>
  </Button>
</template>

<script setup>
import Banner from './components/Banner.vue'
import Box from '@/components/Box.vue'
import SlidingBox from '@/components/SlidingBox.vue'
import Button from '@/components/Button.vue'
</script>

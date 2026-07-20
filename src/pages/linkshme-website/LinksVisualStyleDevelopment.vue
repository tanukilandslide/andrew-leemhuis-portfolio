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
        <SlidingBox>
          <h1 class="text-linkshmewebsite-accent">Visual Style Development</h1>
          <p>
            Our site needed a focused visual style. Deciding that using images of actual patients
            was problematic, and that the normal clip art usually employed by other HME companies
            would feel disingenuous, I settled on meeples to represent patients and the people who
            work at HME companies.
          </p>

          <div class="flex justify-between mt-5 h-25 md:h-60">
            <div class="">
              <img src="@/assets/links-hme/13_bebbeh.jpg" alt="" class="h-full w-auto" />
            </div>
            <div class="">
              <img src="@/assets/links-hme/14_bebbeh_vector.jpg" alt="" class="h-full w-auto" />
            </div>
            <div class="">
              <img src="@/assets/links-hme/15_iv_stand.jpg" alt="" class="h-full w-auto" />
            </div>
            <div class="">
              <img src="@/assets/links-hme/16_iv_stand_vector.jpg" alt="" class="h-full w-auto" />
            </div>
            <div class="">
              <img src="@/assets/links-hme/17_kimberlin.jpg" alt="" class="h-full w-auto" />
            </div>
            <div class="">
              <img src="@/assets/links-hme/18_kimberlin_vector.jpg" alt="" class="h-full w-auto" />
            </div>
          </div>
        </SlidingBox>

        <Box>
          <h2 class="text-linkshmewebsite-accent">Illustrations for Features Page</h2>
          <p>
            Taking the characters created for the banner page, I was able to fully realize our voice
            through the visual design of our website by creating illustrations for our features
            pages.
          </p>

          <FeatureIllustrations
            :title="'Customer Center Portal'"
            :final-image="CustomerPortal"
            :sketch="CustomerPortalSketch"
          />

          <FeatureIllustrations
            :title="'Integration with Vendor Catalogs'"
            :final-image="VendorCatalogs"
            :sketch="VendorCatalogsSketch"
          />

          <FeatureIllustrations
            :title="'Fulfillment Service Integration'"
            :final-image="Fullfillment"
            :sketch="FullfillmentSketch"
          />

          <FeatureIllustrations
            :title="'Conversion'"
            :final-image="Conversion"
            :sketch="ConversionSketch"
          />

          <FeatureIllustrations
            :title="'Cloud Connectivity'"
            :final-image="Cloud"
            :sketch="CloudSketch"
          />

          <FeatureIllustrations
            :title="'Real Time Billing'"
            :final-image="Billing"
            :sketch="BillingSketch"
          />
        </Box>

        <Box>
          <h2 class="text-linkshmewebsite-accent">Retesting Style</h2>
          <p>
            Now that I had created a rough design of our homepage, I knew I needed to test it. The
            cartoon characters were a bit of a jump, so I gave potential users a page of adjectives
            and showed them the homepage for 5 seconds to get their immediate initial impression. I
            had them select up to 5 adjectives that they felt described the website. I then had them
            to browse the site without a time limit and circle as many words as they liked. Tallying
            each word gave me a quantitative analysis of how my website felt. To get a qualitative
            understanding, I also asked them several questions as well. The results are as follows:
          </p>

          <div class="flex m-5 justify-around">
            <img src="@/assets/links-hme/31_re-testing.jpg" alt="" class="w-2/5" />
            <div>
              <h3 class="text-linkshmewebsite-accent">Top Adjective Results</h3>
              <div class="flex">
                <ul class="adjective_ul w-5/6">
                  <li class="border-b-2 border-linkshmewebsite-accent">Friendly</li>
                  <li class="border-b-2 border-linkshmewebsite-accent">Easy To Use</li>
                  <li class="border-b-2 border-linkshmewebsite-accent">Useful</li>
                  <li class="border-b-2 border-linkshmewebsite-accent">Clear</li>
                  <li class="border-b-2 border-linkshmewebsite-accent">Convenient</li>
                  <li class="border-b-2 border-linkshmewebsite-accent">Creative</li>
                  <li class="border-b-2 border-linkshmewebsite-accent">Clean</li>
                </ul>

                <ul class="adjective_ul w-1/6">
                  <li class="border-b-2 border-linkshmewebsite-accent">8</li>
                  <li class="border-b-2 border-linkshmewebsite-accent">13</li>
                  <li class="border-b-2 border-linkshmewebsite-accent">5</li>
                  <li class="border-b-2 border-linkshmewebsite-accent">6</li>
                  <li class="border-b-2 border-linkshmewebsite-accent">5</li>
                  <li class="border-b-2 border-linkshmewebsite-accent">5</li>
                  <li class="border-b-2 border-linkshmewebsite-accent">6</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 class="text-linkshmewebsite-accent">What Did the Users Think?</h2>

          <ul class="list-disc list-inside">
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

        <WebsiteReveal />

        <div class="m-auto w-fit flex gap-5 pb-5">
          <RouterLink to="/linkshme-website/concept-development" class="no-underline">
            <h2
              class="border border-linkshmewebsite-navbar rounded-full my-auto hover:bg-linkshmewebsite-navbar no-underline text-linkshmewebsite-navbar hover:text-white px-4 pt-2 pb-3"
            >
              Concept Development
            </h2>
          </RouterLink>

          <RouterLink to="/" class="no-underline">
            <h2
              class="border border-linkshmewebsite-navbar rounded-full my-auto hover:bg-linkshmewebsite-navbar no-underline text-linkshmewebsite-navbar hover:text-white px-4 pt-2 pb-3"
            >
              Home
            </h2>
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Banner from './components/LinksBanner.vue'
import Box from '@/components/Box.vue'
import SlidingBox from '@/components/SlidingBox.vue'
import FeatureIllustrations from './components/FeatureIllustrations.vue'
import WebsiteReveal from './components/WebsiteReveal.vue'
import { useStyleStore } from '@/stores/styles'
import { useWindowScroll } from '@vueuse/core'

import CustomerPortal from '@/assets/links-hme/19_feature-banner-customer-center-portal.png'
import CustomerPortalSketch from '@/assets/links-hme/20_feature-banner-customer-center-portal_sketch.jpg'

import VendorCatalogs from '@/assets/links-hme/21_feature-banner-integration-with-vendor-catalogs.png'
import VendorCatalogsSketch from '@/assets/links-hme/22_feature-banner-integration-with-vendor-catalogs_sketch.jpg'

import Fullfillment from '@/assets/links-hme/23_feature-banner-fulfillment-service-integration.png'
import FullfillmentSketch from '@/assets/links-hme/24_feature-banner-fulfillment-service-integration_sketch.jpg'

import Conversion from '@/assets/links-hme/25_feature-banner-conversion.png'
import ConversionSketch from '@/assets/links-hme/26_feature-banner-conversion_sketch.jpg'

import Cloud from '@/assets/links-hme/27_feature-banner-cloud-connectivity.png'
import CloudSketch from '@/assets/links-hme/28_feature-banner-cloud-connectivity_sketch.jpg'

import Billing from '@/assets/links-hme/29_feature-banner-automatic-real-time-billing.png'
import BillingSketch from '@/assets/links-hme/30_feature-banner-automatic-real-time-billing_sketch.jpg'

const windowScroll = useWindowScroll()

const store = useStyleStore()

store.setNavbarColor('linkshmewebsite-navbar')
store.setBackgroundColor('linkshmewebsite')
</script>

<template>
  <div :class="'w-screen screen-height bg-' + store.backgroundColor">
    <main :class="'max-w-245 bg-' + store.backgroundColor">
      <div :class="`flex z-1 flex-wrap content-center justify-center gap-20 py-20`">
        <RouterLink class="no-underline z-1" to="/zaiko-admin">
          <ProjectItem :project-name="'Zaiko Admin Dashboard'">
            <ZaikoLogo />
          </ProjectItem>
        </RouterLink>

        <RouterLink class="no-underline z-1" to="/astrazeneca">
          <ProjectItem :project-name="'AstraZeneca Dashboard'">
            <AstraZenecaLogo />
          </ProjectItem>
        </RouterLink>

        <RouterLink class="no-underline z-1" to="/loan-progress-simulator">
          <ProjectItem :project-name="'Loan Progress Simulator'">
            <LoanProgressSimulatorLogo />
          </ProjectItem>
        </RouterLink>

        <RouterLink class="no-underline z-1" to="/acquisition-fee-waivers">
          <ProjectItem :project-name="'Acquisition Fee Waivers'">
            <AcqFeeWaiversLogo />
          </ProjectItem>
        </RouterLink>

        <RouterLink class="no-underline z-1" to="/linkshme-website">
          <ProjectItem :project-name="'Links HME Website'">
            <LinksHMELogo />
          </ProjectItem>
        </RouterLink>

        <RouterLink class="no-underline z-1" to="/personal-projects">
          <ProjectItem :project-name="'Personal Projects'">
            <PersonalProjectsLogo />
          </ProjectItem>
        </RouterLink>

        <BackgroundSVG class="z-0" />
      </div>
    </main>
  </div>
</template>

<script setup>
import ProjectItem from './components/ProjectItem.vue'

import ZaikoLogo from '../../../assets/icons/zaiko-logo.svg'
import AstraZenecaLogo from '../../../assets/icons/astrazeneca-logo.svg'
import LoanProgressSimulatorLogo from '../../../assets/icons/santander-logo.svg'
import AcqFeeWaiversLogo from '../../../assets/icons/acquisition-fee-waivers.svg'
import LinksHMELogo from '../../../assets/icons/links-hme-logo.svg'
import PersonalProjectsLogo from '../../../assets/icons/personal-projects.svg'

import BackgroundSVG from './components/BackgroundSVG.vue'

import { useStyleStore } from '@/stores/styles'

const store = useStyleStore()

const season = new Date().getMonth() + 1

// const season = 12

if (4 <= season && season <= 9) {
  store.setCurrentSeason('summer')
} else {
  store.setCurrentSeason('winter')
}

let currentSeason = store.currentSeason

store.setNavbarColor(currentSeason)
store.setBackgroundColor(currentSeason)
</script>

<style scoped>
.screen-height {
  height: calc(100vh - v-bind(store.navbarHeight + 'px'));
}
</style>

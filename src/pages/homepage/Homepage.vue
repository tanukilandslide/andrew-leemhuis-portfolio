<template>
  <div :class="'w-screen screen-height -z-1 bg-' + store.backgroundColor">
    <main :class="'max-w-245 bg-' + store.backgroundColor">
      <div :class="`flex flex-wrap content-center justify-center gap-20 py-20`">
        <RouterLink class="no-underline" to="/zaiko-admin">
          <ProjectItem :project-name="'Zaiko Admin Dashboard'">
            <ZaikoLogo />
          </ProjectItem>
        </RouterLink>

        <RouterLink class="no-underline" to="/astrazeneca">
          <ProjectItem :project-name="'AstraZeneca Dashboard'">
            <AstraZenecaLogo />
          </ProjectItem>
        </RouterLink>

        <RouterLink class="no-underline" to="/loan-progress-simulator">
          <ProjectItem :project-name="'Loan Progress Simulator'">
            <LoanProgressSimulatorLogo />
          </ProjectItem>
        </RouterLink>

        <RouterLink class="no-underline" to="/acquisition-fee-waivers">
          <ProjectItem :project-name="'Acquisition Fee Waivers'">
            <AcqFeeWaiversLogo />
          </ProjectItem>
        </RouterLink>

        <RouterLink class="no-underline" to="/linkshme-website">
          <ProjectItem :project-name="'Links HME Website'">
            <LinksHMELogo />
          </ProjectItem>
        </RouterLink>

        <RouterLink class="no-underline" to="/personal-projects">
          <ProjectItem :project-name="'Personal Projects'">
            <PersonalProjectsLogo />
          </ProjectItem>
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<script setup>
import ProjectItem from '@/components/ProjectItem.vue'

import ZaikoLogo from '../../../assets/icons/zaiko-logo.svg'
import AstraZenecaLogo from '../../../assets/icons/astrazeneca-logo.svg'
import LoanProgressSimulatorLogo from '../../../assets/icons/santander-logo.svg'
import AcqFeeWaiversLogo from '../../../assets/icons/acquisition-fee-waivers.svg'
import LinksHMELogo from '../../../assets/icons/links-hme-logo.svg'
import PersonalProjectsLogo from '../../../assets/icons/personal-projects.svg'

import { useStyleStore } from '@/stores/styles'

const store = useStyleStore()

store.setNavbarColor('summer')

store.setBackgroundColor('summer')

// const projects = [
//   {
//     name: 'AstraZeneca',
//     url: '/astrazeneca',
//     logo: '/assets/icons/astrazeneca-logo.svg',
//   },
//   {
//     name: 'Loan Progress Simulator',
//     url: '/loan-progress-simulator',
//     logo: '@/assets/icons/santander-logo.svg',
//   },
//   {
//     name: 'Acquisition Fee Waivers',
//     url: '/acquisition-fee-waivers',
//     logo: '../../assets/icons/acquisition-fee-waivers.svg',
//   },
//   {
//     name: 'Links HME Website',
//     url: '/linkshme-website',
//     logo: '../../assets/icons/links-hme-logo.svg',
//   },
//   {
//     name: 'Personal Projects',
//     url: 'personal-projects',
//     logo: '../../assets/icons/personal-projects.svg',
//   },
// ]
</script>

<style scoped>
.screen-height {
  height: calc(100vh - v-bind(store.navbarHeight + 'px'));
}
</style>

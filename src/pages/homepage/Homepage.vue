<template>
  <div :class="'w-screen bg-' + store.backgroundColor">
    <main :class="'max-w-245'">
      <div class="flex flex-wrap content-center justify-center gap-20 h-[95vh]">
        <RouterLink class="no-underline" to="/astrazeneca">
          <ProjectItem>
            <AstraZenecaLogo />
          </ProjectItem>
        </RouterLink>

        <RouterLink class="no-underline" to="/loan-progress-simulator">
          <ProjectItem>
            <LoanProgressSimulatorLogo />
          </ProjectItem>
        </RouterLink>

        <RouterLink class="no-underline" to="/acquisition-fee-waivers">
          <ProjectItem>
            <AcqFeeWaiversLogo />
          </ProjectItem>
        </RouterLink>

        <RouterLink class="no-underline" to="/linkshme-website">
          <ProjectItem>
            <LinksHMELogo />
          </ProjectItem>
        </RouterLink>

        <RouterLink class="no-underline" to="/personal-projects">
          <ProjectItem>
            <PersonalProjectsLogo />
          </ProjectItem>
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<script setup>
import ProjectBadge from '@/components/ProjectBadge.vue'
import ProjectItem from '@/components/ProjectItem.vue'

import AstraZenecaLogo from '../../../assets/icons/astrazeneca-logo.svg'
import LoanProgressSimulatorLogo from '../../../assets/icons/santander-logo.svg'
import AcqFeeWaiversLogo from '../../../assets/icons/acquisition-fee-waivers.svg'
import LinksHMELogo from '../../../assets/icons/links-hme-logo.svg'
import PersonalProjectsLogo from '../../../assets/icons/personal-projects.svg'

import { useStyleStore } from '@/stores/styles'

const store = useStyleStore()

store.setNavbarColor('summer')

store.setBackgroundColor('summer')

const projects = [
  {
    name: 'AstraZeneca',
    url: '/astrazeneca',
    logo: '/assets/icons/astrazeneca-logo.svg',
  },
  {
    name: 'Loan Progress Simulator',
    url: '/loan-progress-simulator',
    logo: '@/assets/icons/santander-logo.svg',
  },
  {
    name: 'Acquisition Fee Waivers',
    url: '/acquisition-fee-waivers',
    logo: '../../assets/icons/acquisition-fee-waivers.svg',
  },
  {
    name: 'Links HME Website',
    url: '/linkshme-website',
    logo: '../../assets/icons/links-hme-logo.svg',
  },
  {
    name: 'Personal Projects',
    url: 'personal-projects',
    logo: '../../assets/icons/personal-projects.svg',
  },
]
</script>

<template>
  <main :class="'max-w-245 bg-' + useStyleStore().navbarColor">
    <div class="flex flex-wrap content-center justify-center gap-20 h-[80vh]">
      <RouterLink class="no-underline text-white" v-for="project in projects" :to="project.url">
        <project-badge :project-name="project.name" :logo="project.logo" />
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
import ProjectBadge from '@/components/ProjectBadge.vue'
import { useStyleStore } from '@/stores/styles'

const store = useStyleStore()

store.setNavbarColor('summer')

const projects = [
  { name: 'AstraZeneca', url: '/astrazeneca', logo: 'astrazeneca' },
  {
    name: 'Loan Progress Simulator',
    url: '/loan-progress-simulator',
    logo: 'loanprogresssimulator',
  },
  {
    name: 'Acquisition Fee Waivers',
    url: '/aquisition-fee-waivers',
    logo: 'aquisition-fee-waivers',
  },
  { name: 'Links HME Website', url: '/linkshme-website', logo: 'linkshme' },
  { name: 'Personal Projects', url: 'personal-projects', logo: 'personal-projects' },
]
</script>

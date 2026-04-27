<template>
  <main :class="'max-w-245 bg-' + useStyleStore().navbarColor">
    <div class="flex flex-wrap content-center justify-center gap-20 h-[87vh]">
      <RouterLink v-for="project in projects" class="no-underline" :to="project.url">
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
  {
    name: 'AstraZeneca',
    url: '/astrazeneca',
    logo: '../../assets/icons/astrazeneca-logo.svg',
  },
  {
    name: 'Loan Progress Simulator',
    url: '/loan-progress-simulator',
    logo: '../../assets/icons/santander-logo.svg',
  },
  {
    name: 'Acquisition Fee Waivers',
    url: '/aquisition-fee-waivers',
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

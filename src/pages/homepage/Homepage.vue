<template>
  <h1>Homepage</h1>
  <RouterLink v-for="project in projects" :to="'/' + project.url">
    <project-badge :project-name="project.name" />
  </RouterLink>
</template>

<script setup>
import ProjectBadge from '@/components/ProjectBadge.vue'

const projects = [
  { name: 'AstraZeneca', url: 'astrazeneca', logo: 'astrazeneca' },
  {
    name: 'Loan Progress Simulator',
    url: 'loan-progress-simulator',
    logo: 'loanprogresssimulator',
  },
  {
    name: 'Acquisition Fee Waivers',
    url: 'aquisition-fee-waivers',
    logo: 'aquisition-fee-waivers',
  },
  { name: 'Links HME Website', url: 'linkshme-website', logo: 'linkshme' },
  { name: 'Personal Projects', url: 'personal-projects', logo: 'personal-projects' },
]
</script>

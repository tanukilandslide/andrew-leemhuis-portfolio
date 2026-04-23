<template>
  <main class="max-w-[980px]">
    <h1>Homepage</h1>
    <RouterLink v-for="project in projects" :to="'/' + project.url">
      <project-badge :project-name="project.name" />
    </RouterLink>
    <div>{{ store.count }}</div>
    <div>{{ store.doubleCount }}</div>
    <div>{{ count }}</div>
    <div>{{ doubleCount }}</div>
    <button class="bg-green-600 p-3 rounded-md me-4" @click="increment()">Click me!</button>
    <button class="border-2 border-green-600 p-3 rounded-md" @click="doubleCountValue()">
      Increment me!
    </button>
    <div>{{ store.date }}</div>
    <div>{{ store.simpleDate }}</div>
  </main>
</template>

<script setup>
import ProjectBadge from '@/components/ProjectBadge.vue'
import { useCounterStore } from '@/stores/counter'
import { ref, reactive } from 'vue'

const store = useCounterStore()

store.setNavbarColor('winter')

let count = reactive(store.count)
let doubleCount = ref(store.doubleCount)

const increment = store.increment
const doubleCountValue = store.doubleCountValue

function addOne() {
  store.count++
}

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

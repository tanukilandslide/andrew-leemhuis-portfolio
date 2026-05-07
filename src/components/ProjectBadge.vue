<template>
  <div
    class="flex flex-col justify-center h-44 w-44"
    @mouseenter="showText = true"
    @mouseleave="showText = false"
  >
    <AstraZenecaLogo
      v-if="projectName === 'AstraZeneca'"
      class="w-20 h-max flex flex-col justify-center m-auto"
    />
    <LoanProgressSimulatorLogo
      v-if="projectName === 'Loan Progress Simulator'"
      class="w-20 h-max flex flex-col justify-center m-auto"
    />

    <!-- <img v-if="!showText" :src="logo" alt="" class="w-20 m-auto" /> -->
    <h2 v-if="showText" class="text-white text-center break-normal">{{ projectName }}</h2>
  </div>
</template>

<script setup>
import AstraZenecaLogo from '../../assets/icons/astrazeneca-logo.svg'
import LoanProgressSimulatorLogo from '../../assets/icons/santander-logo.svg'
import { ref } from 'vue'
defineProps({
  projectName: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
})

let showText = ref(false)
</script>

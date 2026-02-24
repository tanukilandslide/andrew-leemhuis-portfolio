<template>
  <logo class="w-16 h-16"></logo>
  <h2>{{ projectName }}</h2>
</template>

<script setup>
// import logo from `../../assets/icons/${projectName}-logo.svg`

const name = 'favicon'

import astrazeneca from '../../assets/icons/astrazeneca-logo.svg'
import loanprogresssimulator from '../../assets/icons/santander-logo.svg'
import linkshme from '../../assets/icons/links-hme-logo.svg'

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
</script>

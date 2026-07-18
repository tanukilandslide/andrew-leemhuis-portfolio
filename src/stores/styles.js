import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStyleStore = defineStore('styles', () => {
  let navbarColor = ref('')

  let backgroundColor = ref('')

  let navbarHeight = ref('')

  let currentSeason = ref('')

  function setNavbarColor(newColor) {
    navbarColor.value = newColor
    console.log(navbarColor.value)
    return navbarColor.value
  }

  function setBackgroundColor(newColor) {
    backgroundColor.value = newColor
    console.log(navbarColor.value)
    return backgroundColor.value
  }

  function setCurrentSeason(newSeason) {
    currentSeason.value = newSeason
  }

  return {
    navbarColor,
    backgroundColor,
    navbarHeight,
    currentSeason,
    setNavbarColor,
    setBackgroundColor,
    setCurrentSeason,
  }
})

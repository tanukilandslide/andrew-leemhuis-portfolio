import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStyleStore = defineStore('styles', () => {
  let navbarColor = ref('')

  let backgroundColor = ref('')

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

  let navbarHeight = ref('')

  return {
    navbarColor,
    backgroundColor,
    setNavbarColor,
    setBackgroundColor,
    navbarHeight,
  }
})

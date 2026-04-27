import { ref, computed } from 'vue'
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

  const count = ref(4)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function doubleCountValue() {
    count.value = count.value * 2
  }

  const date = new Date
  const simpleDate = computed(() => {
    const year = date.getFullYear()
    const month = date.getUTCMonth() + 1
    const day = date.getUTCDate()

    return `${month}/${day}/${year}`
  })


  return {
    count,
    doubleCount,
    increment,
    date,
    simpleDate,
    doubleCountValue,
    navbarColor,
    backgroundColor,
    setNavbarColor,
    setBackgroundColor
    }
})

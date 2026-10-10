<template>
  <main
    :class="
      stitchCounter === stitchGoal && !inputStitchGoal
        ? ' bg-green-900 screen-height'
        : 'bg-winter screen-height'
    "
  >
    <div class="mx-auto w-screen h-fit justify-center flex">
      <div
        v-if="inputStitchGoal"
        class="h-[70vh] w-screen flex flex-col justify-center items-center"
      >
        <form
          action=""
          class="flex flex-col gap-5 items-center w-fit"
          @submit.prevent="setStitchGoal()"
        >
          <label for="goal" class="text-white"><h2>Number of Stitches in Row</h2></label>
          <div class="flex w-full justify-end gap-5">
            <input
              type="number"
              id="goal"
              class="border-b-2 border-white text-2xl text-white text-right w-24"
              v-model="stitchGoal"
            />

            <input
              class="border-2 border-white text-white rounded-full px-3 py-1"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>

      <div v-else>
        <div
          class="h-[70vh] w-screen flex flex-col justify-center items-center"
          @click="addStitch()"
        >
          <h2 class="text-8xl text-white">{{ stitchCounter }} / {{ stitchGoal }}</h2>
        </div>
        <div class="flex justify-around">
          <button
            @click="resetToZero()"
            class="text-white border border-white hover:border-4 hover:*:font-bold px-3 py-1.5 rounded-full my-auto"
          >
            Reset Stitches
          </button>
          <button
            @click="removeStitch()"
            class="text-white border border-white hover:border-4 hover:*:font-bold px-3 py-1.5 rounded-full my-auto"
          >
            Remove 1 Stitch
          </button>
          <button
            @click="newStitchGoal()"
            class="text-white border border-white hover:border-4 hover:*:font-bold px-3 py-1.5 rounded-full my-auto"
          >
            Input New Row
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useStyleStore } from '@/stores/styles'
import { ref, onMounted } from 'vue'

const store = useStyleStore()

const navbarHeight = store.navbarHeight

let stitchCounter = ref(0)
let stitchGoal = ref(0)
let inputStitchGoal = ref(true)

function addStitch() {
  if (stitchCounter.value < stitchGoal.value) {
    stitchCounter.value++
    setStitches()
  }
}

function removeStitch() {
  if (stitchCounter.value > 0) {
    stitchCounter.value--
    setStitches()
  }
}

function resetToZero() {
  stitchCounter.value = 0
  setStitches()
}

function setStitchGoal() {
  inputStitchGoal.value = false
  stitchCounter.value = 0
  localStorage.setItem('stitchGoal', stitchGoal.value)
}

function newStitchGoal() {
  stitchCounter.value = 0
  stitchGoal.value = null
  inputStitchGoal.value = true
}

store.setNavbarColor('winter')
store.setBackgroundColor('winter')

function setStitches() {
  localStorage.setItem('completedStitches', stitchCounter.value)
}

function getStitches() {
  stitchCounter.value = parseInt(localStorage.getItem('completedStitches'))
  stitchGoal.value = parseInt(localStorage.getItem('stitchGoal'))
}

onMounted(() => {
  getStitches()
  if (stitchCounter.value || stitchGoal.value) {
    inputStitchGoal.value = false
  }
})
</script>

<style scoped>
.screen-height {
  height: calc(100vh - v-bind(navbarHeight + 'px'));
}
</style>

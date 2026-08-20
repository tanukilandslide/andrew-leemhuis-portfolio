<template>
  <main class="bg-winter h-screen">
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
              type="text"
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
          class="h-[80vh] w-screen flex flex-col justify-center items-center"
          @click="addStitch()"
        >
          <h2 class="text-8xl text-white">{{ counter }} / {{ stitchGoal }}</h2>
        </div>
        <div class="flex justify-around">
          <button
            @click="resetToZero()"
            class="text-white border border-white hover:border-4 hover:*:font-bold px-3 py-1.5 rounded-full my-auto"
          >
            Reset Stitches
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
import { ref } from 'vue'

const store = useStyleStore()

let counter = ref(0)
let stitchGoal = ref(0)
let inputStitchGoal = ref(true)

function addStitch() {
  counter.value++
}

function resetToZero() {
  counter.value = 0
}

function setStitchGoal() {
  inputStitchGoal.value = false
}

function newStitchGoal() {
  inputStitchGoal.value = true
  counter.value = 0
}

store.setNavbarColor('winter')
store.setBackgroundColor('loanprogresssimulator-navbar')
</script>

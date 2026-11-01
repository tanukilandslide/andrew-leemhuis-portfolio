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
        class="h-[70vh] w-screen flex flex-col gap-3 justify-center items-center"
      >
        <!-- New Crochet Counter -->
        <h2>{{ sumOfStitches }}</h2>
        {{ stitches }}
        <div class="flex flex-wrap gap-5">
          <div v-for="stitch in stitches">
            <div class="flex" v-if="stitch.stitch === 'single'">
              <div
                class="bg-red-600 px-5 py-2 object-center rounded-l-full cursor-pointer w-fit text-white flex"
                @click="deleteStichType(stitch.id)"
              >
                X
              </div>
              <div
                class="bg-emerald-700 px-5 py-2 object-center rounded-r-full cursor-pointer w-fit text-white flex"
              >
                <h3>single</h3>
                <input
                  type="number"
                  id="goal"
                  class="border-b-2 border-white text-2xl text-white text-right w-24"
                  v-model="stitch.number"
                />
              </div>
            </div>

            <div class="flex" v-if="stitch.stitch === 'increase'">
              <div
                class="bg-red-600 px-5 py-2 object-center rounded-l-full cursor-pointer w-fit text-white flex"
                @click="deleteStichType(stitch.id)"
              >
                X
              </div>
              <div
                class="bg-blue-700 px-5 py-2 object-center rounded-r-full cursor-pointer w-fit text-white flex"
              >
                <h3>increase</h3>
                <input
                  type="number"
                  id="goal"
                  class="border-b-2 border-white text-2xl text-white text-right w-24"
                  v-model="stitch.number"
                />
              </div>
            </div>

            <div class="flex" v-if="stitch.stitch === 'decrease'">
              <div
                class="bg-red-600 px-5 py-2 object-center rounded-l-full cursor-pointer w-fit text-white flex"
                @click="deleteStichType(stitch.id)"
              >
                X
              </div>
              <div
                class="bg-purple-700 px-5 py-2 object-center rounded-r-full cursor-pointer w-fit text-white flex"
              >
                <h3>decrease</h3>
                <input
                  type="number"
                  id="goal"
                  class="border-b-2 border-white text-2xl text-white text-right w-24"
                  v-model="stitch.number"
                />
              </div>
            </div>
          </div>

          <form action="" class="flex gap-5 items-center w-fit" @submit.prevent="setStitchGoal()">
            <h2>x</h2>
            <input
              type="number"
              id="goal"
              class="border-b-2 border-white text-2xl text-white text-right w-24"
              v-model="multiplier"
            />

            <input
              class="border-2 border-white text-white rounded-full px-3 py-1 cursor-pointer"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <div class="flex gap-3">
          <div
            class="bg-emerald-700 px-5 pt-2 rounded-full cursor-pointer"
            @click="addStitchType('single')"
          >
            <h1>Single +</h1>
          </div>
          <div
            class="bg-blue-700 px-5 pt-2 rounded-full cursor-pointer"
            @click="addStitchType('increase')"
          >
            <h1>Increase +</h1>
          </div>
          <div
            class="bg-purple-700 px-5 pt-2 rounded-full cursor-pointer"
            @click="addStitchType('decrease')"
          >
            <h1>Decrease +</h1>
          </div>
        </div>
      </div>

      <!-- Counter After Submit -->

      <div v-else>
        <div class="flex justify-center flex-wrap gap-5" @click="addStitch()">
          <div v-for="stitch in stitches">
            <div class="flex" v-if="stitch.stitch === 'single'">
              <div
                :class="
                  stitch.selected
                    ? 'bg-emerald-700 px-5 pt-2 object-center rounded-full cursor-pointer w-fit text-white flex'
                    : ' border-emerald-700 border-2 px-5 pt-2 object-center rounded-full cursor-pointer w-fit text-white flex'
                "
              >
                <h3>single</h3>
              </div>
            </div>

            <div class="flex" v-if="stitch.stitch === 'increase'">
              <div
                :class="
                  stitch.selected
                    ? 'bg-blue-700 px-5 pt-2 object-center rounded-full cursor-pointer w-fit text-white flex'
                    : 'border-blue-700 border-2 px-5 pt-2 object-center rounded-full cursor-pointer w-fit text-white flex'
                "
              >
                <h3>increase</h3>
              </div>
            </div>

            <div class="flex" v-if="stitch.stitch === 'decrease'">
              <div
                :class="
                  stitch.selected
                    ? 'bg-purple-700 px-5 pt-2 object-center rounded-full cursor-pointer w-fit text-white flex'
                    : 'border-purple-700 border-2 px-5 pt-2 object-center rounded-full cursor-pointer w-fit text-white flex'
                "
              >
                <h3>decrease</h3>
              </div>
            </div>
          </div>
        </div>
        <div
          class="h-[70vh] w-screen flex flex-col justify-center items-center"
          @click="addStitch()"
        >
          <div>
            {{ stitches }}
          </div>

          <h2 class="text-8xl text-white">{{ stitchCounter }} / {{ sumOfStitches }}</h2>
          <h3>{{ sumOfStitches }} here!</h3>
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
import { ref, reactive, onMounted, watch } from 'vue'

const store = useStyleStore()

const navbarHeight = store.navbarHeight

let stitchCounter = ref(0)
let stitchGoal = ref(0)
let inputStitchGoal = ref(true)
let stitches = reactive([])
let multiplier = ref(1)

let stitchHighlighter = 0

let sumOfStitches = ref(0)

function addStitchType(type) {
  console.log(stitches[stitches.length - 1])
  if (stitches.length === 0) {
    stitches.push({ id: 1, stitch: type, number: 1, selected: false })
  } else if (stitches[stitches.length - 1].stitch === type) {
    stitches[stitches.length - 1].number++
  } else {
    stitches.push({
      id: stitches[stitches.length - 1].id + 1,
      stitch: type,
      number: 1,
      selected: false,
    })
  }
}

function deleteStichType(identifier) {
  for (let i = 0; i < stitches.length; i++) {
    if (stitches[i].id === identifier) {
      stitches.splice(i, 1)
    }
  }
}

function calculateTotalStitches() {
  sumOfStitches.value = 0
  for (let i = 0; i < stitches.length; i++) {
    sumOfStitches.value += stitches[i].number
  }

  sumOfStitches.value *= multiplier.value
}

function addStitch() {
  if (stitchHighlighter < stitches.length) {
    console.log(stitches[stitchHighlighter])
    stitches[stitchHighlighter].selected = true
    stitchHighlighter++
  } else if (stitchCounter.value === sumOfStitches.value) {
    return
  } else {
    stitchHighlighter = 1
    for (let stitch of stitches) {
      if (stitch !== stitches[0]) {
        stitch.selected = false
      }
    }
  }

  if (stitchCounter.value < sumOfStitches.value) {
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
  stitchHighlighter = 0
  for (let stitch of stitches) {
    stitch.selected = false
  }
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

watch([stitches, multiplier], () => {
  calculateTotalStitches()
})

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

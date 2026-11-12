<template>
  <main class="bg-winter h-full">
    <div class="mx-auto w-screen h-fit justify-center flex">
      <div
        v-if="inputStitchGoal"
        class="screen-height h-full w-screen flex flex-col gap-3 justify-start items-center"
      >
        <div
          class="py-10 m-5 flex flex-col gap-5 justify-center items-center mb-5 rounded-2xl relative"
        >
          <div class="flex opacity-70 mb-50">
            <RouterLink to="/crochet-counter" class="no-underline font-bold flex items-center">
              <h2 class="text-white px-3 border-white border rounded-l-full">Basic</h2>
            </RouterLink>
            <div class="flex items-center">
              <h2 class="text-winter px-3 bg-white border-white border rounded-r-full">Advanced</h2>
            </div>
          </div>
          <!-- New Crochet Counter -->
          <div class="flex gap-5">
            <h1 class="text-white">Total stitches: &nbsp; {{ sumOfStitches }} &nbsp; x</h1>
            <form action="" class="flex gap-5 items-center w-fit" @submit.prevent="setStitchGoal()">
              <input
                type="number"
                id="goal"
                class="border-b-2 border-white text-2xl text-white text-center w-20"
                v-model="multiplier"
              />

              <h1 v-if="multiplier === 1" class="text-white">time</h1>
              <h1 v-else class="text-white">times</h1>

              <input
                class="border-2 border-white text-white rounded-full px-3 py-1 cursor-pointer"
                type="submit"
                value="Submit"
              />
            </form>
          </div>

          <div class="flex flex-wrap gap-5">
            <div v-for="stitch in stitches" :key="stitch.id">
              <!-- Slip -->

              <div class="flex" v-if="stitch.stitch === 'slip'">
                <div
                  class="bg-red-600 px-5 py-2 object-center rounded-l-full cursor-pointer w-fit text-white flex items-center"
                  @click="deleteStichType(stitch.id)"
                >
                  <h2 class="m-0">X</h2>
                </div>

                <div
                  class="bg-orange-300 px-5 py-2 object-center rounded-r-full cursor-pointer w-fit text-white flex gap-3"
                >
                  <!-- <h3 class="m-0">Slip</h3> -->
                  <input
                    type="number"
                    id="goal"
                    class="border-b-2 border-white text-2xl text-white text-center w-15"
                    v-model="stitch.number"
                  />
                  <h3 v-if="stitch.number === 1" class="m-0">Slip stitch</h3>
                  <h3 v-else class="m-0">Slip stitches</h3>
                </div>
              </div>

              <!-- Chain -->

              <div class="flex" v-if="stitch.stitch === 'chain'">
                <div
                  class="bg-red-600 px-5 py-2 object-center rounded-l-full cursor-pointer w-fit text-white flex"
                  @click="deleteStichType(stitch.id)"
                >
                  <h2 class="m-0">X</h2>
                </div>
                <div
                  class="bg-orange-600 px-5 py-2 object-center rounded-r-full cursor-pointer w-fit text-white flex gap-3"
                >
                  <!-- <h3>Chain</h3> -->
                  <input
                    type="number"
                    id="goal"
                    class="border-b-2 border-white text-2xl text-white text-center w-15"
                    v-model="stitch.number"
                  />
                  <h3 v-if="stitch.number === 1" class="m-0">Chain stitch</h3>
                  <h3 v-else class="m-0">Chain stitches</h3>
                </div>
              </div>

              <!-- Single -->

              <div class="flex" v-if="stitch.stitch === 'single'">
                <div
                  class="bg-red-600 px-5 py-2 object-center rounded-l-full cursor-pointer w-fit text-white flex"
                  @click="deleteStichType(stitch.id)"
                >
                  <h2 class="m-0">X</h2>
                </div>
                <div
                  class="bg-emerald-700 px-5 py-2 object-center rounded-r-full cursor-pointer w-fit text-white flex gap-3"
                >
                  <!-- <h3>Single</h3> -->
                  <input
                    type="number"
                    id="goal"
                    class="border-b-2 border-white text-2xl text-white text-center w-15"
                    v-model="stitch.number"
                  />
                  <h3 v-if="stitch.number === 1" class="m-0">Single stitch</h3>
                  <h3 v-else class="m-0">Single stitches</h3>
                </div>
              </div>

              <!-- Half Double -->

              <div class="flex" v-if="stitch.stitch === 'halfDouble'">
                <div
                  class="bg-red-600 px-5 py-2 object-center rounded-l-full cursor-pointer w-fit text-white flex"
                  @click="deleteStichType(stitch.id)"
                >
                  <h2 class="m-0">X</h2>
                </div>
                <div
                  class="bg-sky-500 px-5 py-2 object-center rounded-r-full cursor-pointer w-fit text-white flex gap-3"
                >
                  <!-- <h3 class="m-0">Half Double</h3> -->
                  <input
                    type="number"
                    id="goal"
                    class="border-b-2 border-white text-2xl text-white text-center w-15"
                    v-model="stitch.number"
                  />
                  <h3 v-if="stitch.number === 1" class="m-0">Half double stitch</h3>
                  <h3 v-else class="m-0">Half double stitches</h3>
                </div>
              </div>

              <!-- Double -->

              <div class="flex" v-if="stitch.stitch === 'double'">
                <div
                  class="bg-red-600 px-5 py-2 object-center rounded-l-full cursor-pointer w-fit text-white flex"
                  @click="deleteStichType(stitch.id)"
                >
                  <h2 class="m-0">X</h2>
                </div>
                <div
                  class="bg-lime-400 px-5 py-2 object-center rounded-r-full cursor-pointer w-fit text-white flex gap-3"
                >
                  <!-- <h3 class="m-0">Double</h3> -->
                  <input
                    type="number"
                    id="goal"
                    class="border-b-2 border-white text-2xl text-white text-center w-15"
                    v-model="stitch.number"
                  />
                  <h3 v-if="stitch.number === 1" class="m-0">Double stitch</h3>
                  <h3 v-else class="m-0">Double stitches</h3>
                </div>
              </div>

              <!-- Increase -->

              <div class="flex" v-if="stitch.stitch === 'increase'">
                <div
                  class="bg-red-600 px-5 py-2 object-center rounded-l-full cursor-pointer w-fit text-white flex"
                  @click="deleteStichType(stitch.id)"
                >
                  <h2 class="m-0">X</h2>
                </div>
                <div
                  class="bg-blue-700 px-5 py-2 object-center rounded-r-full cursor-pointer w-fit text-white flex gap-3"
                >
                  <!-- <h3 class="m-0">Increase</h3> -->
                  <input
                    type="number"
                    id="goal"
                    class="border-b-2 border-white text-2xl text-white text-center w-15"
                    v-model="stitch.number"
                  />
                  <h3 v-if="stitch.number === 1" class="m-0">Increase stitch</h3>
                  <h3 v-else class="m-0">Increase stitches</h3>
                </div>
              </div>

              <!-- Decrease -->

              <div class="flex" v-if="stitch.stitch === 'decrease'">
                <div
                  class="bg-red-600 px-5 py-2 object-center rounded-l-full cursor-pointer w-fit text-white flex"
                  @click="deleteStichType(stitch.id)"
                >
                  <h2 class="m-0">X</h2>
                </div>
                <div
                  class="bg-purple-700 px-5 py-2 object-center rounded-r-full cursor-pointer w-fit text-white flex gap-3"
                >
                  <!-- <h3 class="m-0">Decrease</h3> -->
                  <input
                    type="number"
                    id="goal"
                    class="border-b-2 border-white text-2xl text-white text-center w-15"
                    v-model="stitch.number"
                  />
                  <h3 v-if="stitch.number === 1" class="m-0">Decrease stitch</h3>
                  <h3 v-else class="m-0">Decrease stitches</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-5 my-10 flex-wrap justify-center text-white">
            <div
              class="bg-orange-300 px-4 py-1 flex items-center rounded-full cursor-pointer"
              @click="addStitchType('slip')"
              @keyup.s="addStitchType('slip')"
            >
              <h2 class="m-0">Slip +</h2>
            </div>

            <div
              class="bg-orange-600 px-4 py-1 items-center flex rounded-full cursor-pointer"
              @click="addStitchType('chain')"
              @keyup.s="addStitchType('chain')"
            >
              <h2 class="m-0">Chain +</h2>
            </div>

            <div
              class="bg-emerald-700 px-4 py-1 flex items-center rounded-full cursor-pointer"
              @click="addStitchType('single')"
              @keyup.s="addStitchType('single')"
            >
              <h2 class="m-0">Single +</h2>
            </div>

            <div
              class="bg-sky-500 px-4 py-1 flex items-center rounded-full cursor-pointer"
              @click="addStitchType('halfDouble')"
              @keyup.s="addStitchType('halfDouble')"
            >
              <h2 class="m-0">Half double +</h2>
            </div>

            <div
              class="bg-lime-400 px-4 py-1 flex items-center rounded-full cursor-pointer"
              @click="addStitchType('double')"
            >
              <h2 class="m-0">Double +</h2>
            </div>

            <div
              class="bg-blue-700 px-4 py-1 flex items-center rounded-full cursor-pointer"
              @click="addStitchType('increase')"
            >
              <h2 class="m-0">Increase +</h2>
            </div>

            <div
              class="bg-purple-700 px-4 py-1 flex items-center rounded-full cursor-pointer"
              @click="addStitchType('decrease')"
            >
              <h2 class="m-0">Decrease +</h2>
            </div>
          </div>
        </div>
      </div>

      <!-- Counter After Submit -->

      <div
        v-else
        class="w-screen flex flex-col gap-3 justify-start items-center mb-10 min-h-[90vh]"
      >
        <div
          class="py-10 m-5 w-[95vw] min-h-5/6 flex flex-col justify-center items-center border border-dashed border-white mb-5 rounded-2xl relative"
          @click="addStitch()"
        >
          <div class="flex justify-center flex-wrap gap-5">
            <div v-for="stitch in stitchRhythm" :key="stitch.id">
              <div class="flex" v-if="stitch.stitch === 'slip'">
                <div
                  :class="
                    stitch.selected
                      ? 'bg-orange-300 px-5 pt-2 object-center rounded-full cursor-pointer w-fit text-white flex'
                      : 'border-orange-300 border-2 px-5 pt-2 object-center rounded-full cursor-pointer w-fit text-white flex'
                  "
                >
                  <h3>Slip</h3>
                </div>
              </div>

              <div class="flex" v-if="stitch.stitch === 'chain'">
                <div
                  :class="
                    stitch.selected
                      ? 'bg-orange-600 px-5 pt-2 object-center rounded-full cursor-pointer w-fit text-white flex'
                      : 'border-orange-600 border-2 px-5 pt-2 object-center rounded-full cursor-pointer w-fit text-white flex'
                  "
                >
                  <h3>Chain</h3>
                </div>
              </div>

              <div class="flex" v-if="stitch.stitch === 'single'">
                <div
                  :class="
                    stitch.selected
                      ? 'bg-emerald-700 px-5 pt-2 object-center rounded-full cursor-pointer w-fit text-white flex'
                      : ' border-emerald-700 border-2 px-5 pt-2 object-center rounded-full cursor-pointer w-fit text-white flex'
                  "
                >
                  <h3>Single</h3>
                </div>
              </div>

              <div class="flex" v-if="stitch.stitch === 'halfDouble'">
                <div
                  :class="
                    stitch.selected
                      ? 'bg-sky-500 px-5 pt-2 object-center rounded-full cursor-pointer w-fit text-white flex'
                      : 'border-sky-500  border-2 px-5 pt-2 object-center rounded-full cursor-pointer w-fit text-white flex'
                  "
                >
                  <h3>Half Double</h3>
                </div>
              </div>

              <div class="flex" v-if="stitch.stitch === 'double'">
                <div
                  :class="
                    stitch.selected
                      ? 'bg-lime-400 px-5 pt-2 object-center rounded-full cursor-pointer w-fit text-white flex'
                      : ' border-lime-700 border-2 px-5 pt-2 object-center rounded-full cursor-pointer w-fit text-white flex'
                  "
                >
                  <h3>Double</h3>
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
                <!-- <div
                :class="
                  stitch.secondSelected
                    ? 'bg-blue-700 px-5 pt-2 object-center rounded-r-full cursor-pointer w-fit text-white flex'
                    : 'border-blue-700 border-2 px-5 pt-2 object-center rounded-r-full cursor-pointer w-fit text-white flex'
                "
              >
                <h3>increase</h3>
              </div> -->
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
          <!-- <div>
            {{ stitchRhythm }}
          </div> -->

          <h2 class="text-8xl text-white">{{ stitchCounter }} / {{ sumOfStitches }}</h2>

          <h3 class="text-white opacity-50 absolute bottom-0">Click inside to add a stitch!</h3>
        </div>
        <div class="flex justify-around gap-3">
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
import { onKeyUp, onKeyDown } from '@vueuse/core'

const store = useStyleStore()

const navbarHeight = store.navbarHeight

let stitchCounter = ref(0)
let stitchGoal = ref(0)
let inputStitchGoal = ref(false)
let stitches = reactive([])
let stitchRhythm = reactive([])
let multiplier = ref(1)

let stringifiedRhythm = reactive(JSON.stringify(stitchRhythm))

let stitchHighlighter = 0

let sumOfStitches = ref(0)

function addStitchType(type) {
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
    if (stitches[i].stitch === 'increase') {
      sumOfStitches.value += stitches[i].number * 2
    } else {
      sumOfStitches.value += stitches[i].number
    }
  }

  sumOfStitches.value *= multiplier.value
}

function addStitch() {
  if (stitchHighlighter < stitchRhythm.length) {
    stitchRhythm[stitchHighlighter].selected = true
    stitchHighlighter++
  } else if (stitchCounter.value === sumOfStitches.value) {
    return
  } else {
    stitchHighlighter = 1
    for (let stitch of stitchRhythm) {
      if (stitch !== stitchRhythm[0]) {
        stitch.selected = false
      }
    }
  }

  if (stitchCounter.value < sumOfStitches.value) {
    stitchCounter.value++
    setStitches()
  }
  localStorage.setItem('stitchCounterAdvanced', stitchCounter.value)
  localStorage.setItem('stitchRhythm', JSON.stringify(stitchRhythm))
  localStorage.setItem('stitchHighlighter', stitchHighlighter)
}

function removeStitch() {
  if (stitchCounter.value > 0) {
    stitchCounter.value--
    if (stitchHighlighter === 0) {
      for (let i = 0; i < stitchRhythm.length - 1; i++) {
        stitchRhythm[i].selected = true
      }
      stitchHighlighter = stitchRhythm.length - 1
    } else {
      stitchRhythm[stitchHighlighter - 1].selected = false
      stitchHighlighter--
      setStitches()
    }
  }
}

function resetToZero() {
  stitchCounter.value = 0
  stitchHighlighter = 0
  for (let stitch of stitchRhythm) {
    stitch.selected = false
  }
  setStitches()
}

function setStitchGoal() {
  inputStitchGoal.value = false
  stitchCounter.value = 0

  for (let stitch in stitches) {
    if (stitches[stitch].number === 1) {
      if (stitches[stitch].stitch === 'increase') {
        for (let i = 1; i <= 2; i++) {
          stitchRhythm.push({
            stitch: 'increase',
            selected: false,
          })
        }
      } else {
        stitchRhythm.push({ stitch: stitches[stitch].stitch, selected: false })
      }
    } else {
      for (let i = 1; i <= stitches[stitch].number; i++) {
        if (stitches[stitch].stitch === 'increase') {
          for (let i = 1; i <= 2; i++) {
            stitchRhythm.push({
              stitch: 'increase',
              selected: false,
            })
          }
        } else {
          stitchRhythm.push({ stitch: stitches[stitch].stitch, selected: false })
        }
      }
    }
  }

  localStorage.setItem('stitchRhythm', JSON.stringify(stitchRhythm))
  localStorage.setItem('stitchCounterAdvanced', stitchCounter.value)
  localStorage.setItem('sumOfStitches', sumOfStitches.value)
}

function newStitchGoal() {
  stitchCounter.value = 0
  stitchGoal.value = null
  stitches.length = 0
  stitchRhythm.length = 0
  stitchHighlighter = 0
  multiplier.value = 1
  inputStitchGoal.value = true
}

store.setNavbarColor('winter')
store.setBackgroundColor('winter')

function setStitches() {
  localStorage.setItem('stitchCounterAdvanced', stitchCounter.value)
  localStorage.setItem('stitchRhythm', JSON.stringify(stitchRhythm))
  localStorage.setItem('stitchHighlighter', stitchHighlighter)
}

function getStitches() {
  stitchCounter.value = parseInt(localStorage.getItem('stitchCounterAdvanced'))
  sumOfStitches.value = parseInt(localStorage.getItem('sumOfStitches'))
  stitchRhythm = JSON.parse(localStorage.getItem('stitchRhythm'))
  stitchHighlighter = parseInt(localStorage.getItem('stitchHighlighter'))
}

watch([stitches, multiplier], () => {
  calculateTotalStitches()
})

onKeyDown(' ', (e) => {
  e.preventDefault()
})

onKeyUp(' ', (e) => {
  e.preventDefault()
  addStitch()
})

onKeyUp('Backspace', (e) => {
  e.preventDefault()
  removeStitch()
})

onKeyUp('r', (e) => {
  e.preventDefault()
  resetToZero()
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

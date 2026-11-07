<template>
  <main class="bg-winter h-full">
    <div class="mx-auto w-screen h-fit justify-center flex">
      <div
        v-if="inputStitchGoal"
        class="screen-height h-full w-screen flex flex-col gap-3 justify-start items-center"
      >
        <div class="py-10 m-5 flex flex-col justify-center items-center mb-5 rounded-2xl relative">
          <div class="flex opacity-70 mb-50">
            <RouterLink to="/crochet-counter" class="no-underline font-bold flex items-center">
              <h2 class="text-white px-3 border-white border rounded-l-full">Basic</h2>
            </RouterLink>
            <div class="flex items-center">
              <h2 class="text-winter px-3 bg-white border-white border rounded-r-full">Advanced</h2>
            </div>
          </div>
          <!-- New Crochet Counter -->
          <div class="flex">
            <h1 class="text-white">Total stitches: {{ sumOfStitches }} *</h1>
            <form action="" class="flex gap-5 items-center w-fit" @submit.prevent="setStitchGoal()">
              <input
                type="number"
                id="goal"
                class="border-b-2 border-white text-2xl text-white text-right w-20"
                v-model="multiplier"
              />

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
                  class="bg-red-600 px-5 py-2 object-center rounded-l-full cursor-pointer w-fit text-white flex"
                  @click="deleteStichType(stitch.id)"
                >
                  X
                </div>
                <div
                  class="bg-orange-300 px-5 py-2 object-center rounded-r-full cursor-pointer w-fit text-white flex"
                >
                  <h3>Slip</h3>
                  <input
                    type="number"
                    id="goal"
                    class="border-b-2 border-white text-2xl text-white text-right w-24"
                    v-model="stitch.number"
                  />
                </div>
              </div>

              <!-- Chain -->

              <div class="flex" v-if="stitch.stitch === 'chain'">
                <div
                  class="bg-red-600 px-5 py-2 object-center rounded-l-full cursor-pointer w-fit text-white flex"
                  @click="deleteStichType(stitch.id)"
                >
                  X
                </div>
                <div
                  class="bg-orange-600 px-5 py-2 object-center rounded-r-full cursor-pointer w-fit text-white flex"
                >
                  <h3>Chain</h3>
                  <input
                    type="number"
                    id="goal"
                    class="border-b-2 border-white text-2xl text-white text-right w-24"
                    v-model="stitch.number"
                  />
                </div>
              </div>

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
                  <h3>Single</h3>
                  <input
                    type="number"
                    id="goal"
                    class="border-b-2 border-white text-2xl text-white text-right w-24"
                    v-model="stitch.number"
                  />
                </div>
              </div>

              <div class="flex" v-if="stitch.stitch === 'halfDouble'">
                <div
                  class="bg-red-600 px-5 py-2 object-center rounded-l-full cursor-pointer w-fit text-white flex"
                  @click="deleteStichType(stitch.id)"
                >
                  X
                </div>
                <div
                  class="bg-sky-500 px-5 py-2 object-center rounded-r-full cursor-pointer w-fit text-white flex"
                >
                  <h3>Half Double</h3>
                  <input
                    type="number"
                    id="goal"
                    class="border-b-2 border-white text-2xl text-white text-right w-24"
                    v-model="stitch.number"
                  />
                </div>
              </div>

              <div class="flex" v-if="stitch.stitch === 'double'">
                <div
                  class="bg-red-600 px-5 py-2 object-center rounded-l-full cursor-pointer w-fit text-white flex"
                  @click="deleteStichType(stitch.id)"
                >
                  X
                </div>
                <div
                  class="bg-lime-400 px-5 py-2 object-center rounded-r-full cursor-pointer w-fit text-white flex"
                >
                  <h3>double</h3>
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
          </div>
          <div class="flex gap-3 my-10 flex-wrap text-white">
            <div
              class="bg-orange-300 px-5 pt-2 rounded-full cursor-pointer"
              @click="addStitchType('slip')"
              @keyup.s="addStitchType('slip')"
            >
              <h2>Slip +</h2>
            </div>
            <div
              class="bg-orange-600 px-5 pt-2 rounded-full cursor-pointer"
              @click="addStitchType('chain')"
              @keyup.s="addStitchType('chain')"
            >
              <h2>Chain +</h2>
            </div>
            <div
              class="bg-emerald-700 px-5 pt-2 rounded-full cursor-pointer"
              @click="addStitchType('single')"
              @keyup.s="addStitchType('single')"
            >
              <h2>Single +</h2>
            </div>
            <div
              class="bg-sky-500 px-5 pt-2 rounded-full cursor-pointer"
              @click="addStitchType('halfDouble')"
              @keyup.s="addStitchType('halfDouble')"
            >
              <h2>Half double +</h2>
            </div>
            <div
              class="bg-lime-400 px-5 pt-2 rounded-full cursor-pointer"
              @click="addStitchType('double')"
            >
              <h2>Double +</h2>
            </div>
            <div
              class="bg-blue-700 px-5 pt-2 rounded-full cursor-pointer"
              @click="addStitchType('increase')"
            >
              <h2>Increase +</h2>
            </div>
            <div
              class="bg-purple-700 px-5 pt-2 rounded-full cursor-pointer"
              @click="addStitchType('decrease')"
            >
              <h2>Decrease +</h2>
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
import { onKeyUp, onKeyDown } from '@vueuse/core'

const store = useStyleStore()

const navbarHeight = store.navbarHeight

let stitchCounter = ref(0)
let stitchGoal = ref(0)
let inputStitchGoal = ref(true)
let stitches = reactive([])
let stitchRhythm = reactive([])
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
    console.log(stitches[i].stitch)
    if (stitches[i].stitch === 'increase') {
      sumOfStitches.value += stitches[i].number * 2
    } else {
      sumOfStitches.value += stitches[i].number
    }
  }

  sumOfStitches.value *= multiplier.value
}

function addStitch() {
  // if (stitchHighlighter < stitches.length && stitches[stitchHighlighter].stitch === 'increase') {
  //   if (stitches[stitchHighlighter].firstSelected === true) {
  //     stitches[stitchHighlighter].secondSelectedSelected = true
  //   } else {
  //     stitches[stitchHighlighter].firstSelected = true
  //   }
  //   stitchHighlighter++
  // } else
  if (stitchHighlighter < stitchRhythm.length) {
    console.log(stitchRhythm[stitchHighlighter])
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
  localStorage.setItem('stitchGoal', stitchGoal.value)

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

  console.log(stitchRhythm)
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
  localStorage.setItem('completedStitches', stitchCounter.value)
}

function getStitches() {
  stitchCounter.value = parseInt(localStorage.getItem('completedStitches'))
  stitchGoal.value = parseInt(localStorage.getItem('stitchGoal'))
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

// onMounted(() => {
//   getStitches()
//   if (stitchCounter.value || stitchGoal.value) {
//     inputStitchGoal.value = false
//   }
// })
</script>

<style scoped>
.screen-height {
  height: calc(100vh - v-bind(navbarHeight + 'px'));
}
</style>

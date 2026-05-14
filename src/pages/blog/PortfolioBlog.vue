<template>
  <div :class="`w-screen bg-${store.backgroundColor}`" ref="container">
    <main class="max-w-245 pt-5">
      <h1 class="text-white">Blog Standard</h1>

      <div
        class="bg-black/50 px-3 pt-3 pb-1 mb-5 rounded-md text-white"
        v-for="blog in allBlogs"
        :key="blog.id"
        @click="selectBlog(blog.id)"
      >
        <div class="flex items-center gap-3">
          <h2>{{ blog.title }}</h2>
          <p>{{ blog.date }}</p>
        </div>
        <p v-if="blog.contentVisible">{{ blog.content }}</p>
        <!-- <p>{{ blog.content }}</p> -->
      </div>

      <div class="">
        <form class="m-3 flex flex-col gap-5" @submit.prevent="tryHandleSubmit">
          <div class="flex flex-col">
            <label for="title">Blog Title</label>
            <input
              class="border-[#008F11] bg-black/20 text-[#00FF41] border-2 p-3 mt-3 rounded-md"
              placeholder="Enter blog title"
              id="title"
              v-model="title"
            />
          </div>

          <div class="flex flex-col">
            <label class="" for="content">Blog content</label>
            <input
              class="border-[#008F11] bg-black/20 text-[#00FF41] border-2 p-3 mt-3 rounded-md"
              id="content"
              placeholder="Type your thoughts"
              v-model="content"
            />
          </div>

          <!-- <textarea
        name="message"
        id="message"
        class="border-summer border-2 rounded-md p-3 m-3"
        placeholder="Hi there! Send a message"
        v-model="message"
      ></textarea> -->
          <div class="submit">
            <button class="bg-loanprogresssimulator-navbar text-white rounded-md p-3">
              Click to submit
            </button>
            <button
              class="bg-loanprogresssimulator-navbar text-white rounded-md p-3 ms-3"
              @click="updateProduct"
            >
              Click to update
            </button>
          </div>
        </form>
      </div>
      <!-- <h2>{{ allBlogs }}</h2> -->

      <div v-for="product in allBlogs" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }}</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useStyleStore } from '@/stores/styles'
import { onMounted, reactive, ref } from 'vue'

const store = useStyleStore()
let allBlogs = ref()
let title = ref('')
let content = ref('')
// let message = ref('')

store.setNavbarColor('summer')
store.setBackgroundColor('summer')

// function getProducts() {
//   fetch('http://localhost:3000/products')
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Server error: ${response.status} ${response.statusText}`)
//       }
//       return response.json()
//     })
//     .then((data) => {
//       allBlogs.value = data
//     })
//     .catch((err) => {
//       console.error(err)
//     })
// }

async function getAllBlogs() {
  try {
    let response = await fetch('http://localhost:3000/blogs')
    let data = await response.json()
    console.log(data)
    allBlogs.value = data

    for (let blog of allBlogs.value) {
      blog.contentVisible = false
      console.log(blog)
    }
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}

function selectBlog(blogId) {
  const blog = allBlogs.value.find((blog) => blog.id === blogId)
  blog.contentVisible = true
}

function handleSubmit() {
  const newProduct = {
    name: name.value,
    price: price.value,
  }

  fetch('http://localhost:3000/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProduct),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Response from server: ', data)
    })
}

async function tryHandleSubmit() {
  const newBlog = {
    title: title.value,
    content: content.value,
    date: new Date(),
  }

  try {
    let response = await fetch('http://localhost:3000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBlog),
    })

    let data = await response.json()
    console.log(data)

    allBlogs.value = data.blogs
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}

onMounted(() => {
  getAllBlogs()
})
</script>

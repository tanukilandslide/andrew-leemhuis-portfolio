const express = require('express')
const router = express.Router()

let blogs = [
  {
    id: 1,
    title: 'The Blog and the Furious',
    date: 'May 5, 2026',
    content:
      "This is my first blog! It's not much, but I hope it can be a springboard to learn and demonstrate my growth in software development. \n \n Follow me on my journey!",
  },
  {
    id: 2,
    title: '2 Blog 2 Furious',
    date: 'May 6, 2026',
    content:
      "This is my second blog! It's not much, but hopefully it's better than the last one. \n \n Follow me on my journey!",
  },
]

router.get('/', (req, res) => {
  res.json(blogs)
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)

  const blog = blogs.find((blog) => blogs.id === blog)

  req.json(blog)
})

router.post('/', (req, res) => {
  const blog = req.body
  console.log('New blog: ', blog)

  blog.id = blogs.length + 1

  blogs.push(blog)

  res.json({ blogs })
})

module.exports = router

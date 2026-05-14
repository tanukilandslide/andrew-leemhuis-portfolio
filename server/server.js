const cors = require('cors')
const express = require('express')
const blogsRouter = require('./blogs')

const app = express()

app.use(
  cors({
    origin: ['http://localhost:5173'],
  }),
)

app.use((req, res, next) => {
  console.log(req.method, req.path)
  next()
})

app.use(express.json())

app.use('/blogs', blogsRouter)

app.get('/', (req, res) => {
  res.send('Hello from Express')
})

app.listen(3000, () => {
  console.log('The server is up!')
})

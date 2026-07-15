import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

import cors from 'cors'
import express from 'express'
import blogsRouter from './blogs.js'
import { createClient } from '@supabase/supabase-js'

const app = express()

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY)

const router = express.Router()

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

app.use('/blogs', blogsRouter(supabase))

router.get('/', (req, res) => {
  res.send('Hello from Express')
})

app.listen(3000, () => {
  console.log('The server is up!')
})

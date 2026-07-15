import express from 'express'

async function getAllBlogs(supabase) {
  const { data, error } = await supabase
    .from('blogs')
    .select('*, user:user_id (username)')
    .order('id', { ascending: true })

  if (error) throw error
  return data
}

export default function blogsRouter(supabase) {
  const router = express.Router()

  router.get('/', async (req, res) => {
    try {
      const data = await getAllBlogs(supabase)
      console.log(data)
      res.json(data)
    } catch (err) {
      res.status(500).json({
        error: err.message,
      })
    }
  })

  router.get('/:id', async (req, res) => {
    const id = Number(req.params.id)

    try {
      const { data, error } = await supabase.from('blogs').select('*').eq('id', id).single()

      if (error) throw error
      res.json(data)
    } catch (err) {
      res.status(404).json({ error: err.message })
    }
  })

  router.post('/', async (req, res) => {
    const blog = req.body

    try {
      const { error } = await supabase.from('blogs').insert([blog])
      if (error) throw error

      const allBlogs = await getAllBlogs(supabase)
      res.json(allBlogs)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  })

  return router
}
